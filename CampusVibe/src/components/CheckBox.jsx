import React from "react";
import PropTypes from "prop-types";

const variants = {
  primary:
    "border-blue_gray-900_01 border border-solid bg-white-A700_4c checked:border-blue_gray-900_01 checked:border checked:border-solid checked:bg-white-A700_4c checked:focus:bg-white-A700_4c checked:focus: border-blue_gray-900_01",
};
const sizes = {
  xs: "h-[20px] w-[20px] rounded",
};
const CheckBox = React.forwardRef(
  (
    {
      className = "",
      name = "",
      children,
      label = "",
      id = "checkbox_id",
      onChange,
      variant = "primary",
      size = "xs",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.checked);
    };
    return (
      <>
        <div
          className={className + " flex items-center gap-[5px] cursor-pointer"}
        >
          <input
            className={`${(size && sizes[size]) || ""} ${(variant && variants[variant]) || ""}`}
            ref={ref}
            type="checkbox"
            name={name}
            onChange={handleChange}
            id={id}
            {...restProps}
          />
          {!!label && <label htmlFor={id}>{label}</label>}
        </div>
        {children}
      </>
    );
  },
);

CheckBox.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["primary"]),
};

export { CheckBox };
