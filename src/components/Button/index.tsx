import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  circle: "rounded-[50%]",
  round: "rounded-[25px]",
};
const variants = {
  fill: {
    light_green_100: "bg-light_green-100 text-black-900",
    red_500_01: "bg-red-500_01 text-white-A700",
    yellow_900: "bg-yellow-900",
    white_A700: "bg-white-A700",
  },
};
const sizes = {
  lg: "h-[51px] px-6 text-lg",
  sm: "h-[33px] px-3",
  xs: "h-[33px] px-[23px] text-sm",
  md: "h-[45px] px-[9px]",
  xl: "h-[51px] px-3.5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xl",
  color = "light_green_100",
  ...restProps
}: {
  children?: React.ReactNode;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  shape?: "square" | "circle" | "round";
  variant?: "fill";
  size?: "lg" | "sm" | "xs" | "md" | "xl";
  color?: "light_green_100" | "red_500_01" | "yellow_900" | "white_A700";
  [x: string]: any;
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${
        (shape && shapes[shape]) || ""
      } ${(size && sizes[size]) || ""} ${
        (variant && variants[variant]?.[color]) || ""
      }`}
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
  shape: PropTypes.oneOf(["square", "circle", "round"]),
  size: PropTypes.oneOf(["lg", "sm", "xs", "md", "xl"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "light_green_100",
    "red_500_01",
    "yellow_900",
    "white_A700",
  ]),
};

export { Button };
