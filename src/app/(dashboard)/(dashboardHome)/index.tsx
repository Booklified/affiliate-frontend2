"use client";
import Wrapper from "@/components/Wrapper";
import React from "react";
import Chart from "react-apexcharts";
import { Button, Img, Text } from "../../components-main";
import Link from "next/link";
import Header1 from "@/components/Header1";
import MyDateRangePicker from "@/components/shared/dateRangePicker";

import Campaigns from "../campaigns/index";

const data = [
  {
    sundayText: "Su",
    mondayText: "Mo",
    tuesdayText: "Tu",
    wednesdayText: "We",
    thursdayText: "Th",
    fridayText: "Fr",
    saturdayText: "Sa",
  },
  {
    sundayText: "28",
    mondayText: "29",
    tuesdayText: "30",
    wednesdayText: "1",
    thursdayText: "2",
    fridayText: "3",
    saturdayText: "4",
  },
  {
    sundayText: "5",
    mondayText: "6",
    tuesdayText: "7",
    wednesdayText: "8",
    thursdayText: "9",
    fridayText: "10",
    saturdayText: "11",
  },
  {
    sundayText: "12",
    mondayText: "13",
    tuesdayText: "14",
    wednesdayText: "15",
    thursdayText: "16",
    fridayText: "17",
    saturdayText: "18",
  },
  {
    sundayText: "19",
    mondayText: "20",
    tuesdayText: "21",
    wednesdayText: "22",
    thursdayText: "23",
    fridayText: "24",
    saturdayText: "25",
  },
  {
    sundayText: "26",
    mondayText: "27",
    tuesdayText: "28",
    wednesdayText: "29",
    thursdayText: "30",
    fridayText: "31",
    saturdayText: "1",
  },
];

const statDdata = [
  {
    name: "Commission",
    amount: "$4,000.00",
    icon: <CommissionIcon />,
    change: 10,
  },
  {
    name: "Brand Referral Bonus",
    amount: "$5,500.00",
    icon: <BrandReferralBonusIcon />,
    change: -5,
  },
  {
    name: "Clicks",
    amount: "$1,700.00",
    icon: <ClicksIcon />,
    change: 28,
  },
  {
    name: "Detail Page Views",
    amount: "$300.00",
    icon: <DetailPageViewsIcon />,
    change: -12,
  },
  {
    name: "Add to Carts",
    amount: "$1,000.00",
    icon: <AddtoCartsIcon />,
    change: 16,
  },
  {
    name: "Conversions",
    amount: "$40,000.00",
    icon: <ConversionsIcon />,
    change: 44,
  },
];
const Home = () => {
  return (
    <div className="px-6 mt-6">
      <div className="ml-auto 2xl:hidden">
        <PageHeader />
      </div>
      <div className="relative flex w-full isolate ">
        <div className="relative w-full py-5 bg-yellow-900 px-7 max-w-fit rounded-t-2xl reverseBorder">
          <div className="flex items-center gap-2">
            <h3 className="text-[40px] font-bold text-yellbg-yellow-900 text-white-A700">
              Welcome, Mike!
            </h3>
          </div>
        </div>
        <div className="relative flex items-center flex-grow gap-2 pl-5 overflow-x-scroll bg-indigo-50">
          <div className="hidden ml-auto 2xl:flex">
            <PageHeader />
          </div>
        </div>
      </div>
      <div>
        <Stats />
      </div>

      {/* Trends */}
      <div className="mb-10">
        <Trends />
      </div>
      <div>
        {/* stats */}
        <div className="relative flex w-full isolate ">
          <div className="relative w-full pt-5 pb-10 px-7 max-w-fit bg-white-A700 rounded-t-2xl reverseBorder">
            <div className="flex items-center gap-2">
              <div className="w-[46px] h-[46px] rounded-full bg-yellow-900 flex items-center justify-center">
                <SignalIcon />
              </div>
              <div>
                <p className="text-[9px] text-gray-500">Sales</p>
                <p className="text-xl text-black-900">$4,000.00</p>
                <span className="flex items-center gap-1">
                  <UpNumbersIcon />
                  <p className="text-[8px]">
                    <span className="text-yellow-900"> 10%</span>This month
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div className="relative flex items-center flex-grow gap-2 pl-5 overflow-x-scroll bg-indigo-50">
            {statDdata.map((item, index) => {
              return (
                <div
                  key={index}
                  className="px-5 py-2.5 border border-black-900 rounded-xl"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-[46px] h-[46px] rounded-full bg-white-A700 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[9px] text-gray-500">{item?.name}</p>
                      <p className="text-xl text-black-900">{item?.amount}</p>
                      <span className="flex items-center gap-1">
                        {item?.change > 0 ? (
                          <UpNumbersIcon />
                        ) : (
                          <DownNumberIcon />
                        )}
                        <p className="text-[8px]">
                          <span className="text-yellow-900">
                            {" "}
                            {item?.change}%
                          </span>
                          This month
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* <div className="absolute top-0 bottom-0 left-0 w-3 border-4 border-red-700 bg-indigo-50">
            <div className="absolute top-0 bottom-0 left-0 w-2 rounded-bl-lg bg-indigo-50" />
          </div> */}
          </div>
        </div>

        <div className="w-full p-6 rounded-b-lg rounded-tr-lg bg-white-A700">
          <Text size="lg" as="p">
            Trends
          </Text>
          <CampaignsChart />
        </div>
      </div>
    </div>
  );
};

const Trends = () => {
  return (
    <div className="mt-6">
      <div className="flex flex-col justify-between w-full gap-3 lg:flex-row">
        <div className="flex items-center gap-3 py-3 pt-3 pl-12 pr-8 text-2xl rounded-lg w-fit text-black-900 whitespace-nowrap bg-white-A700">
          <span className="text-xs font-medium">Date Range :</span>
          <MyDateRangePicker />
          <span className="text-xs text-gray-500">
            vs. May 05, 2024 - Jun 05, 2024
          </span>
        </div>
        <PSelect />
      </div>
    </div>
  );
};
const Stats = () => {
  return (
    <div className="flex flex-col w-full gap-5 p-6 overflow-hidden bg-yellow-900 2xl:flex-row">
      <div className="flex 2xl:w-1/2  justify-center rounded-[20px] bg-white-A700 px-[27px] pb-8 pt-[27px] md:w-full sm:p-5">
        <div className="flex w-full flex-col items-start gap-[11px]">
          <Text size="5xl" as="p" className="!text-[22.82px] font-medium">
            Partner Summary Snapshot
          </Text>
          <div className="flex items-center self-stretch justify-between gap-5">
            <div className="flex w-[50%] flex-col gap-4">
              <div className="flex  items-start gap-[15px] md:w-full">
                <div className="h-[16px] w-[16px] rounded-lg bg-[#FF3B2E]" />
                <Text size="3xl" as="p">
                  # Partners
                </Text>
              </div>
              <div className="flex  items-start gap-[15px] md:w-full">
                <div className="h-[16px] w-[16px] rounded-lg bg-yellow-900" />
                <Text size="3xl" as="p">
                  Lifetime Sales
                </Text>
              </div>
              <div className="flex items-start gap-[15px]">
                <div className="h-[16px] w-[16px] rounded-lg bg-light_green-100" />
                <Text size="3xl" as="p">
                  Lifetime Referral Bonus
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start gap-3">
              <Text
                size="4xl"
                as="p"
                className="h-[25px] w-[26px] !font-medium"
              >
                24
              </Text>
              <Text size="4xl" as="p" className="!font-medium">
                $12,252
              </Text>
              <Text size="4xl" as="p" className="!font-medium">
                $1,225
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full 2xl:w1/2 flex-shrink-0 flex flex-1 flex-col items-start gap-[3px] rounded-[20px] bg-white-A700 px-[41px] pb-[35px] pt-[27px] md:self-stretch md:px-5 sm:p-5 overflow-auto">
        <Text size="5xl" as="p" className="!text-[22.82px] font-medium">
          Partner Summary Trends
        </Text>
        <div className="w-full h-full ">
          <Chart
            options={{
              chart: {
                height: 200,
                // width: "100%",
                type: "line",
                zoom: {
                  enabled: false,
                },
              },
              dataLabels: {
                enabled: false,
              },
              stroke: {
                width: [5, 7, 5],
                curve: "straight",
                dashArray: [0, 8, 5],
              },

              legend: {
                tooltipHoverFormatter: function (val, opts) {
                  return (
                    val +
                    " - <strong>" +
                    opts.w.globals.series[opts.seriesIndex][
                      opts.dataPointIndex
                    ] +
                    "</strong>"
                  );
                },
              },
              markers: {
                size: 0,
                hover: {
                  sizeOffset: 6,
                },
              },
              xaxis: {
                categories: [
                  "01 Jan",
                  "02 Jan",
                  "03 Jan",
                  "04 Jan",
                  "05 Jan",
                  "06 Jan",
                  "07 Jan",
                  "08 Jan",
                  "09 Jan",
                  "10 Jan",
                  "11 Jan",
                  "12 Jan",
                ],
              },
              tooltip: {
                y: [
                  {
                    title: {
                      formatter: function (val) {
                        return val + " (mins)";
                      },
                    },
                  },
                  {
                    title: {
                      formatter: function (val) {
                        return val + " per session";
                      },
                    },
                  },
                  {
                    title: {
                      formatter: function (val) {
                        return val;
                      },
                    },
                  },
                ],
              },
              grid: {
                borderColor: "#f1f1f1",
              },
            }}
            series={[
              {
                name: "John",
                data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
              },
              {
                name: "Mike",
                data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
              },
              {
                name: "Jess",
                data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
              },
            ]}
            type="line"
            height={"100%"}
            // width={"100%"}
          />
        </div>
      </div>
    </div>
  );
};

const PageHeader = () => {
  return (
    <div className="flex flex-col-reverse items-center gap-1 mb-2 ml-auto lg:flex-row">
      <div className="flex items-center ml-auto gap-x-3 gap-y-3 2xl:mb-0">
        {" "}
        <div className="relative ">
          <label>
            <input className="w-full max-w-[411px] bg-white-A700 rounded-lg pl-6 pr-12 py-2" />
          </label>
          <svg
            width="31"
            height="30"
            className="absolute -translate-y-1/2 right-3 top-1/2"
            viewBox="0 0 31 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.12 0.119987C13.62 0.189987 14.12 0.249983 14.61 0.349983C17.13 0.859983 19.27 2.03999 21.01 3.93999C23.31 6.45999 24.36 9.43998 24.13 12.84C23.98 15.03 23.24 17.03 21.96 18.82C21.84 18.99 21.72 19.15 21.6 19.31C21.59 19.33 21.5801 19.34 21.5601 19.39C21.6301 19.46 21.7 19.55 21.78 19.63C24.49 22.34 27.2 25.05 29.91 27.76C30.3 28.14 30.5 28.57 30.34 29.12C30.09 29.95 29.1 30.27 28.41 29.75C28.29 29.66 28.19 29.56 28.09 29.46C25.41 26.78 22.72 24.1 20.04 21.41C19.96 21.33 19.91 21.22 19.83 21.11C19.63 21.26 19.5 21.35 19.37 21.45C17.86 22.58 16.18 23.31 14.33 23.61C10.59 24.2 7.27994 23.24 4.43994 20.72C2.33994 18.86 1.11002 16.5 0.650024 13.74C0.590024 13.41 0.56002 13.07 0.52002 12.73C0.52002 12.2 0.52002 11.68 0.52002 11.15C0.57002 10.8 0.610034 10.46 0.660034 10.11C1.14003 7.27999 2.44998 4.90998 4.59998 3.01998C6.17998 1.63998 8.00005 0.749981 10.05 0.339981C10.54 0.239981 11.04 0.189985 11.54 0.109985C12.07 0.109985 12.59 0.109985 13.12 0.109985V0.119987ZM21.6899 11.96C21.6599 6.76998 17.51 2.63999 12.36 2.61999C7.22999 2.59999 3.03002 6.78999 3.02002 11.94C3.01002 17.07 7.18997 21.29 12.34 21.28C17.48 21.28 21.6299 17.18 21.6899 11.96Z"
              fill="#D8D8D8"
            />
          </svg>
        </div>
        <Link
          href={"/campaigns?add=true"}
          className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-white-A700 bg-red-500_01"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <p className="whitespace-nowrap">Add New Affiliate</p>
        </Link>
      </div>
      <Header1 showNotification />
    </div>
  );
};

import { Description, Field, Label, Select } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import {
  AddtoCartsIcon,
  BrandReferralBonusIcon,
  ClicksIcon,
  CommissionIcon,
  ConversionsIcon,
  DetailPageViewsIcon,
  DownNumberIcon,
  SignalIcon,
  UpNumbersIcon,
} from "@/assets/icons";
import CampaignsChart from "../campaigns/chart";

function PSelect() {
  return (
    <div className="relative px-4 min-w-[200px] ml-auto">
      <div className="relative">
        <Select
          className={clsx(
            "mt-3 max-w-[180px] bg-white-A700 block w-full appearance-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
          )}
        >
          <option value="active">Brand/Products</option>
          <option value="paused">Brand/Products</option>
          <option value="delayed">Brand/Products</option>
          <option value="canceled">Brand/Products</option>
        </Select>
      </div>
    </div>
  );
}

export default Home;
