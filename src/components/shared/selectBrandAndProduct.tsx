import React from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";

const products = ["Product1 ", "Product2", "Product3"];
const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "Brand 1",
    children: (
      <div className="flex flex-col items-start pl-2 ">
        {products.map((item, index) => {
          return (
            <button
              className="w-full py-1 text-left hover:bg-light_green-100 "
              key={index}
            >
              {item}
            </button>
          );
        })}
      </div>
    ),
    showArrow: false,
  },
  {
    key: "2",
    label: "Brand 2",
    children: (
      <div className="flex flex-col items-start pl-2 ">
        {products.map((item, index) => {
          return (
            <button
              className="w-full py-1 text-left hover:bg-light_green-100 "
              key={index}
            >
              {item}
            </button>
          );
        })}
      </div>
    ),
    showArrow: false,
  },
  {
    key: "3",
    label: "Brand 3",
    children: (
      <div className="flex flex-col items-start pl-2 ">
        {products.map((item, index) => {
          return (
            <button
              className="w-full py-1 text-left hover:bg-light_green-100 "
              key={index}
            >
              {item}
            </button>
          );
        })}
      </div>
    ),
    showArrow: false,
  },
];

const data = [
  {
    name: "Brand 1",
    children: [
      {
        name: "Product 1",
      },
      {
        name: "Product 2",
      },
      {
        name: "Product 3",
      },
    ],
  },
  {
    name: "Brand 2",
    children: [
      {
        name: "Product 1",
      },
      {
        name: "Product 2",
      },
      {
        name: "Product 3",
      },
    ],
  },
  {
    name: "Brand 3",
    children: [
      {
        name: "Product 1",
      },
      {
        name: "Product 2",
      },
      {
        name: "Product 3",
      },
    ],
  },
];

const SelectBrandAndProduct: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <Dropdown
      className="w-full max-w-[300px]  px-3 py-2 rounded-lg bg-white-A700"
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
          <p className="mr-auto">Brand 1 Product a</p>
          <DownOutlined className="ml-auto" />
        </Space>
      </a>
    </Dropdown>
  );
};

export default SelectBrandAndProduct;
