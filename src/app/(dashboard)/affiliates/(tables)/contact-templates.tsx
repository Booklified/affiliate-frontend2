"use client";
import Wrapper from "@/components/Wrapper";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { CloseSVG } from "../../../../assets/images";
import {
  Button,
  Heading,
  Img,
  Input,
  SelectBox,
  Text,
} from "../../../../components";
import { ReactTable } from "../../../../components/ReactTable";
import Sidebar11 from "../../../../components/Sidebar11";
import Link from "next/link";
import {
  contactTemplateColumns,
  contactTemplatesData,
} from ".././affiliatesColumns";
import TablePagination from "@/components/shared/tablePagination";
import AffiliatesToolBar from "./affiliatesToolBar";

export default function ContactTemplatesTable() {
  const searchParams = useSearchParams();

  const pathname = usePathname();
  const page = Number(searchParams.get("page")) || 1;

  const limit = 10;

  // paginated data with use memo
  const getPagintedData = React.useMemo(() => {
    const start = (page - 1) * limit;
    const end = page * limit;
    return contactTemplatesData.slice(start, end);
  }, [page, limit]);

  const table = useReactTable({
    data: getPagintedData,
    columns: contactTemplateColumns,
    getCoreRowModel: getCoreRowModel(),

    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const getLink = (e: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set("view", e.toString());

    const search = current.toString();
    const query = search ? `?${search}` : "";
    const link = pathname + "/" + query;
    return link;
  };

  return (
    <div className="px-2 ">
      <div className="px-10 py-8 bg-white-A700 rounded-t-xl">
        <AffiliatesToolBar title="Contact Templates" subTitle="" />
      </div>
      <div className="!bg-[#fff]  px-10   overflow-scroll w-full">
        {/* <div className="w-[2755px] bg-orange-200 h-10" /> */}
        <table
          style={{
            tableLayout: "unset",

            textAlign: "center",
          }}
          className="w-full "
        >
          <thead className="border-b border-stroke_primary">
            {table.getHeaderGroups().map((headerGroup, index) => (
              <tr key={headerGroup.id + index + "x"}>
                {headerGroup.headers.map((header, index) => (
                  <th
                    key={header.id + index + "a"}
                    style={{
                      textAlign: "left",
                      whiteSpace: "nowrap",
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
                    borderRadius: "160px",
                    marginTop: "10px",
                    whiteSpace: "nowrap",
                  }}
                  key={row.id + index + "d"}
                  className="px-5 py-3 text-sm "
                >
                  {row.getVisibleCells().map((cell, index) => (
                    <td
                      style={{
                        textAlign: "left",
                        width: "fit",
                      }}
                      key={cell.id}
                      className={`
                    w-fit px-3 
             pl-4 py-6 border-b `}
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
      <div className="px-10 pb-8 bg-white-A700 rounded-b-xl">
        <TablePagination
          siblings={1}
          total={contactTemplatesData.length || 0}
        />
      </div>
    </div>
  );
}
