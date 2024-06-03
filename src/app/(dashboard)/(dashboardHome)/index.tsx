"use client";
import React from "react";
import Chart from "react-apexcharts";
import { Text } from "../../components-main";
import Link from "next/link";
import Header1 from "@/components/Header1";
import MyDateRangePicker from "@/components/shared/dateRangePicker";

import CampaignsChart from "../campaigns/chart";
import SelectBrandAndProduct from "@/components/shared/selectBrandAndProduct";
import ALLStats from "@/components/ALLStats";

const Home = () => {
  return (
    <div className="@container">
      <div className="ml-auto xl:hidden">
        <PageHeader />
      </div>
      <div className="relative flex w-full isolate ">
        <div className="relative w-full py-5 bg-yellow-900 px-7 max-w-fit rounded-t-2xl reverseBorder">
          <div className="flex items-center gap-2">
            <h3 className="main-heading text-yellbg-yellow-900 text-white-A700">
              Welcome, Mike!
            </h3>
          </div>
        </div>
        <div className="relative flex items-center flex-grow gap-2 pl-5 overflow-x-scroll bg-indigo-50">
          <div className="hidden ml-auto xl:flex">
            <PageHeader />
          </div>
        </div>
      </div>
      <div className="w-full">
        <Stats />
      </div>

      {/* Trends */}
      <div className="mb-10">
        <Filters />
      </div>
      <div>
        {/* stats */}
        <ALLStats />
      </div>
    </div>
  );
};

const Filters = () => {
  return (
    <div className="w-full mt-6">
      <div className="flex flex-col items-center justify-between w-full gap-3 lg:flex-row">
        <div className="flex flex-col items-center w-full gap-3 py-3 pt-3 pl-12 pr-8 mx-auto text-2xl rounded-lg lg:mx-0 sm:w-fit sm:flex-row text-black-900 whitespace-nowrap bg-white-A700">
          <span className="text-xs font-medium">Date Range :</span>
          <MyDateRangePicker />
          <span className="text-xs text-gray-500">vs.</span>
          <span className="text-xs text-gray-500">
            May 05, 2024 - Jun 05, 2024
          </span>
        </div>
        <SelectBrandAndProduct />
      </div>
    </div>
  );
};
const Stats = () => {
  return (
    <div className="flex flex-col w-full gap-5 p-6 overflow-hidden bg-yellow-900 lg:flex-row ">
      <div className="flex w-full lg:max-w-fit xl:max-w-[548px]  justify-center rounded-[20px] bg-white-A700 px-[27px] pb-8 pt-[27px]  sm:p-5">
        <div className="flex w-full flex-col items-start gap-[11px]">
          <p className="subsection-heading-medium">Partner Summary Snapshot</p>
          <div className="flex items-center self-stretch justify-between gap-5">
            <div className="flex w-[50%] flex-col gap-4">
              <div className="flex  items-start gap-[15px] md:w-full">
                <div className="h-[16px] w-[16px] rounded-lg bg-[#FF3B2E]" />
                <p className="regular-text"># Partners</p>
              </div>
              <div className="flex  items-start gap-[15px] md:w-full">
                <div className="h-[16px] w-[16px] rounded-lg bg-yellow-900" />
                <p className="regular-text">Lifetime Sales</p>
              </div>
              <div className="flex items-start gap-[15px]">
                <div className="h-[16px] w-[16px] rounded-lg bg-light_green-100" />
                <p className="regular-text whiteSpace-nowrap">
                  Lifetime Referral Bonus
                </p>
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
      <div className="w-full">
        <div className="w-full 0  flex flex-1 flex-col items-start gap-[3px] rounded-[20px] bg-white-A700 px-[41px] pb-[35px] pt-[27px]  md:px-5 sm:p-5 ">
          <p className="subsection-heading-medium">Partner Summary Trends</p>
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
                  // borderColor: "#f1f1f1",
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
            />
          </div>
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
          href={"#"}
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

export default Home;
