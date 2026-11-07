export const Button = ({ href, className = "", children }) => {
  return (
    <a
      href={href}
      className={`flex h-12 w-32.25 items-center justify-center rounded-full bg-[#e85626] pt-0.75 font-helvetica text-[17px] font-medium leading-none text-white shadow-[inset_0_4px_4px_rgba(255,255,255,0.11),inset_0_-4px_1px_rgba(0,0,0,0.13)] ${className}`}
    >
      {children}
    </a>
  );
};

export default Button;
