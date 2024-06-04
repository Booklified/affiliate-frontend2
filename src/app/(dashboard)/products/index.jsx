"use client";
import Wrapper from "@/components/Wrapper";
import { createColumnHelper } from "@tanstack/react-table";
import React, { HTMLProps } from "react";
import { CloseSVG, SearchSVG } from "../../../assets/images";
import { Button, Img, Input, SelectBox, Text } from "../../../components";
import { ReactTable } from "../../../components/ReactTable";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { Product, tableColumns } from "./productColumns";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

import WireframeProductsThree from "../../../modals/WireframeProductsThree";
import ReusableModal from "@/modals/headlessModals/reusableModal";
import { AscSortIcon, DescSortIcon } from "@/assets/icons";
import TablePagination from "@/components/shared/tablePagination";

const data = [
  {
    name: "ORCA Bulk Flip Flops For Wedding Guests (WHITE) | 52 Pack Whitevv",
    price: 109.97,
    commission: 20,
    sku: "B07XGMQ734",
    image: "img_user_indigo_50.svg",
    id: "1",
  },
  {
    name: "ORCA Bulk Flip Flops For Wedding Guests (WHITE) | 52 Pack Whitevv",
    price: 319.99,
    commission: 20,
    sku: "B07XGMQ734",
    image: "img_user_indigo_50.svg",
    id: "2",
  },
  {
    name: "ORCA Bulk Flip Flops For Wedding Guests (WHITE) | 52 Pack Whitevv",
    price: 109.97,
    commission: 20,
    sku: "B07XGMQ734",
    image: "img_user_indigo_50.svg",
    id: "1",
  },
  {
    name: "ORCA Bulk Flip Flops For Wedding Guests (WHITE) | 52 Pack Whitevv",
    price: 319.99,
    commission: 20,
    sku: "B07XGMQ734",
    image: "img_user_indigo_50.svg",
    id: "2",
  },
  {
    name: "ORCA Bulk Flip Flops For Wedding Guests (WHITE) | 52 Pack Whitevv",
    price: 109.97,
    commission: 20,
    sku: "B07XGMQ734",
    image: "img_user_indigo_50.svg",
    id: "1",
  },
  {
    name: "ORCA Bulk Flip Flops For Wedding Guests (WHITE) | 52 Pack Whitevv",
    price: 319.99,
    commission: 20,
    sku: "B07XGMQ734",
    image: "img_user_indigo_50.svg",
    id: "2",
  },
  {
    name: "ORCA Bulk Flip Flops For Wedding Guests (WHITE) | 52 Pack Whitevv",
    price: 109.97,
    commission: 20,
    sku: "B07XGMQ734",
    image: "img_user_indigo_50.svg",
    id: "1",
  },
  {
    name: "ORCA Bulk Flip Flops For Wedding Guests (WHITE) | 52 Pack Whitevv",
    price: 319.99,
    commission: 20,
    sku: "B07XGMQ734",
    image: "img_user_indigo_50.svg",
    id: "2",
  },
  {
    name: "ORCA Bulk Flip Flops For Wedding Guests (WHITE) | 52 Pack Whitevv",
    price: 109.97,
    commission: 20,
    sku: "B07XGMQ734",
    image: "img_user_indigo_50.svg",
    id: "1",
  },
  {
    name: "ORCA Bulk Flip Flops For Wedding Guests (WHITE) | 52 Pack Whitevv",
    price: 319.99,
    commission: 20,
    sku: "B07XGMQ734",
    image: "img_user_indigo_50.svg",
    id: "2",
  },
  {
    name: "ORCA Bulk Flip Flops For Wedding Guests (WHITE) | 52 Pack Whitevv",
    price: 109.97,
    commission: 20,
    sku: "B07XGMQ734",
    image: "img_user_indigo_50.svg",
    id: "1",
  },
  {
    name: "ORCA Bulk Flip Flops For Wedding Guests (WHITE) | 52 Pack Whitevv",
    price: 319.99,
    commission: 20,
    sku: "B07XGMQ734",
    image: "img_user_indigo_50.svg",
    id: "2",
  },
  {
    name: "ORCA Bulk Flip Flops For Wedding Guests (WHITE) | 52 Pack Whitevv",
    price: 109.97,
    commission: 20,
    sku: "B07XGMQ734",
    image: "img_user_indigo_50.svg",
    id: "1",
  },
  {
    name: "ORCA Bulk Flip Flops For Wedding Guests (WHITE) | 52 Pack Whitevv",
    price: 319.99,
    commission: 20,
    sku: "B07XGMQ734",
    image: "img_user_indigo_50.svg",
    id: "2",
  },
];

export default function WireframeProductsTwoPage() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [rowSelection, setRowSelection] = React.useState({});
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");

  const getPagintedData = React.useMemo(() => {
    const start = (page - 1) * limit;
    const end = page * limit;
    return data.slice(start, end);
  }, [page, limit]);

  console.log("====row selection :", rowSelection);
  //------------------

  const table = useReactTable({
    data: getPagintedData,
    columns: tableColumns,
    getCoreRowModel: getCoreRowModel(),

    state: {
      rowSelection,
    },

    onRowSelectionChange: setRowSelection,

    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const handleCloseModal = () => {
    if (searchParams.get("modal")) {
      const current = new URLSearchParams(searchParams);
      console.log(current);
      current.delete("modal");
      const search = current.toString();
      const url = pathname + search ? `?${search}` : "";
      router.push(url);
    }
  };
  return (
    <div className="w-full overflow-hidden">
      <div className="w-full h-full overflow-hidden">
        <div className="mb-16">
          <ToolBar />
        </div>
        <div className="!bg-[#fff] px-2 lg:px-10 py-8 rounded-xl overflow-scroll w-full">
          {/* <div className="w-[2755px] bg-orange-200 h-10" /> */}
          <table
            style={{
              tableLayout: "unset",

              textAlign: "left",
            }}
            className="w-full "
          >
            <thead className="border-b border-stroke_primary">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header, index) => (
                    <th
                      key={header.id}
                      className={`
                      text-gray-500
                      pr-1
                   
                    
                    py-2 pl-4 w-fit      text-left text-sm font-medium`}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="">
              {table.getRowModel().rows.map((row, index) => {
                return (
                  <tr
                    style={{
                      textAlign: "left",
                      background: rowSelection[index] == true ? "#D3FAD6" : "",
                      borderRadius: "160px",
                      marginTop: "10px",
                    }}
                    key={row.id}
                    className="px-5 text-sm text-left"
                  >
                    {row.getVisibleCells().map((cell, index) => (
                      <td
                        style={{
                          textAlign: "left",

                          width: "fit",
                        }}
                        key={cell.id}
                        className={`
                        w-fit px-1
                 pl-4 py-1.5 border-b text-left`}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="px-10 pb-8 bg-white-A700">
          <TablePagination siblings={1} total={data.length || 0} />
        </div>
      </div>
      {searchParams.get("modal") == "set_private_commission" && (
        <ReusableModal
          isOpen={!!searchParams.get("modal")}
          toggleOpen={() => {
            console.log("toggle open");
            if (searchParams.get("modal")) {
              const current = new URLSearchParams(searchParams);
              console.log(current);
              current.delete("modal");
              const search = current.toString();
              const url = pathname + search ? `?${search}` : "";
              router.push(url);
            }
          }}
          title="Set Private Commission for 1 Product"
          description="A private commission allows you to set a different commission for a specific Creator."
        >
          <div className="flex w-full flex-col items-center gap-[21px] rounded-[19px]     sm:pb-5">
            <div className="flex flex-col items-start w-full ">
              <div className="mt-[19px] w-full self-stretch " />
              <Text size="3xl" as="p" className="">
                Creator
              </Text>
              <Input
                shape="rounded"
                name="close_two"
                placeholder={`Select a creator`}
                suffix={
                  <div className="flex h-[10px] w-[10px] items-center justify-center">
                    <Img
                      src="img_close.svg"
                      width={10}
                      height={10}
                      alt="close"
                      className="h-[10px] w-[10px]"
                    />
                  </div>
                }
                className="mt-1.5 gap-[35px] self-stretch border-[0.5px] border-solid border-black-900"
              />
              <div className="mt-[18px] flex items-center self-stretch md:flex-row flex-col md:gap-3">
                <div className="flex md:w-[25%] flex-col items-start gap-1.5 w-full">
                  <Text size="3xl" as="p">
                    Affiliate Commission
                  </Text>
                  {/* <SelectBox
                  size="sm"
                  shape="square"
                  name="dropdown"
                  options={dropDownOptions}
                  className="self-stretch"
                /> */}
                  <Input
                    shape="rounded"
                    name="value_one"
                    placeholder={``}
                    suffix={"%"}
                    className="self-stretch border-[0.5px] border-solid border-black-900"
                  />
                </div>
                <Text
                  size="2xl"
                  as="p"
                  className="mb-1.5 ml-[18px] self-end !text-[14.62px] md:ml-0"
                >
                  +
                </Text>
                <div className="ml-[18px] flex md:w-[14%] min-w-[120px] flex-col gap-1.5   w-full">
                  <Text size="3xl" as="p">
                    Toocan Fees
                  </Text>
                  <Input
                    shape="rounded"
                    name="value_one"
                    placeholder={`3.5`}
                    suffix={"%"}
                    className="border-[0.5px] border-solid border-black-900 sm:pr-5"
                  />
                </div>
                <Text
                  size="2xl"
                  as="p"
                  className="mb-1.5 ml-[22px] self-end !text-[14.62px] md:ml-0"
                >
                  =
                </Text>
                <div className="ml-6 flex md:w-[58%] flex-col items-start gap-1.5 md:ml-0 w-full">
                  <Text size="3xl" as="p">
                    Total
                  </Text>
                  <Input
                    shape="rounded"
                    name="language"
                    // placeholder={`%`}
                    suffix={"%"}
                    className="self-stretch border-[0.5px] border-solid border-black-900 sm:px-5"
                  />
                </div>
              </div>
              <Text
                size="s"
                as="p"
                className="mt-[11px] self-end !text-[9.8px] !text-gray-500"
              >
                *You will get - 10% of this commission back from the Amazon
                Brand Referral Bonus
              </Text>
            </div>
            <button
              onClick={() => {
                handleCloseModal();
              }}
              className="min-w-[80px] sm:px-5 bg-light_green-100 rounded-lg h-[33px] "
            >
              Save
            </button>
          </div>
        </ReusableModal>
      )}
      {searchParams.get("modal") == "update_standard_commission" && (
        <ReusableModal
          isOpen={!!searchParams.get("modal")}
          toggleOpen={() => {
            console.log("toggle open");
            if (searchParams.get("modal")) {
              const current = new URLSearchParams(searchParams);
              console.log(current);
              current.delete("modal");
              const search = current.toString();
              const url = pathname + search ? `?${search}` : "";
              router.push(url);
            }
          }}
          title="Update standard commission"
          description="A custome message to be shown here ."
        >
          <div className="flex w-full flex-col items-center gap-[21px] rounded-[19px]     sm:pb-5">
            <div className="flex flex-col items-start w-full ">
              <div className="mt-[19px] w-full self-stretch " />

              <div className="mt-[18px] flex items-center self-stretch md:flex-row flex-col md:gap-3">
                <div className="flex md:w-[25%] flex-col items-start gap-1.5 w-full">
                  <Text size="3xl" as="p">
                    Affiliate Commission
                  </Text>
                  {/* <SelectBox
                  size="sm"
                  shape="square"
                  name="dropdown"
                  options={dropDownOptions}
                  className="self-stretch"
                /> */}
                  <Input
                    shape="rounded"
                    name="value_one"
                    placeholder={``}
                    suffix={"%"}
                    className="self-stretch border-[0.5px] border-solid border-black-900"
                  />
                </div>
                <Text
                  size="2xl"
                  as="p"
                  className="mb-1.5 ml-[18px] self-end !text-[14.62px] md:ml-0"
                >
                  +
                </Text>
                <div className="ml-[18px] flex md:w-[14%] min-w-[120px] flex-col gap-1.5   w-full">
                  <Text size="3xl" as="p">
                    Toocan Fees
                  </Text>
                  <Input
                    shape="rounded"
                    name="value_one"
                    placeholder={`3.5`}
                    suffix={"%"}
                    className="border-[0.5px] border-solid border-black-900 sm:pr-5"
                  />
                </div>
                <Text
                  size="2xl"
                  as="p"
                  className="mb-1.5 ml-[22px] self-end !text-[14.62px] md:ml-0"
                >
                  =
                </Text>
                <div className="ml-6 flex md:w-[58%] flex-col items-start gap-1.5 md:ml-0 w-full">
                  <Text size="3xl" as="p">
                    Total
                  </Text>
                  <Input
                    shape="rounded"
                    name="language"
                    // placeholder={`%`}
                    suffix={"%"}
                    className="self-stretch border-[0.5px] border-solid border-black-900 sm:px-5"
                  />
                </div>
              </div>
              <Text
                size="s"
                as="p"
                className="mt-[11px] self-end !text-[9.8px] !text-gray-500"
              >
                *You will get - 10% of this commission back from the Amazon
                Brand Referral Bonus
              </Text>
            </div>
            <button
              onClick={() => {
                handleCloseModal();
              }}
              className="min-w-[80px] sm:px-5 bg-light_green-100 rounded-lg h-[33px] "
            >
              Save
            </button>
          </div>
        </ReusableModal>
      )}
    </div>
  );
}

const ToolBar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigate = ({ key, value }) => {
    const current = new URLSearchParams(searchParams);
    current.set(key, value);
    const search = current.toString();
    const url = pathname + search ? `?${search}` : "";
    router.push(url);
  };

  const sortItems = [
    //Commission
    {
      label: "Commission",
      type: "asc",
      icon: <AscSortIcon />,
      key: "commission",
    },
    {
      label: "Commission",
      type: "des",
      icon: <DescSortIcon />,
      key: "commission",
    },
    //Title
    {
      label: "Title",
      type: "asc",
      icon: <AscSortIcon />,
      key: "title",
    },
    {
      label: "Title",
      type: "des",
      icon: <DescSortIcon />,
      key: "title",
    },
    //Newest
    {
      label: "Newest",
      type: "asc",
      icon: <AscSortIcon />,
      key: "newest",
    },
    {
      label: "Newest",
      type: "des",
      icon: <DescSortIcon />,
      key: "newest",
    },
    //Price
    {
      label: "Price",
      type: "asc",
      icon: <AscSortIcon />,
      key: "price",
    },
    {
      label: "Price",
      type: "des",
      icon: <DescSortIcon />,
      key: "price",
    },
  ];

  const sort = searchParams.get("sort");
  const sortLabel = sort?.split("_")[0];

  const getSelectedSortIcon = () => {
    return sortItems?.filter((item) => item?.key == sortLabel)[0]?.icon;
  };

  return (
    <div className="w-full">
      <div className="flex flex-col gap-4 lg:flex-row">
        {/* Actions */}
        <div className="w-full lg:max-w-[343px] relative">
          <Menu>
            <div className="relative w-full lg:max-w-[343px]">
              <MenuButton className="px-6 py-2 h-[52px] w-full bg-white-A700 text-left rounded-t-lg">
                Actions
              </MenuButton>
              <div className="absolute -translate-y-1/2 pointer-events-none right-4 top-1/2">
                <ChevronDownIcon width={28} height={28} />
              </div>
            </div>
            <MenuItems
              anchor="bottom"
              className="w-full lg:w-[343px] px-2 py-2 space-y-1 rounded-b-lg shadow-lg bg-white-A700"
            >
              <MenuItem>
                <a
                  onClick={() => {
                    handleNavigate({
                      key: "modal",
                      value: "update_standard_commission",
                    });
                  }}
                  className=" hover:bg-light_green-100 py-2 px-4 rounded-lg block data-[focus]:bg-blue-100"
                  href="#"
                >
                  Update Standard Commission
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  onClick={() => {
                    handleNavigate({
                      key: "modal",
                      value: "set_private_commission",
                    });
                  }}
                  className=" hover:bg-light_green-100 py-2 px-4 rounded-lg block data-[focus]:bg-blue-100"
                  href="#"
                >
                  Set Private Commission
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  onClick={() => {
                    handleNavigate({
                      key: "modal",
                      value: "clear_selection",
                    });
                  }}
                  className=" hover:bg-light_green-100 py-2 px-4 rounded-lg block data-[focus]:bg-blue-100 text-red-500_01"
                  href="#"
                >
                  Clear Selection
                </a>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
        {/* Search */}
        <div className="w-full  lg:max-w-[294px] bg-white-A700  overflow-hidden flex   px-5 ml-auto rounded-lg relative pr-10">
          <span className="absolute -translate-y-1/2 right-3 top-1/2">
            <SearchSVG />
          </span>
          <input
            placeholder="Search"
            className="flex-grow w-full border-none h-[52px] !outline-none !focus:outline-none "
          />
        </div>
        {/* Filters */}
        <Menu>
          <div className="relative w-full  lg:max-w-[188px]">
            <div className="absolute -translate-y-1/2 pointer-events-none left-4 top-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                />
              </svg>
            </div>
            <MenuButton className=" pl-16 px-6 py-2 h-[52px] w-full lg:w-[188px] bg-white-A700 text-left rounded-t-lg">
              Filters
            </MenuButton>
          </div>
          <MenuItems
            anchor="bottom"
            className=" px-2 py-2 w-full lg:w-[188px] bg-white-A700 space-y-1 shadow-lg rounded-b-lg"
          >
            <MenuItem>
              <a
                onClick={() => {
                  handleNavigate({
                    key: "filter",
                    value: "filter1",
                  });
                }}
                className=" hover:bg-light_green-100 py-2 px-4 rounded-lg block data-[focus]:bg-blue-100"
                href="#"
              >
                Filter 1
              </a>
            </MenuItem>
            <MenuItem>
              <a
                onClick={() => {
                  handleNavigate({
                    key: "filter",
                    value: "filter2",
                  });
                }}
                className=" hover:bg-light_green-100 py-2 px-4 rounded-lg block data-[focus]:bg-blue-100"
                href="#"
              >
                filter2
              </a>
            </MenuItem>
            <MenuItem>
              <a
                onClick={() => {
                  handleNavigate({
                    key: "filter",
                    value: "filter 3",
                  });
                }}
                className=" hover:bg-light_green-100 py-2 px-4 rounded-lg block data-[focus]:bg-blue-100 "
                href="#"
              >
                filter3
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>
        {/* Sort */}

        <div className="w-full lg:max-w-[228px] relative">
          <Menu>
            <div className="relative w-full lg:max-w-[228px]">
              <MenuButton className="px-6 py-2 h-[52px] w-full bg-white-A700 text-left rounded-t-lg">
                {sortLabel ? (
                  <div className="flex items-center gap-2">
                    {getSelectedSortIcon()}
                    {sortLabel}
                  </div>
                ) : (
                  "Sort"
                )}
              </MenuButton>
            </div>
            <MenuItems
              anchor="bottom"
              className="w-full lg:w-[228px] px-2 py-2 space-y-1 rounded-b-lg shadow-lg bg-white-A700"
            >
              {sortItems?.map((item, index) => {
                return (
                  <MenuItem>
                    <a
                      onClick={() => {
                        handleNavigate({
                          key: "sort",
                          value: `${item?.key}_${item.type}`,
                        });
                      }}
                      className="flex items-center gap-2  hover:bg-light_green-100 py-2 px-4 rounded-lg  data-[focus]:bg-blue-100"
                      href="#"
                    >
                      <span>{item.icon} </span>
                      {item?.label}
                    </a>
                  </MenuItem>
                );
              })}
            </MenuItems>
          </Menu>
        </div>
      </div>
    </div>
  );
};

function IndeterminateCheckbox({ indeterminate, className = "", ...rest }) {
  const ref = React.useRef < HTMLInputElement > null;

  React.useEffect(() => {
    if (!ref || !ref?.current) {
      return;
    }
    if (typeof indeterminate === "boolean") {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate]);

  return (
    <input
      type="checkbox"
      ref={ref}
      className={className + " cursor-pointer"}
      {...rest}
    />
  );
}
