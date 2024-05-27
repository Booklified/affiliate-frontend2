import { Img, Text } from "@/components";
import { Row, Table, createColumnHelper } from "@tanstack/react-table";
import Image from "next/image";
import { HTMLProps, useEffect, useRef } from "react";

import * as z from "zod";

const campaignsSchema = z.object({
  domain: z.string(),
  id: z.string(),
  clickThrough: z.number(),
  totalDpv: z.number(),
  totalAtc: z.number(),
  totalPurchases: z.number(),
  totalProductSales: z.number(),
  BrandReferralBonus: z.number(),
});

export type Campaigns = z.infer<typeof campaignsSchema>;

const columnHelper = createColumnHelper<Campaigns>();

export const tableColumns = [
  columnHelper.accessor("id", {
    header: (head) => {
      return (
        <div className="flex items-center gap-1">
          <p className="whitespace-nowrap">Campaigns</p>
          <ToolTip content="Campaigns" />
        </div>
      );
    },
    cell: (cell) => {
      console.log(cell.row.original.domain);
      return (
        <div className="flex flex-col gap-1">
          <button className="flex items-center gap-1 px-3 py-1 border rounded-full w-fit border-black-900">
            {cell.row.original.domain}
            <svg
              width="7"
              height="7"
              viewBox="0 0 7 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.45003 1.40997C4.91003 1.86997 5.37003 2.32998 5.83003 2.78998C5.80003 2.81998 5.77001 2.85 5.74001 2.88C4.61 4.01 3.47004 5.15003 2.34004 6.28003C2.28004 6.34003 2.18999 6.38997 2.09999 6.40997C1.61999 6.53997 1.14 6.65002 0.669998 6.77002C0.499998 6.81002 0.420037 6.74 0.460037 6.56C0.580037 6.07 0.700032 5.57002 0.830032 5.08002C0.840032 5.03002 0.879988 4.96999 0.909988 4.92999C2.06999 3.75999 3.23004 2.6 4.40004 1.44C4.41004 1.43 4.43002 1.42002 4.44002 1.40002L4.45003 1.40997Z"
                fill="#8F8F8F"
              />
              <path
                d="M6.23999 2.37002C5.78999 1.92002 5.32999 1.46001 4.85999 0.990011C5.04999 0.810011 5.23 0.610023 5.44 0.440023C5.69 0.240023 6.05999 0.280021 6.29999 0.500021C6.45999 0.640021 6.6 0.790033 6.75 0.950033C6.98 1.21003 7.00002 1.59 6.77002 1.85C6.60002 2.04 6.40998 2.20002 6.22998 2.37002H6.23999Z"
                fill="#8F8F8F"
              />
            </svg>
          </button>
          {cell?.getValue?.()}
        </div>
      );
    },
  }),
  columnHelper.accessor("clickThrough", {
    header: (head) => {
      return (
        <div className="flex items-center gap-1">
          <p className="whitespace-nowrap">Click-throughs</p>
          <ToolTip content="clickThrough" />
        </div>
      );
    },
    cell: (cell) => {
      return (
        <div className="flex items-center gap-5 !w-fit   ">
          {cell?.getValue?.() > 0 ? (
            cell?.getValue?.()
          ) : (
            <span className="w-20 h-0.5 bg-black-900" />
          )}
        </div>
      );
    },
  }),

  columnHelper.accessor("totalDpv", {
    header: (head) => {
      return (
        <div className="flex items-center gap-1">
          <p className="whitespace-nowrap">Total DPV</p>
          <ToolTip content="Total DPV" />
        </div>
      );
    },
    cell: (cell) => {
      return (
        <div className="flex items-center gap-5 !w-fit   ">
          {cell?.getValue?.() > 0 ? (
            cell?.getValue?.()
          ) : (
            <span className="w-20 h-0.5 bg-black-900" />
          )}
        </div>
      );
    },
  }),

  columnHelper.accessor("totalAtc", {
    header: (head) => {
      return (
        <div className="flex items-center gap-1">
          <p className="whitespace-nowrap">Total ATC</p>
          <ToolTip content="Total ATC" />
        </div>
      );
    },
    cell: (cell) => {
      return (
        <div className="flex items-center gap-5 !w-fit   ">
          {cell?.getValue?.() > 0 ? (
            cell?.getValue?.()
          ) : (
            <span className="w-20 h-0.5 bg-black-900" />
          )}
        </div>
      );
    },
  }),
  columnHelper.accessor("totalPurchases", {
    header: (head) => {
      return (
        <div className="flex items-center gap-1">
          <p className="whitespace-nowrap">Total Purchases</p>
          <ToolTip content="Total Purchases" />
        </div>
      );
    },
    cell: (cell) => {
      return (
        <div className="flex items-center gap-5 !w-fit   ">
          {cell?.getValue?.() > 0 ? (
            cell?.getValue?.()
          ) : (
            <span className="w-20 h-0.5 bg-black-900" />
          )}
        </div>
      );
    },
  }),
  columnHelper.accessor("totalProductSales", {
    header: (head) => {
      return (
        <div className="flex items-center gap-1">
          <p className="whitespace-nowrap">Total Product Sales</p>
          <ToolTip content="Total Product Sales" />
        </div>
      );
    },
    cell: (cell) => {
      return (
        <div className="flex items-center gap-5 !w-fit   ">
          {cell?.getValue?.() > 0 ? (
            cell?.getValue?.()
          ) : (
            <span className="w-20 h-0.5 bg-black-900" />
          )}
        </div>
      );
    },
  }),
  columnHelper.accessor("totalPurchases", {
    header: (head) => {
      return (
        <div className="flex items-center gap-1">
          <p className="whitespace-nowrap">Total Purchases</p>
          <ToolTip content="Total Purchases" />
        </div>
      );
    },
    cell: (cell) => {
      return (
        <div className="flex items-center gap-5 !w-fit   ">
          {cell?.getValue?.() > 0 ? (
            cell?.getValue?.()
          ) : (
            <span className="w-20 h-0.5 bg-black-900" />
          )}
        </div>
      );
    },
  }),
  columnHelper.accessor("totalProductSales", {
    header: (head) => {
      return (
        <div className="flex items-center gap-1">
          <p className="whitespace-nowrap">Total Product Sales</p>
          <ToolTip content="Total Product Sales" />
        </div>
      );
    },
    cell: (cell) => {
      return (
        <div className="flex items-center gap-5 !w-fit   ">
          {cell?.getValue?.() > 0 ? (
            cell?.getValue?.()
          ) : (
            <span className="w-20 h-0.5 bg-black-900" />
          )}
        </div>
      );
    },
  }),
  columnHelper.accessor("BrandReferralBonus", {
    header: (head) => {
      return (
        <div className="flex items-center gap-1">
          <p className="whitespace-nowrap">Brand Referral Bonus</p>
          <ToolTip content="Brand Referral Bonus" />
        </div>
      );
    },
    cell: (cell) => {
      return (
        <div className="flex items-center gap-5 !w-fit   ">
          {cell?.getValue?.() > 0 ? (
            cell?.getValue?.()
          ) : (
            <span className="w-20 h-0.5 bg-black-900" />
          )}
        </div>
      );
    },
  }),
];

import { Tooltip } from "antd";

const ToolTip = ({ content }: { content: string }) => (
  <Tooltip className="cursor-pointer" title={content}>
    <svg
      width="12"
      height="12"
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.48997 0.289978C6.65997 0.289978 8.40995 2.04002 8.40995 4.21002C8.40995 6.38002 6.64996 8.13 4.47996 8.13C2.30996 8.13 0.559989 6.37001 0.569989 4.20001C0.569989 2.04001 2.32997 0.289978 4.48997 0.289978ZM3.97996 4.95001C3.97996 5.35001 3.97996 5.75002 3.97996 6.15002C3.97996 6.31002 4.04998 6.42997 4.18998 6.46997C4.33998 6.50997 4.50001 6.54002 4.65001 6.52002C4.93001 6.48002 5.00999 6.36002 5.00999 6.08002C5.00999 5.32002 5.00999 4.55999 5.00999 3.79999C5.00999 3.57999 4.93995 3.45999 4.71995 3.42999C4.55995 3.39999 4.38997 3.40999 4.23997 3.42999C4.06997 3.45999 3.97996 3.58002 3.97996 3.77002C3.97996 4.16002 3.97996 4.56001 3.97996 4.95001ZM4.48997 2.76001C4.77997 2.76001 5.02 2.54998 5.02 2.28998C5.02 2.02998 4.76996 1.81 4.47996 1.81C4.18996 1.81 3.94998 2.03003 3.93998 2.28003C3.93998 2.54003 4.18997 2.76001 4.48997 2.76001Z"
        fill="#8F8F8F"
      />
    </svg>
  </Tooltip>
);

export const campaingsData: Campaigns[] = [
  {
    domain: "toocan.io - test",
    id: "577676329572225084",
    clickThrough: 120,
    totalDpv: 0,
    totalAtc: 45,
    totalPurchases: 12,
    totalProductSales: 789.45,
    BrandReferralBonus: 0,
  },
  {
    domain: "orca.com",
    id: "578034740989730968",
    clickThrough: 0,
    totalDpv: 2345,
    totalAtc: 123,
    totalPurchases: 56,
    totalProductSales: 4567.89,
    BrandReferralBonus: 234.56,
  },
  {
    domain: "shoesplus.com",
    id: "579291650882655194",
    clickThrough: 345,
    totalDpv: 7890,
    totalAtc: 0,
    totalPurchases: 123,
    totalProductSales: 7890.45,
    BrandReferralBonus: 345.67,
  },
  {
    domain: "techgadgets.com",
    id: "579872499654352104",
    clickThrough: 567,
    totalDpv: 4567,
    totalAtc: 123,
    totalPurchases: 56,
    totalProductSales: 4567.89,
    BrandReferralBonus: 0,
  },
  {
    domain: "fashionhub.com",
    id: "579889405667384002",
    clickThrough: 0,
    totalDpv: 1234,
    totalAtc: 345,
    totalPurchases: 78,
    totalProductSales: 1234.56,
    BrandReferralBonus: 123.45,
  },
  {
    domain: "homeessentials.com",
    id: "579891234567890123",
    clickThrough: 234,
    totalDpv: 9876,
    totalAtc: 210,
    totalPurchases: 92,
    totalProductSales: 9876.54,
    BrandReferralBonus: 456.78,
  },
  {
    domain: "sportsgear.com",
    id: "579892345678901234",
    clickThrough: 345,
    totalDpv: 8765,
    totalAtc: 189,
    totalPurchases: 104,
    totalProductSales: 8765.43,
    BrandReferralBonus: 567.89,
  },
  {
    domain: "healthplus.com",
    id: "579893456789012345",
    clickThrough: 456,
    totalDpv: 7654,
    totalAtc: 178,
    totalPurchases: 115,
    totalProductSales: 7654.32,
    BrandReferralBonus: 678.9,
  },
  {
    domain: "beautycorner.com",
    id: "579894567890123456",
    clickThrough: 567,
    totalDpv: 6543,
    totalAtc: 167,
    totalPurchases: 126,
    totalProductSales: 6543.21,
    BrandReferralBonus: 789.01,
  },
  {
    domain: "gadgetworld.com",
    id: "579895678901234567",
    clickThrough: 678,
    totalDpv: 5432,
    totalAtc: 156,
    totalPurchases: 137,
    totalProductSales: 5432.1,
    BrandReferralBonus: 890.12,
  },
  {
    domain: "petparadise.com",
    id: "579896789012345678",
    clickThrough: 789,
    totalDpv: 4321,
    totalAtc: 145,
    totalPurchases: 148,
    totalProductSales: 4321.09,
    BrandReferralBonus: 901.23,
  },
  {
    domain: "travelguide.com",
    id: "579897890123456789",
    clickThrough: 890,
    totalDpv: 3210,
    totalAtc: 134,
    totalPurchases: 159,
    totalProductSales: 3210.98,
    BrandReferralBonus: 101.34,
  },
  {
    domain: "fitnessfirst.com",
    id: "579898901234567890",
    clickThrough: 901,
    totalDpv: 2109,
    totalAtc: 123,
    totalPurchases: 170,
    totalProductSales: 2109.87,
    BrandReferralBonus: 202.45,
  },
  {
    domain: "bookstore.com",
    id: "579899012345678901",
    clickThrough: 123,
    totalDpv: 1987,
    totalAtc: 112,
    totalPurchases: 181,
    totalProductSales: 1987.76,
    BrandReferralBonus: 303.56,
  },
  {
    domain: "fashionline.com",
    id: "579900123456789012",
    clickThrough: 234,
    totalDpv: 2876,
    totalAtc: 101,
    totalPurchases: 192,
    totalProductSales: 2876.65,
    BrandReferralBonus: 404.67,
  },
  {
    domain: "techtrends.com",
    id: "579901234567890123",
    clickThrough: 345,
    totalDpv: 3765,
    totalAtc: 90,
    totalPurchases: 203,
    totalProductSales: 3765.54,
    BrandReferralBonus: 505.78,
  },
  {
    domain: "homestyle.com",
    id: "579902345678901234",
    clickThrough: 456,
    totalDpv: 4654,
    totalAtc: 89,
    totalPurchases: 214,
    totalProductSales: 4654.43,
    BrandReferralBonus: 606.89,
  },
  {
    domain: "outdoorfun.com",
    id: "579903456789012345",
    clickThrough: 567,
    totalDpv: 5543,
    totalAtc: 78,
    totalPurchases: 225,
    totalProductSales: 5543.32,
    BrandReferralBonus: 707.9,
  },
  {
    domain: "gamingzone.com",
    id: "579904567890123456",
    clickThrough: 678,
    totalDpv: 6432,
    totalAtc: 67,
    totalPurchases: 236,
    totalProductSales: 6432.21,
    BrandReferralBonus: 808.01,
  },
  {
    domain: "officehub.com",
    id: "579905678901234567",
    clickThrough: 789,
    totalDpv: 7321,
    totalAtc: 56,
    totalPurchases: 247,
    totalProductSales: 7321.1,
    BrandReferralBonus: 909.12,
  },
  {
    domain: "traveljoy.com",
    id: "579906789012345678",
    clickThrough: 890,
    totalDpv: 8210,
    totalAtc: 45,
    totalPurchases: 258,
    totalProductSales: 8210.09,
    BrandReferralBonus: 1010.23,
  },
  {
    domain: "fashiontrendz.com",
    id: "579907890123456789",
    clickThrough: 901,
    totalDpv: 9109,
    totalAtc: 34,
    totalPurchases: 269,
    totalProductSales: 9109.98,
    BrandReferralBonus: 1111.34,
  },
  {
    domain: "gourmetdelights.com",
    id: "579908901234567890",
    clickThrough: 123,
    totalDpv: 10098,
    totalAtc: 23,
    totalPurchases: 280,
    totalProductSales: 10098.87,
    BrandReferralBonus: 1212.45,
  },
  {
    domain: "beautystore.com",
    id: "579909012345678901",
    clickThrough: 234,
    totalDpv: 10987,
    totalAtc: 12,
    totalPurchases: 291,
    totalProductSales: 10987.76,
    BrandReferralBonus: 1313.56,
  },
  {
    domain: "sportsequip.com",
    id: "579910123456789012",
    clickThrough: 345,
    totalDpv: 11876,
    totalAtc: 1,
    totalPurchases: 302,
    totalProductSales: 11876.65,
    BrandReferralBonus: 1414.67,
  },
];
