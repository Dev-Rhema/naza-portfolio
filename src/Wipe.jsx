export function Wipe({ delay = 0, className = "", children }) {
  return (
    <div data-delay={delay} className={`overflow-hidden wipe ${className}`}>
      <div className="overflow-hidden wipe-window">
        <div className="flex wipe-inner">{children}</div>
      </div>
      <div className="pointer-events-none invisible absolute inset-x-0 top-0 h-[12.5%] bg-[#e85626] wipe-band" />
    </div>
  );
}

export default Wipe;
