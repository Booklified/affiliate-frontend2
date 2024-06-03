"use client";

import React from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const products = ["Product1 ", "Product2", "Product3"];

const SelectBrandAndProduct: React.FC = () => {
  const pathname = usePathname();
  console.log(pathname);
  const brand = pathname.split("/")[2];
  const product = pathname.split("/")[3];
  const router = useRouter();

  console.log(brand);
  console.log(product);

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Brand 1",
      onClick: () => {
        if (brand !== "1") {
          router.push(`/assets/${1}`);
        }
      },
      children: (
        <div className="flex flex-col items-start pl-2 ">
          {products.map((item, index) => {
            return (
              <Link
                href={`/assets/${1}/${index + 1}`}
                className="w-full py-1 text-left hover:bg-light_green-100 "
                key={index}
              >
                {item}
              </Link>
            );
          })}
        </div>
      ),
      showArrow: false,
    },
    {
      key: "2",
      label: "Brand 2",
      onClick: () => {
        if (brand !== "2") {
          router.push(`/assets/${2}`);
        }
      },
      children: (
        <div className="flex flex-col items-start pl-2 ">
          {products.map((item, index) => {
            return (
              <Link
                href={`/assets/${2}/${index + 1}`}
                className="w-full py-1 text-left hover:bg-light_green-100 "
                key={index}
              >
                {item}
              </Link>
            );
          })}
        </div>
      ),
      showArrow: false,
    },
    {
      key: "3",
      label: "Brand 3",
      onClick: () => {
        if (brand !== "3") {
          router.push(`/assets/${3}`);
        }
      },
      children: (
        <div className="flex flex-col items-start pl-2 ">
          {products.map((item, index) => {
            return (
              <Link
                href={`/assets/${3}/${index + 1}`}
                className="w-full py-1 text-left hover:bg-light_green-100 "
                key={index}
              >
                {item}
              </Link>
            );
          })}
        </div>
      ),
      showArrow: false,
    },
  ];
  return (
    <Dropdown
      className="w-full max-w-[300px] h-fit  px-3 py-2 rounded-lg bg-white-A700"
      dropdownRender={() => {
        return (
          <Collapse
            className="bg-white-A700"
            items={items}
            defaultActiveKey={["1"]}
            onChange={onChange}
          />
        );
      }}
      trigger={["click"]}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space className="flex items-center justify-between w-full cursor-pointer">
          {!brand && !product && <p className="mr-auto">Select</p>}
          {brand && !product && <p className="mr-auto">Brand {brand}</p>}
          {brand && product && (
            <p className="mr-auto">
              Brand {brand} Product {product}
            </p>
          )}
          <DownOutlined className="ml-auto" />
        </Space>
      </a>
    </Dropdown>
  );
};

export default SelectBrandAndProduct;
