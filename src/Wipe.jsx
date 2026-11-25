export function Wipe({ delay = 0, release = false, className = "", children }) {
  return (
    <div data-delay={delay} data-release={release || undefined} className={`overflow-hidden wipe ${className}`}>
      <div className="pointer-events-none invisible absolute inset-0 overflow-hidden wipe-band">
        <div className="size-full wipe-band-inner">
          <div className="size-full bg-[#e85626] wipe-band-fill" />
        </div>
      </div>
      <div className="relative overflow-hidden wipe-window">
        <div className="flex wipe-inner">{children}</div>
      </div>
    </div>
  );
}

export default Wipe;
