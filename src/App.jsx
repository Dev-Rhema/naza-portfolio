import { lazy, Suspense, useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loader from "./loader";
import { caseStudies } from "./data";

const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const CaseStudy = lazy(() => import("./Pages/CaseStudy"));

const toTop = () => scrollTo(0, 0);

function App() {
  const [loading, setLoading] = useState("full");
  const [revealed, setRevealed] = useState(false);
  const [path, setPath] = useState(location.pathname);
  const [visit, setVisit] = useState(0);
  const page = path.replace(/\/$/, "");
  const study = caseStudies[page.replace("/works/", "")];

  useEffect(() => {
    history.scrollRestoration = "manual";
    const go = () => {
      scrollTo(0, 0);
      ScrollTrigger.addEventListener("refresh", toTop);
      setPath(location.pathname);
      setLoading("quick");
      setRevealed(false);
      setVisit((v) => v + 1);
    };
    const click = (e) => {
      const link = e.target.closest("a");
      if (!link || link.target || link.origin !== location.origin || link.getAttribute("href").startsWith("#") || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      e.preventDefault();
      history.pushState(null, "", link.pathname);
      go();
    };
    addEventListener("click", click);
    addEventListener("popstate", go);
    return () => {
      removeEventListener("click", click);
      removeEventListener("popstate", go);
    };
  }, []);

  return (
    <>
      {loading && (
        <Loader
          quick={loading === "quick"}
          onReveal={() => setRevealed(true)}
          onComplete={() => {
            ScrollTrigger.removeEventListener("refresh", toTop);
            setLoading(false);
          }}
        />
      )}
      <Suspense key={visit}>
        {page === "/about" ? <About loaded={revealed} /> : study?.overview ? <CaseStudy study={study} loaded={revealed} /> : <Home loaded={revealed} />}
      </Suspense>
    </>
  );
}

export default App;
