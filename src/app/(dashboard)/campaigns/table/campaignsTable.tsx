"use client";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";

import {
  Campaigns,
  tableColumns,
  campaingsData,
} from "./campaignsTableColumns";

import React from "react";
import { useSearchParams } from "next/navigation";
import TablePagination from "@/components/shared/tablePagination";

function CampaignsTable() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  const limit = 5;

  const getPagintedData = React.useMemo(() => {
    const start = (page - 1) * limit;
    const end = page * limit;
    return campaingsData.slice(start, end);
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
      {/* Table */}

      <div className="px-2">
        <div className="!bg-[#fff] px-10 pt-8 rounded-xl overflow-scroll w-full  relative">
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
          <TablePagination siblings={1} total={campaingsData.length || 0} />
        </div>
      </div>
    </div>
  );
}

export default CampaignsTable;
