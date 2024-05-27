import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  rounded: "rounded-xl",
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
      color = "indigo_50",
      icon = "",
      ...restProps
    }: {
      className?: string;
      name?: string;
      placeholder?: string;
      type?: string;
      children?: React.ReactNode;
      label?: string;
      prefix?: React.ReactNode;
      suffix?: React.ReactNode;
      onChange?: (value: string) => void;
      shape?: "square" | "rounded";
      variant?: "fill";
      size?: "xs" | "md" | "sm";
      color?: "indigo_50" | "white_A700";
      icon?: React.ReactNode;
      [x: string]: any;
    },
    ref
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <label
          className={`${className} flex items-center justify-center cursor-text text-gray-500 relative ${
            (shape && shapes[shape]) || ""
          } ${variants[variant]?.[color] || variants[variant] || ""} ${
            sizes[size] || ""
          }`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref as any}
            type={type}
            name={name}
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
          {icon && (
            <span className="absolute -translate-y-1/2 right-4 top-1/2">
              {icon}
            </span>
          )}
        </label>
      </>
    );
  }
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
