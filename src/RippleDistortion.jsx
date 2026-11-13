import { useEffect, useRef, useState } from "react";
import { Geometry, Mesh, Program, RenderTarget, Renderer, Texture, Triangle } from "ogl";

const MAX_WAVES = 100;
const START_SCALE = 1.5;
const LIFE_CONSTANT = Math.log(500);
const BRUSH_SIZE_REM = 9.375;
const SPACING_REM = 0.9375;
const FADE = 3;
const SPREAD = 5;

const waveVertex = `
precision highp float;
attribute vec2 position;
attribute vec2 uv;
attribute vec2 iOffset;
attribute vec2 iScale;
attribute float iOpacity;
varying vec2 vUv;
varying float vOpacity;
void main() {
  vUv = uv;
  vOpacity = iOpacity;
  gl_Position = vec4(iOffset + position * iScale, 0.0, 1.0);
}
`;

const waveFragment = `
precision highp float;
varying vec2 vUv;
varying float vOpacity;
uniform float uRings;
const float PI = 3.141592653589793;
const float EDGE = 0.006737947;
void main() {
  vec2 p = vUv * 2.0 - 1.0;
  float r = dot(p, p);
  if (r > 1.0) discard;
  float brush = (exp(-r * 5.0) - EDGE) / (1.0 - EDGE);
  brush *= 0.55 + 0.45 * cos(sqrt(r) * PI * 2.0 * uRings);
  gl_FragColor = vec4(vec3(brush * vOpacity * vOpacity), 1.0);
}
`;

const screenVertex = `
precision highp float;
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const compositeFragment = `
precision highp float;
varying vec2 vUv;
uniform sampler2D uTexture;
uniform sampler2D uDisplacement;
uniform vec2 uResolution;
uniform vec2 uTextureSize;
uniform float uStrength;
uniform float uSwirl;
const float TAU = 6.283185307179586;
vec2 coverUV(vec2 uv) {
  vec2 safe = max(uTextureSize, vec2(1.0));
  vec2 s = uResolution / safe;
  vec2 scaledSize = safe * max(s.x, s.y);
  vec2 offset = (uResolution - scaledSize) * 0.5;
  return (uv * uResolution - offset) / scaledSize;
}
void main() {
  float amount = texture2D(uDisplacement, vUv).r;
  vec2 base = coverUV(vUv);
  float theta = amount * uSwirl * TAU;
  vec2 dir = vec2(sin(theta), cos(theta));
  vec2 push = dir * amount * uStrength;
  gl_FragColor = vec4(texture2D(uTexture, base + push).rgb, 1.0);
}
`;

export const RippleDistortion = ({ src, className = "" }) => {
  const mountRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const renderer = new Renderer({
      alpha: false,
      antialias: false,
      dpr: Math.min(window.devicePixelRatio || 1, 2),
    });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 1);
    const canvas = gl.canvas;
    mount.appendChild(canvas);

    const imageTexture = new Texture(gl, {
      generateMipmaps: false,
      minFilter: gl.LINEAR,
      magFilter: gl.LINEAR,
      wrapS: gl.CLAMP_TO_EDGE,
      wrapT: gl.CLAMP_TO_EDGE,
    });

    const image = new window.Image();
    image.decoding = "async";

    const offsets = new Float32Array(MAX_WAVES * 2);
    const scales = new Float32Array(MAX_WAVES * 2);
    const opacities = new Float32Array(MAX_WAVES);
    const waves = Array.from({ length: MAX_WAVES }, () => ({
      x: 0,
      y: 0,
      scale: START_SCALE,
      target: START_SCALE,
      size: 1,
      opacity: 0,
    }));
    let current = 0;

    const geometry = new Geometry(gl, {
      position: {
        size: 2,
        data: new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      },
      uv: { size: 2, data: new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]) },
      iOffset: { instanced: 1, size: 2, data: offsets },
      iScale: { instanced: 1, size: 2, data: scales },
      iOpacity: { instanced: 1, size: 1, data: opacities },
    });

    const waveProgram = new Program(gl, {
      vertex: waveVertex,
      fragment: waveFragment,
      uniforms: { uRings: { value: 4 } },
      transparent: true,
      depthTest: false,
      depthWrite: false,
      cullFace: false,
    });
    waveProgram.setBlendFunc(gl.ONE, gl.ONE);
    const waveMesh = new Mesh(gl, { geometry, program: waveProgram, frustumCulled: false });

    const displacementTarget = new RenderTarget(gl, {
      width: 2,
      height: 2,
      depth: false,
      minFilter: gl.LINEAR,
      magFilter: gl.LINEAR,
      wrapS: gl.CLAMP_TO_EDGE,
      wrapT: gl.CLAMP_TO_EDGE,
    });

    const compositeUniforms = {
      uTexture: { value: imageTexture },
      uDisplacement: { value: displacementTarget.texture },
      uResolution: { value: [1, 1] },
      uTextureSize: { value: [1, 1] },
      uStrength: { value: 0.2 },
      uSwirl: { value: 1 },
    };
    const compositeMesh = new Mesh(gl, {
      geometry: new Triangle(gl),
      program: new Program(gl, {
        vertex: screenVertex,
        fragment: compositeFragment,
        uniforms: compositeUniforms,
        depthTest: false,
        depthWrite: false,
      }),
    });

    let disposed = false;
    image.onload = () => {
      if (disposed) return;
      imageTexture.image = image;
      compositeUniforms.uTextureSize.value = [image.naturalWidth || 1, image.naturalHeight || 1];
      setLoaded(true);
    };
    image.onerror = () => {
      if (!disposed) console.error(`Failed to load ripple image: ${src}`);
    };
    image.src = src;

    let width = 1;
    let height = 1;
    let resizePending = false;
    const resize = () => {
      width = Math.max(1, mount.clientWidth);
      height = Math.max(1, mount.clientHeight);
      renderer.setSize(width, height);
      compositeUniforms.uResolution.value = [width, height];
      displacementTarget.setSize(Math.max(2, Math.round(width * 0.7)), Math.max(2, Math.round(height * 0.7)));
    };
    const resizeObserver = new ResizeObserver(() => {
      resizePending = true;
    });
    resizeObserver.observe(mount);
    resize();

    const setNewWave = (x, y, power = 1) => {
      const wave = waves[current];
      current = (current + 1) % MAX_WAVES;
      wave.x = x;
      wave.y = y;
      wave.scale = START_SCALE * power;
      wave.target = START_SCALE * SPREAD * power;
      wave.size = BRUSH_SIZE_REM * Number.parseFloat(window.getComputedStyle(document.documentElement).fontSize);
      wave.opacity = 1;
    };
    const localPoint = (clientX, clientY) => {
      const rect = mount.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return null;
      if (clientX < rect.left || clientX > rect.right || clientY < rect.top || clientY > rect.bottom) {
        return null;
      }
      return [clientX - rect.left, rect.height - (clientY - rect.top)];
    };

    let previousX = 0;
    let previousY = 0;
    const onMove = (event) => {
      if (reduceMotion || isCoarsePointer) return;
      const point = localPoint(event.clientX, event.clientY);
      if (!point) return;
      const spacing = SPACING_REM * Number.parseFloat(window.getComputedStyle(document.documentElement).fontSize);
      if (Math.abs(point[0] - previousX) > spacing || Math.abs(point[1] - previousY) > spacing) {
        setNewWave(point[0], point[1]);
        previousX = point[0];
        previousY = point[1];
      }
    };
    const onDown = (event) => {
      if (reduceMotion || !isCoarsePointer) return;
      const point = localPoint(event.clientX, event.clientY);
      if (point) setNewWave(point[0], point[1], 2);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });

    let animationFrame = 0;
    let previousTime = 0;
    const render = (now) => {
      if (resizePending) {
        resizePending = false;
        resize();
      }

      animationFrame = window.requestAnimationFrame(render);
      const delta = previousTime ? Math.min(0.05, (now - previousTime) / 1000) : 0;
      previousTime = now;
      const growth = reduceMotion ? 0 : 1 - Math.exp(-delta * 1.09);
      const decay = reduceMotion ? 1 : Math.exp((-delta * LIFE_CONSTANT) / FADE);

      for (let i = 0; i < MAX_WAVES; i += 1) {
        const wave = waves[i];
        if (wave.opacity <= 0) {
          opacities[i] = 0;
          continue;
        }

        wave.opacity *= decay;
        wave.scale += (wave.target - wave.scale) * growth;
        if (wave.opacity < 0.002) {
          wave.opacity = 0;
          opacities[i] = 0;
          continue;
        }

        const halfSize = (wave.scale * wave.size) / 2;
        offsets[i * 2] = (wave.x / width) * 2 - 1;
        offsets[i * 2 + 1] = (wave.y / height) * 2 - 1;
        scales[i * 2] = (halfSize / width) * 2;
        scales[i * 2 + 1] = (halfSize / height) * 2;
        opacities[i] = wave.opacity;
      }

      geometry.attributes.iOffset.needsUpdate = true;
      geometry.attributes.iScale.needsUpdate = true;
      geometry.attributes.iOpacity.needsUpdate = true;
      renderer.render({ scene: waveMesh, target: displacementTarget, clear: true });
      renderer.render({ scene: compositeMesh });
    };
    animationFrame = window.requestAnimationFrame(render);

    return () => {
      disposed = true;
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      if (canvas.parentNode === mount) mount.removeChild(canvas);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [src]);

  return (
    <div
      ref={mountRef}
      role="img"
      aria-label="Portrait of Chinaza Icheke"
      className={`overflow-hidden bg-[#030303] [&>canvas]:block [&>canvas]:h-full [&>canvas]:w-full ${loaded ? "opacity-100" : "opacity-0"} ${className}`.trim()}
    />
  );
};

export default RippleDistortion;
