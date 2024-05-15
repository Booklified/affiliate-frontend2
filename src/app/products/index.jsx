"use client";
import Wrapper from "@/components/Wrapper";
import { createColumnHelper } from "@tanstack/react-table";
import React, { HTMLProps } from "react";
import { CloseSVG, SearchSVG } from "../../assets/images";
import { Button, Img, Input, SelectBox, Text } from "../../components";
import { ReactTable } from "../../components/ReactTable";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  FilterFn,
  getFilteredRowModel,
  getSortedRowModel,
  SortDirection,
} from "@tanstack/react-table";
import { Product, tableColumns } from "./productColumns";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

import WireframeProductsThree from "../../modals/WireframeProductsThree";
import ReusableModal from "@/modals/headlessModals/reusableModal";
import { AscSortIcon, DescSortIcon } from "@/assets/icons";

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
];

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const table2Data = [
  {
    product:
      "ORCA Bulk Flip Flops For Wedding Guests (WHITE) | 52 Pack Whitevv",
    price: "$109.97",
    commission: "20%",
  },
  {
    product:
      "ORCA Bulk Flip Flops For Wedding Guests (WHITE) | 52 Pack Whitevv",
    price: "$319.99",
    commission: "20%",
  },
];

export default function WireframeProductsTwoPage() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [searchBarValue1, setSearchBarValue1] = React.useState("");
  const [rowSelection, setRowSelection] = React.useState({});

  console.log("====row selection :", rowSelection);

  const table2Columns = React.useMemo(() => {
    const table2ColumnHelper = createColumnHelper();
    return [
      table2ColumnHelper.accessor(" ", {
        cell: (info) => {
          console.log("---info#", info);
          const row = info.row;
          return (
            <div className="px-1">
              <IndeterminateCheckbox
                {...{
                  checked: row.getIsSelected(),
                  disabled: !row.getCanSelect(),
                  indeterminate: row.getIsSomeSelected(),
                  onChange: row.getToggleSelectedHandler(),
                }}
              />
            </div>
          );
        },

        header(props) {
          console.log("---header check box props :", props);
          const table = props?.table;
          return (
            <IndeterminateCheckbox
              {...{
                checked: table.getIsAllRowsSelected(),
                indeterminate: table.getIsSomeRowsSelected(),
                onChange: table.getToggleAllRowsSelectedHandler(),
              }}
            />
          );
        },
      }),
      table2ColumnHelper.accessor("product", {
        cell: (info) => (
          <div className="flex items-center justify-between gap-5 md:flex-col">
            <div className="flex w-[8%] flex-col gap-[11px] md:w-full">
              <Img
                src="img_user_indigo_50.svg"
                width={54}
                height={56}
                alt="user"
                className="h-[56px]"
              />
            </div>
            <div className="flex flex-col items-start">
              <Text size="8xl" as="p" className="!text-indigo-300 underline">
                {info?.getValue?.()}
              </Text>
              <Text size="3xl" as="p">
                B07XGMQ734 - SILV LLC
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <Text size="lg" as="p" className="py-px pl-[35px] sm:pl-5">
            Product
          </Text>
        ),
        meta: { width: "993px" },
      }),
      table2ColumnHelper.accessor("price", {
        cell: (info) => (
          <div className="ml-[168px] flex flex-col items-center gap-[42px] md:ml-0">
            <Text size="8xl" as="p">
              {info?.getValue?.()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text size="lg" as="p" className="p-px">
            Price
          </Text>
        ),
        meta: { width: "231px" },
      }),
      table2ColumnHelper.accessor("commission", {
        cell: (info) => (
          <div className="flex flex-col items-center gap-[42px]">
            <Text size="8xl" as="p">
              {info?.getValue?.()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text size="lg" as="p" className="p-px">
            Commission
          </Text>
        ),
        meta: { width: "228px" },
      }),
    ];
  }, []);

  //------------------

  const table = useReactTable({
    data: data,
    columns: tableColumns,
    getCoreRowModel: getCoreRowModel(),

    state: {
      rowSelection,
    },

    onRowSelectionChange: setRowSelection,

    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  console.log(rowSelection);
  return (
    <Wrapper>
      <div className="w-full pr-10 overflow-hidden">
        <div className="mb-16">
          <ToolBar />
        </div>
        <div className="!bg-[#fff] px-10 py-8 rounded-xl overflow-scroll w-full">
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
          <div className="flex w-[97%] flex-col gap-[18px] md:w-full">
            <div className="h-px bg-blue_gray-100" />
            <div className="flex items-center justify-between gap-5">
              <Text
                as="p"
                className="self-start !text-[13.69px] !text-blue_gray-100"
              >
                Showing 1 of 5 entries
              </Text>
              <div className="flex w-[11%] items-center justify-center self-end">
                <Img
                  src="img_arrow_left.svg"
                  width={16}
                  height={16}
                  alt="arrowleft"
                  className="h-[16px] w-[16px] self-start"
                />
                <div className="ml-2 flex h-[16px] !w-[16px] flex-shrink-0  flex-col items-center self-start bg-[url(/images/img_group.svg)] bg-cover bg-no-repeat p-px md:h-auto">
                  <Text size="md" as="p" className="!text-[11.06px]">
                    1
                  </Text>
                </div>
                <div className="ml-2 flex h-[16px] !w-[16px] flex-shrink-0  flex-col items-center self-start bg-[url(/images/img_group_blue_gray_100.svg)] bg-cover bg-no-repeat p-px md:h-auto">
                  <Text size="md" as="p" className="!text-[11.06px]">
                    2
                  </Text>
                </div>
                <div className="ml-2 flex h-[16px] !w-[16px] flex-shrink-0  flex-col items-center self-start bg-[url(/images/img_group_blue_gray_100.svg)] bg-cover bg-no-repeat p-px md:h-auto">
                  <Text size="md" as="p" className="!text-[11.06px]">
                    3
                  </Text>
                </div>
                <Text
                  size="md"
                  as="p"
                  className="ml-[11px] self-end !text-[11.06px]"
                >
                  ...
                </Text>
                <div className="ml-[11px] flex h-[16px] !w-[16px] flex-shrink-0  flex-col items-center self-start bg-[url(/images/img_group_blue_gray_100.svg)] bg-cover bg-no-repeat p-px md:h-auto">
                  <Text size="md" as="p" className="!text-[11.06px]">
                    5
                  </Text>
                </div>
                <Img
                  src="img_clock_blue_gray_100.svg"
                  width={16}
                  height={16}
                  alt="clock"
                  className="ml-2 h-[16px] w-[16px] self-start"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
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
          <div className="flex flex-col items-start w-full md:w-full">
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
            <div className="mt-[18px] flex items-center self-stretch md:flex-col">
              <div className="flex w-[25%] flex-col items-start gap-1.5 md:w-full">
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
              <div className="ml-[18px] flex w-[14%] flex-col gap-1.5 md:ml-0 md:w-full">
                <Text size="3xl" as="p">
                  Levanta Fees
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
              <div className="ml-6 flex w-[58%] flex-col items-start gap-1.5 md:ml-0 md:w-full">
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
              *You will get - 10% of this commission back from the Amazon Brand
              Referral Bonus
            </Text>
          </div>
          <button className="min-w-[80px] sm:px-5 bg-light_green-100 rounded-lg h-[33px] ">
            Save
          </button>
        </div>
      </ReusableModal>
    </Wrapper>
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
    <div className="">
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
