import React from "react";

const sizes = {
  "5xl": "text-[17px] font-normal",
  "6xl": "text-lg font-normal",
  "7xl": "text-[19px] font-normal",
  "8xl": "text-xl font-normal",
  "2xl": "text-sm font-normal",
  "3xl": "text-[15px] font-normal",
  "4xl": "text-base font-normal",
  xs: "text-[6px] font-normal",
  lg: "text-xs font-medium",
  s: "text-[9px] font-normal",
  xl: "text-[13px] font-normal",
  "9xl": "text-[22px] font-medium",
  "10xl": "text-2xl font-medium md:text-[22px]",
  md: "text-[11px] font-normal",
};

const Text = ({ children, className = "", as, size = "xl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-black-900 font-inter ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
