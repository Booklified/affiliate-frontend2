import React from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { productsTableColumns, PromotedProduct, productsData } from "./index";
import TablePagination from "@/components/shared/tablePagination";
function PromotedProductsTable() {
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(4);

  const getPagintedData = React.useMemo(() => {
    const start = (page - 1) * limit;
    const end = page * limit;
    return productsData.slice(start, end);
  }, [page, limit]);

  const table = useReactTable({
    data: getPagintedData,
    columns: productsTableColumns,
    getCoreRowModel: getCoreRowModel(),

    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });
  return (
    <div className="w-full overflow-hidden ">
      {/* Table */}
      <h3 className="text-[22px] font-medium mb-4">Promoted Products</h3>
      <div className="w-full overflow-hidden">
        <div className="!bg-[#fff] 3xl:px-10 px-3   py-8 rounded-xl overflow-scroll w-full ">
          {/* <div className="w-[2755px] bg-orange-200 h-10" /> */}
          <table
            style={{
              tableLayout: "unset",
            }}
            className="w-full "
          >
            {/* <thead className="border-b border-stroke_primary">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header, index) => (
                    <th
                      key={header.id}
                      style={{
                        textAlign: [0].includes(index) ? "left" : "right",
                      }}
                      className={`
                  
                  pr-1
               
                
               w-fit text-sm font-medium`}
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
            </thead> */}
            <tbody className="">
              {table.getRowModel().rows.map((row, index) => {
                return (
                  <tr
                    style={{
                      textAlign: [0].includes(index) ? "left" : "right",
                      borderRadius: "160px",
                      marginTop: "10px",
                    }}
                    key={row.id}
                    className="px-2 py-3 text-sm"
                  >
                    {row.getVisibleCells().map((cell, index) => (
                      <td
                        style={{
                          textAlign: [0].includes(index) ? "left" : "right",
                          width: "fit",
                        }}
                        key={cell.id}
                        className={`
                    w-fit px-1 
             3xl:pl-4 pl-4 2xl:pl-1 py-4 border-b `}
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
            setPage={setPage}
            page={page}
            siblings={0}
            total={productsData.length || 0}
          />
        </div>
      </div>
    </div>
  );
}

export default PromotedProductsTable;
