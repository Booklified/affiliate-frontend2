"use client";
import Wrapper from "@/components/Wrapper";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";
import { Button, Heading, Img, SelectBox, Text } from "../../../components";
import { ReactTable } from "../../../components/ReactTable";
import Sidebar2 from "../../../components/Sidebar2";
import { title } from "process";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { Billing, billingsData, tableColumns } from "./billingColumns";
import { PaypalIcon } from "@/assets/icons";
import TablePagination from "@/components/shared/tablePagination";
import { useSearchParams } from "next/navigation";

const cards = [
  {
    title: "Current Balance",
    value: "$25,000",
  },
  {
    title: "Previous Balance",
    value: "$14,000",
  },
  {
    title: "Return Credit",
    value: "$40",
  },
  {
    title: "Payment Method",
    value: (
      <div className="w-60 h-20  lg:w-[160px] aspect-square ">
        <PaypalIcon />
      </div>
    ),
    isIcon: true,
  },
];
export default function WireframeBillingPayment1OnePage() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  const limit = 10;

  const getPagintedData = React.useMemo(() => {
    const start = (page - 1) * limit;
    const end = page * limit;
    return billingsData.slice(start, end);
  }, [page, limit]);
  const table = useReactTable({
    data: getPagintedData,
    columns: tableColumns,
    getCoreRowModel: getCoreRowModel(),

    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="w-full overflow-hidden">
      {/* Cards */}
      <div className="flex flex-wrap w-full">
        {cards.map((card, index) => {
          return (
            <div key={index} className="w-full p-2 sm:w-1/2 xl:w-1/4 ">
              <div className="w-full ">
                <Text size="9xl" as="p" className="self-start !text-[22.82px]">
                  {card.title}
                </Text>
                <div className="flex items-center justify-center mt-3 h-[120px] lg:h-[173px] rounded-[20px] bg-white-A700 px-[20px]  ">
                  {!card?.isIcon ? (
                    <Heading
                      size="md"
                      as="h1"
                      className="!2xl:text-[49.23px] xl:text-4xl text-[50px]  m-auto  !text-red-500_01"
                    >
                      {card.value}
                    </Heading>
                  ) : (
                    card.value
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Table */}

      <div className="px-2">
        <div className="!bg-[#fff] px-10 py-8 rounded-xl overflow-scroll w-full ">
          {/* <div className="w-[2755px] bg-orange-200 h-10" /> */}
          <table
            style={{
              tableLayout: "unset",

              textAlign: "center",
            }}
            className="w-full "
          >
            <thead className="border-b border-stroke_primary">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header, index) => (
                    <th
                      key={header.id}
                      style={{
                        textAlign: [0, 1, 2].includes(index)
                          ? "left"
                          : "center",
                      }}
                      className={`
                      text-gray-500
                      pr-1
                   
                    
                    py-2 pl-4 w-fit text-sm font-medium`}
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
                      textAlign: [0, 1, 2].includes(index) ? "left" : "center",
                      borderRadius: "160px",
                      marginTop: "10px",
                    }}
                    key={row.id}
                    className="px-5 py-3 text-sm"
                  >
                    {row.getVisibleCells().map((cell, index) => (
                      <td
                        style={{
                          textAlign: [0, 1, 2].includes(index)
                            ? "left"
                            : "center",
                          width: "fit",
                        }}
                        key={cell.id}
                        className={`
                        w-fit px-1 
                 pl-4 py-4 border-b `}
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
          <TablePagination siblings={1} total={billingsData.length || 0} />
        </div>
      </div>
    </div>
  );
}
