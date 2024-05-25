import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-md",
};

const variants = {
  fill: {
    white_A700: "bg-white-A700 text-gray-400",
    blue_gray_900_0c: "bg-blue_gray-900_0c text-blue_gray-900_01",
  },
};

const sizes = {
  xs: "h-[52px] p1-3 pr-[35px] text-base",
  md: "h-[66px] pl-[18px] pr-[35px] text-base",
  sm: "h-[56px] p1-5 pr-[35px] text-base",
};

const Input = React.forwardRef(
    (
        {
          className,
          name = '',
          placeholder = '',
          type = 'text',
          children,
          label = '',
          prefix,
          suffix,
          onChange,
          shape,
          variant = 'fill',
          size = 'sm',
          color = 'white_A700',
          ...restProps
        },
        ref,
      ) => {
        const handleChange = (e) => {
          if (onChange) onChange(e?.target?.value);
        };
        return (
            <>
                <label
                className={`${className} flex items-center justify-center cursor-text text-base border border-solid rounded-md ${(shape && shapes[shape]) || ""} ${variants[variant]?.[color] || variants[variant] || ""} ${sizes[size] || ""}`}
                >
                    {!!label && label}
                    {!!prefix && prefix}
                    <input ref={ref} type={type} name={name} onChange={handleChange} placeholder={placeholder} {...restProps} />
                    {!!suffix && suffix}
                </label>
            </>
        );
    },
);

Input.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    shape: PropTypes.oneOf(["round"]),
    size: PropTypes.oneOf(["xs", "md", "sm"]),
    variant: PropTypes.oneOf(["fill"]),
    color: PropTypes.oneOf(["white_A700", "blue_gray_900_0c"]),
};

export { Input };