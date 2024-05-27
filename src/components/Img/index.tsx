import Image from "next/image";
import React from "react";

const BASE_URL = process.env.BASE_PATH || "/images/";

const Img = ({
  className,
  src = "defaultNoData.png",
  alt = "testImg",
  isStatic = false,
  ...restProps
}: {
  className?: string;
  src?: string;
  alt?: string;
  isStatic?: boolean;
  [x: string]: any;
}) => {
  const [imgSrc, setImgSrc] = React.useState(src);

  return (
    <Image
      className={className}
      src={isStatic ? imgSrc : BASE_URL + imgSrc}
      alt={alt}
      {...restProps}
      onError={() => {
        setImgSrc("defaultNoData.png");
      }}
    />
  );
};
export { Img };
