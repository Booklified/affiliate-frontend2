import { Img, Text } from "@/components";
import { Row, Table, createColumnHelper } from "@tanstack/react-table";
import Image from "next/image";
import { HTMLProps, useEffect, useRef } from "react";

import * as z from "zod";

const billingSchema = z.object({
  month: z.string(),
  brand: z.string(),
  totalCoast: z.number(),
  dueDate: z.string().date(),
  status: z.enum(["Paid", "Unpaid"]),
  id: z.string(),
});

export type Billing = z.infer<typeof billingSchema>;

const columnHelper = createColumnHelper<Billing>();

export const tableColumns = [
  columnHelper.accessor("month", {
    header: "Month",
    cell: (cell) => {
      return (
        <div className="flex items-center gap-5 !w-fit   ">
          {cell?.getValue?.()}
        </div>
      );
    },
  }),
  columnHelper.accessor("brand", {
    header: "Brand",
    cell: (cell) => {
      return (
        <div className="">
          <p className="text-[14px]">{cell?.getValue?.()}</p>
        </div>
      );
    },
  }),
  columnHelper.accessor("totalCoast", {
    header: "Total Coast",
    cell: (cell) => {
      return (
        <div className="flex flex-col items-center gap-[42px] w-fit">
          <p className="text-sm">${cell?.getValue?.().toFixed(2)}</p>
        </div>
      );
    },
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (cell) => {
      let className =
        cell?.getValue?.() === "Unpaid"
          ? "bg-red-500_01"
          : "bg-light_green-100";
      return (
        <div
          className={`flex w-fit mx-auto text-white-A700 rounded-xl justify-center items-center min-w-[146px] h-[25px] ${className} `}
        >
          <p className="text-sm text-center">{cell?.getValue?.()}</p>
        </div>
      );
    },
  }),
  columnHelper.accessor("id", {
    header: "",
    cell: (cell) => {
      return (
        <button
          className={`flex w-fit ml-auto  rounded-xl justify-center items-center min-w-[146px] h-[25px]  border`}
        >
          <p className="text-center">View Invoice</p>
        </button>
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

export const billingsData: Billing[] = [
  {
    id: "1",
    brand: "Grills & Gadgets",
    month: "January 2021",
    totalCoast: 25000,
    dueDate: "2021-01-01T00:00:00.000Z",
    status: "Paid",
  },
  {
    id: "2",
    brand: "Tech World",
    month: "February 2021",
    totalCoast: 32000,
    dueDate: "2021-02-01T00:00:00.000Z",
    status: "Unpaid",
  },
  {
    id: "3",
    brand: "Home Essentials",
    month: "March 2021",
    totalCoast: 15000,
    dueDate: "2021-03-01T00:00:00.000Z",
    status: "Paid",
  },
  {
    id: "4",
    brand: "Outdoor Gear",
    month: "April 2021",
    totalCoast: 28000,
    dueDate: "2021-04-01T00:00:00.000Z",
    status: "Unpaid",
  },
  {
    id: "5",
    brand: "Fashion Hub",
    month: "May 2021",
    totalCoast: 20000,
    dueDate: "2021-05-01T00:00:00.000Z",
    status: "Paid",
  },
  {
    id: "6",
    brand: "Pet Paradise",
    month: "June 2021",
    totalCoast: 18000,
    dueDate: "2021-06-01T00:00:00.000Z",
    status: "Paid",
  },
  {
    id: "7",
    brand: "Gourmet Foods",
    month: "July 2021",
    totalCoast: 22000,
    dueDate: "2021-07-01T00:00:00.000Z",
    status: "Unpaid",
  },
  {
    id: "8",
    brand: "Tech World",
    month: "August 2021",
    totalCoast: 34000,
    dueDate: "2021-08-01T00:00:00.000Z",
    status: "Paid",
  },
  {
    id: "9",
    brand: "Home Essentials",
    month: "September 2021",
    totalCoast: 12000,
    dueDate: "2021-09-01T00:00:00.000Z",
    status: "Unpaid",
  },
  {
    id: "10",
    brand: "Outdoor Gear",
    month: "October 2021",
    totalCoast: 26000,
    dueDate: "2021-10-01T00:00:00.000Z",
    status: "Paid",
  },
  {
    id: "11",
    brand: "Fashion Hub",
    month: "November 2021",
    totalCoast: 30000,
    dueDate: "2021-11-01T00:00:00.000Z",
    status: "Paid",
  },
  {
    id: "12",
    brand: "Pet Paradise",
    month: "December 2021",
    totalCoast: 19000,
    dueDate: "2021-12-01T00:00:00.000Z",
    status: "Unpaid",
  },
  {
    id: "13",
    brand: "Grills & Gadgets",
    month: "January 2022",
    totalCoast: 26000,
    dueDate: "2022-01-01T00:00:00.000Z",
    status: "Paid",
  },
  {
    id: "14",
    brand: "Tech World",
    month: "February 2022",
    totalCoast: 35000,
    dueDate: "2022-02-01T00:00:00.000Z",
    status: "Unpaid",
  },
  {
    id: "15",
    brand: "Home Essentials",
    month: "March 2022",
    totalCoast: 14000,
    dueDate: "2022-03-01T00:00:00.000Z",
    status: "Paid",
  },
  {
    id: "16",
    brand: "Outdoor Gear",
    month: "April 2022",
    totalCoast: 27000,
    dueDate: "2022-04-01T00:00:00.000Z",
    status: "Unpaid",
  },
  {
    id: "17",
    brand: "Fashion Hub",
    month: "May 2022",
    totalCoast: 21000,
    dueDate: "2022-05-01T00:00:00.000Z",
    status: "Paid",
  },
  {
    id: "18",
    brand: "Pet Paradise",
    month: "June 2022",
    totalCoast: 17000,
    dueDate: "2022-06-01T00:00:00.000Z",
    status: "Unpaid",
  },
  {
    id: "19",
    brand: "Gourmet Foods",
    month: "July 2022",
    totalCoast: 23000,
    dueDate: "2022-07-01T00:00:00.000Z",
    status: "Paid",
  },
  {
    id: "20",
    brand: "Tech World",
    month: "August 2022",
    totalCoast: 36000,
    dueDate: "2022-08-01T00:00:00.000Z",
    status: "Unpaid",
  },
  {
    id: "21",
    brand: "Home Essentials",
    month: "September 2022",
    totalCoast: 13000,
    dueDate: "2022-09-01T00:00:00.000Z",
    status: "Paid",
  },
  {
    id: "22",
    brand: "Outdoor Gear",
    month: "October 2022",
    totalCoast: 25000,
    dueDate: "2022-10-01T00:00:00.000Z",
    status: "Paid",
  },
  {
    id: "23",
    brand: "Fashion Hub",
    month: "November 2022",
    totalCoast: 31000,
    dueDate: "2022-11-01T00:00:00.000Z",
    status: "Unpaid",
  },
  {
    id: "24",
    brand: "Pet Paradise",
    month: "December 2022",
    totalCoast: 20000,
    dueDate: "2022-12-01T00:00:00.000Z",
    status: "Paid",
  },
  {
    id: "25",
    brand: "Grills & Gadgets",
    month: "January 2023",
    totalCoast: 27000,
    dueDate: "2023-01-01T00:00:00.000Z",
    status: "Unpaid",
  },
  {
    id: "26",
    brand: "Tech World",
    month: "February 2023",
    totalCoast: 37000,
    dueDate: "2023-02-01T00:00:00.000Z",
    status: "Paid",
  },
  {
    id: "27",
    brand: "Home Essentials",
    month: "March 2023",
    totalCoast: 16000,
    dueDate: "2023-03-01T00:00:00.000Z",
    status: "Unpaid",
  },
  {
    id: "28",
    brand: "Outdoor Gear",
    month: "April 2023",
    totalCoast: 28000,
    dueDate: "2023-04-01T00:00:00.000Z",
    status: "Paid",
  },
  {
    id: "29",
    brand: "Fashion Hub",
    month: "May 2023",
    totalCoast: 22000,
    dueDate: "2023-05-01T00:00:00.000Z",
    status: "Unpaid",
  },
  {
    id: "30",
    brand: "Pet Paradise",
    month: "June 2023",
    totalCoast: 18000,
    dueDate: "2023-06-01T00:00:00.000Z",
    status: "Paid",
  },
  {
    id: "31",
    brand: "Gourmet Foods",
    month: "July 2023",
    totalCoast: 24000,
    dueDate: "2023-07-01T00:00:00.000Z",
    status: "Unpaid",
  },
  {
    id: "32",
    brand: "Tech World",
    month: "August 2023",
    totalCoast: 38000,
    dueDate: "2023-08-01T00:00:00.000Z",
    status: "Paid",
  },
  {
    id: "33",
    brand: "Home Essentials",
    month: "September 2023",
    totalCoast: 15000,
    dueDate: "2023-09-01T00:00:00.000Z",
    status: "Unpaid",
  },
  {
    id: "34",
    brand: "Outdoor Gear",
    month: "October 2023",
    totalCoast: 26000,
    dueDate: "2023-10-01T00:00:00.000Z",
    status: "Paid",
  },
  {
    id: "35",
    brand: "Fashion Hub",
    month: "November 2023",
    totalCoast: 32000,
    dueDate: "2023-11-01T00:00:00.000Z",
    status: "Unpaid",
  },
  {
    id: "36",
    brand: "Pet Paradise",
    month: "December 2023",
    totalCoast: 21000,
    dueDate: "2023-12-01T00:00:00.000Z",
    status: "Paid",
  },
  {
    id: "37",
    brand: "Grills & Gadgets",
    month: "January 2024",
    totalCoast: 28000,
    dueDate: "2024-01-01T00:00:00.000Z",
    status: "Unpaid",
  },
  {
    id: "38",
    brand: "Tech World",
    month: "February 2024",
    totalCoast: 39000,
    dueDate: "2024-02-01T00:00:00.000Z",
    status: "Paid",
  },
  {
    id: "39",
    brand: "Home Essentials",
    month: "March 2024",
    totalCoast: 17000,
    dueDate: "2024-03-01T00:00:00.000Z",
    status: "Unpaid",
  },
  {
    id: "40",
    brand: "Outdoor Gear",
    month: "April 2024",
    totalCoast: 29000,
    dueDate: "2024-04-01T00:00:00.000Z",
    status: "Paid",
  },
  {
    id: "41",
    brand: "Fashion Hub",
    month: "May 2024",
    totalCoast: 23000,
    dueDate: "2024-05-01T00:00:00.000Z",
    status: "Unpaid",
  },
  {
    id: "42",
    brand: "Pet Paradise",
    month: "June 2024",
    totalCoast: 19000,
    dueDate: "2024-06-01T00:00:00.000Z",
    status: "Paid",
  },
  {
    id: "43",
    brand: "Gourmet Foods",
    month: "July 2024",
    totalCoast: 25000,
    dueDate: "2024-07-01T00:00:00.000Z",
    status: "Unpaid",
  },
  {
    id: "44",
    brand: "Tech World",
    month: "August 2024",
    totalCoast: 40000,
    dueDate: "2024-08-01T00:00:00.000Z",
    status: "Paid",
  },
  {
    id: "45",
    brand: "Home Essentials",
    month: "September 2024",
    totalCoast: 16000,
    dueDate: "2024-09-01T00:00:00.000Z",
    status: "Unpaid",
  },
  {
    id: "46",
    brand: "Outdoor Gear",
    month: "October 2024",
    totalCoast: 27000,
    dueDate: "2024-10-01T00:00:00.000Z",
    status: "Paid",
  },
  {
    id: "47",
    brand: "Fashion Hub",
    month: "November 2024",
    totalCoast: 33000,
    dueDate: "2024-11-01T00:00:00.000Z",
    status: "Unpaid",
  },
  {
    id: "48",
    brand: "Pet Paradise",
    month: "December 2024",
    totalCoast: 22000,
    dueDate: "2024-12-01T00:00:00.000Z",
    status: "Paid",
  },
  {
    id: "49",
    brand: "Grills & Gadgets",
    month: "January 2025",
    totalCoast: 29000,
    dueDate: "2025-01-01T00:00:00.000Z",
    status: "Unpaid",
  },
  {
    id: "50",
    brand: "Tech World",
    month: "February 2025",
    totalCoast: 41000,
    dueDate: "2025-02-01T00:00:00.000Z",
    status: "Paid",
  },
  {
    id: "51",
    brand: "Home Essentials",
    month: "March 2025",
    totalCoast: 18000,
    dueDate: "2025-03-01T00:00:00.000Z",
    status: "Unpaid",
  },
  {
    id: "52",
    brand: "Outdoor Gear",
    month: "April 2025",
    totalCoast: 30000,
    dueDate: "2025-04-01T00:00:00.000Z",
    status: "Paid",
  },
  {
    id: "53",
    brand: "Fashion Hub",
    month: "May 2025",
    totalCoast: 24000,
    dueDate: "2025-05-01T00:00:00.000Z",
    status: "Unpaid",
  },
  {
    id: "54",
    brand: "Pet Paradise",
    month: "June 2025",
    totalCoast: 20000,
    dueDate: "2025-06-01T00:00:00.000Z",
    status: "Paid",
  },
  {
    id: "55",
    brand: "Gourmet Foods",
    month: "July 2025",
    totalCoast: 26000,
    dueDate: "2025-07-01T00:00:00.000Z",
    status: "Unpaid",
  },
  {
    id: "56",
    brand: "Tech World",
    month: "August 2025",
    totalCoast: 42000,
    dueDate: "2025-08-01T00:00:00.000Z",
    status: "Paid",
  },
  {
    id: "57",
    brand: "Home Essentials",
    month: "September 2025",
    totalCoast: 17000,
    dueDate: "2025-09-01T00:00:00.000Z",
    status: "Unpaid",
  },
];
