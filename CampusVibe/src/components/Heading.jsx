import React from "react";

const sizes = {
  "3xl": "text-[26px] font-semibold md:text-2xl sm:text-[22px]",
  "2xl": "text-2xl font-bold md:text-[22px]",
  "5xl": "text-[46px] font-bold md:text-[42px] sm:text-4xl",
  xl: "text-[22px] font-semibold",
  "4xl": "text-3xl font-semibold md:text-[28px] sm:text-[26px]",
  "6xl": "text-[52px] font-bold md:text-[44px] sm:text-[38px]",
  s: "text-sm font-semibold",
  md: "text-base font-bold",
  xs: "text-xs font-semibold",
  lg: "text-lg font-semibold",
};

const Heading = ({
  children,
  className = "",
  size = "lg",
  as,
  ...restProps
}) => {
  const Component = as || "h6";
  return (
    <Component
      className={` text-blue_gray-900_01 font-inter ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };
