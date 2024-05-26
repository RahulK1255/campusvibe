import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-sm",
};

const variants = {
  fill: {
    white_A700: "bg-white-A700 text-gray-400",
    gray_100_01: "bg-gray-100_01 text-gray-600",
  },
};

const sizes = {
  xs: "h-[24px] pl-2 pr-[34px] text-lg",
  md: "h-[56px] pl-5 pr-[35px] text-base",
  sm: "h-[24px] pl-2 pr-[34px] text-xs",
};

const SelectBox = React.forwardRef(
  (
    {
      children,
      className = "",
      options = [],
      isSearchable = false,
      isMulti = false,
      indicator,
      shape,
      variant = "fill",
      size = "sm",
      color = "gray_100_01",
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <Select
          ref={ref}
          options={options}
          className={`${className} flex ${shapes[shape] || ""} ${sizes[size] || ""} ${variants[variant]?.[color] || ""}`}
          isSearchable={isSearchable}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
            ...(indicator && { DropdownIndicator: () => indicator }),
          }}
          styles={{
            container: (provided) => ({
              ...provided,
              zIndex: 0,
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: "transparent",
              border: "0 !important",
              boxShadow: "0 !important",
              minHeight: "auto",
              width: "100%",
              "&:hover": {},
            }),
            input: (provided) => ({
              ...provided,
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected ? "#1b2834" : "transparent",
              color: state.isSelected ? "#ffffff" : "inherit",
              "&:hover": {},
            }),
            valueContainer: (provided) => ({
              ...provided,
              margin: 0,
            }),
            placeholder: (provided) => ({
              ...provided,
              margin: 0,
            }),
            menuPortal: (base) => ({ ...base, zIndex: 999999 }),
          }}
          menuPortalTarget={document.body}
          closeMenuOnScroll={(event) => event.target.id === "scrollContainer"}
          {...restProps}
        />
        {children}
      </>
    );
  }
);

SelectBox.propTypes = {
  className: PropTypes.string,
  options: PropTypes.array,
  isSearchable: PropTypes.bool,
  isMulti: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  indicator: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "md", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white_A700", "gray_100_01"]),
};

export { SelectBox };
