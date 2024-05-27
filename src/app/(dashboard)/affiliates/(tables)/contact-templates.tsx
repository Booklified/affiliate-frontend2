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
  const router = useRouter();
  const pathname = usePathname();
  const view = searchParams.get("view");
  const page = Number(searchParams.get("page")) || 1;

  const limit = 10;

  const getPagintedData = () => {
    const start = (page - 1) * limit;
    const end = page * limit;
    return contactTemplatesData.slice(start, end);
  };
  const table = useReactTable({
    data: getPagintedData(),
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
    <div className="px-2">
      <div className="!bg-[#fff] px-10 py-8 rounded-xl overflow-scroll w-full ">
        <AffiliatesToolBar title="Contact Templates" />
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
                      textAlign: [0, 1, 2].includes(index) ? "left" : "center",
                    }}
                    className={`
                  
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
        <TablePagination
          siblings={1}
          total={contactTemplatesData.length || 0}
        />
      </div>
    </div>
  );
}
