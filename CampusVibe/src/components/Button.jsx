import React from "react";
import PropTypes from "prop-types";

const shapes = {
    circle: "rounded-[50%]",
    square: "rounded-[0px]",
    round: "rounded-md",
};
const variants = {
    outline: {
      blue_700: "border-blue-700 border border-solid text-blue-700",
      blue_gray_900_01: "border-blue_gray-900_01 border border-solid text-blue_gray-900_01",
      red_600: "border-red-600 border border-solid text-red-600",
      gray_600: "border-gray-600 border border-solid text-gray-600",
    },
    fill: {
      blue_gray_900_01: "bg-blue_gray-900_01 text-white-A700",
      gray_300_02: "bg-gray-300_02 text-blue_gray-900_01",
      white_A700: "bg-white-A700 text-teal-400",
      blue_700: "bg-blue-700 text-white-A700",
      gray_100_01: "bg-gray-100_01 text-gray-600",
      black_900: "bg-black-900",
    },
};
const sizes = {
    xl: "h-[38px] px-[9px]",
    "4xl": "h-[47px] px-5 text-[22px]",
    "6xl": "h-[84px] px-[35px] text-base",
    sm: "h-[23px] px-1.5 text-xs",
    "3xl": "h-[46px] px-[31px] text-base",
    xs: "h-[20px] px-[3px]",
    md: "h-[24px]",
    lg: "h-[31px] px-[13px] text-xs",
    "2xl": "h-[41px] px-6 text-sm",
    "5xl": "h-[50px] px-[35px] text-base",
  };


const Button = ({
    children,
    className = "",
    leftIcon,
    rightIcon,
    shape,
    variant = "fill",
    size = "5xl",
    color = "blue_gray_900_01",
    ...restProps
}) => {
    return (
        <button
         className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
         {...restProps}
        >
            {!!leftIcon && leftIcon}
            {children}
            {!!rightIcon && rightIcon}
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    shape: PropTypes.oneOf(["circle", "square", "round"]),
    size: PropTypes.oneOf(["xl", "4xl", "6xl","sm", "3xl", "xs", "md", "lg", "2xl", "5xl"]),
    variant: PropTypes.oneOf(["outline","fill"]),
    color: PropTypes.oneOf([
        "blue_700",
        "blue_gray_900_01",
        "red_600",
        "gray_600",
        "gray_300_02",
        "whilte_A700",
        "gray_100_01",
        "black_900",
    ]),
};

export { Button };