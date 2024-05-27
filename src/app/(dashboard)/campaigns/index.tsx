"use client";
import Wrapper from "@/components/Wrapper";
import React from "react";
import { Button, Img, Text } from "../../../components";
import Header1 from "../../../components/Header1";
import Sidebar4 from "../../../components/Sidebar4";
import WireframeCampaigns1OneUserprofile from "../../../components/WireframeCampaigns1OneUserprofile";
import {
  AddtoCartsIcon,
  BrandReferralBonusIcon,
  ClicksIcon,
  CommissionIcon,
  ConversionsIcon,
  DetailPageViewsIcon,
  SignalIcon,
  UpNumbersIcon,
  DownNumberIcon,
} from "@/assets/icons";
import CampaignsChart from "./chart";
import CampaignsTable from "./table/campaignsTable";

const data = [
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

function Page() {
  return (
    <div className="w-full ">
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
          {data.map((item, index) => {
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
      <div className="mt-6">
        <CampaignsTable />
      </div>
    </div>
  );
}

export default Page;
