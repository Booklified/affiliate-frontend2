import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
};
const variants = {
  fill: {
    indigo_50: "bg-indigo-50",
    white_A700: "bg-white-A700 text-gray-500",
  },
};
const sizes = {
  xs: "h-[29px] px-4 text-xs",
  md: "h-[51px] px-4 text-[17px]",
  sm: "h-[33px] px-[15px] text-sm",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      size = "sm",
      color = "",
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
          className={`${className} flex items-center justify-center cursor-text text-gray-500  ${(shape && shapes[shape]) || ""} ${variants[variant]?.[color] || variants[variant] || ""} ${sizes[size] || ""}`}
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
  shape: PropTypes.oneOf(["square"]),
  size: PropTypes.oneOf(["xs", "md", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["indigo_50", "white_A700"]),
};

export { Input };
