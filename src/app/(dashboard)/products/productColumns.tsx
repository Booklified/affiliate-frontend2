import { Img, Text } from "@/components";
import { Row, Table, createColumnHelper } from "@tanstack/react-table";
import Image from "next/image";
import Link from "next/link";
import { HTMLProps, useEffect, useRef } from "react";

import * as z from "zod";

const productSchema = z.object({
  name: z.string(),
  price: z.number(),
  commission: z.number(),
  sku: z.string(),
  image: z.string(),
  id: z.string(),
});

export type Product = z.infer<typeof productSchema>;

const columnHelper = createColumnHelper<Product>();

export const tableColumns = [
  {
    id: "select",
    header: ({ table }: { table: Table<Product> }) => (
      <div className="w-4 ">
        <IndeterminateCheckbox
          {...{
            checked: table.getIsAllRowsSelected(),
            indeterminate: table.getIsSomeRowsSelected(),
            onChange: table.getToggleAllRowsSelectedHandler(),
          }}
        />
      </div>
    ),
    cell: ({ row }: { row: Row<Product> }) => (
      <div className="w-4 h-4">
        <IndeterminateCheckbox
          {...{
            checked: row.getIsSelected(),
            disabled: !row.getCanSelect(),
            indeterminate: row.getIsSomeSelected(),
            onChange: row.getToggleSelectedHandler(),
          }}
        />
      </div>
    ),
  },
  columnHelper.accessor("id", {
    header: "Product",
    cell: (cell) => {
      return (
        <Link
          href={"#"}
          className="flex items-center gap-5 !w-fit min-w-[420px]  "
        >
          <div className="flex-shrink-0">
            <Img
              src="img_user_indigo_50.svg"
              width={54}
              height={56}
              alt="user"
              className="h-[56px]"
            />
          </div>
          <div className="flex flex-col items-start">
            <Text size="8xl" as="p" className="!text-indigo-300 underline ">
              {cell?.row?.original?.name ?? ""}
            </Text>
            <Text size="3xl" as="p">
              {cell?.row?.original?.sku ?? ""}
            </Text>
          </div>
        </Link>
      );
    },
  }),
  columnHelper.accessor("price", {
    header: "Price",
    cell: (cell) => {
      return (
        <div className="">
          <Text size="8xl" as="p">
            ${cell?.getValue?.()}
          </Text>
        </div>
      );
    },
  }),
  columnHelper.accessor("commission", {
    header: "Commission",
    cell: (cell) => {
      return (
        <div className="flex flex-col items-center gap-[42px] w-fit">
          <Text size="8xl" as="p">
            {cell?.getValue?.()}%
          </Text>
        </div>
      );
    },
  }),
];

function IndeterminateCheckbox({
  indeterminate,
  className = "",
  ...rest
}: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) {
  const ref = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    if (typeof indeterminate === "boolean") {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate]);

  return (
    <input
      type="checkbox"
      ref={ref}
      className={
        className + " cursor-pointer w-4 h-4 border-light_grayScale rounded"
      }
      {...rest}
    />
  );
}
