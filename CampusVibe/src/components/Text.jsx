import React from "react";

const sizes = {
  xs: "text-sm font-normal",
  lg: "text-lg font-normal",
  s: "text-[15px] font-medium",
  "2xl": "text-2xl font-normal md:text-[22px]",
  xl: "text-xl font-medium",
  md: "text-base font-normal",
};

const Text = ({ children, className = "", as, size = "lg", ...restProps }) => {
  const Component = as || "p";
  return (
    <Component
      className={`text-blue_gray-900_01 font-inter ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
