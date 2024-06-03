"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

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
import Link from "next/link";
import { Text } from "../Text";
import CampaignsChart from "@/app/(dashboard)/campaigns/chart";

function ALLStats() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const view = searchParams.get("view");

  const statDdata = [
    {
      name: "Sales",
      amount: "$4,000.00",
      icon: (
        <SignalIcon
          className={`${
            view == "sales" ? "text-white-A700" : "text-yellow-900"
          }`}
        />
      ),
      change: 10,
      param: "sales",
    },
    {
      name: "Commission",
      amount: "$4,000.00",
      icon: (
        <CommissionIcon
          className={`${
            view == "commission" ? "text-white-A700" : "text-[#7E7ECE]"
          }`}
        />
      ),
      change: 10,
      param: "commission",
    },
    {
      name: "Brand Referral Bonus",
      amount: "$5,500.00",
      icon: (
        <BrandReferralBonusIcon
          className={`${
            view == "brand_referral_bonus"
              ? "text-white-A700"
              : "text-[#FF3B2E]"
          }`}
        />
      ),
      change: -5,
      param: "brand_referral_bonus",
    },
    {
      name: "Clicks",
      amount: "$1,700.00",
      icon: (
        <ClicksIcon
          className={`${
            view == "clicks" ? "text-white-A700" : "text-[#94E8B4]"
          }`}
        />
      ),
      change: 28,
      param: "clicks",
    },
    {
      name: "Detail Page Views",
      amount: "$300.00",
      icon: (
        <DetailPageViewsIcon
          className={`${
            view == "detail_page_views" ? "text-white-A700" : "text-[#FB7E10]"
          }`}
        />
      ),
      change: -12,
      param: "detail_page_views",
    },
    {
      name: "Add to Carts",
      amount: "$1,000.00",
      icon: (
        <AddtoCartsIcon
          className={`${
            view == "add_to_carts" ? "text-white-A700" : "text-[#7E7ECE]"
          }`}
        />
      ),
      change: 16,
      param: "add_to_carts",
    },
    {
      name: "Conversions",
      amount: "$40,000.00",
      icon: (
        <ConversionsIcon
          className={`${
            view == "conversions" ? "text-white-A700" : "text-[#FF3B2E]"
          }`}
        />
      ),
      change: 44,
      param: "conversions",
    },
  ];
  const selectedItem = statDdata.find((item) => item.param === view);

  console.log(selectedItem);
  const getLink = (item: any) => {
    const current = new URLSearchParams(searchParams.toString());
    current.set("view", item.param);
    const search = current.toString();
    const url = search ? pathname + "?" + search : pathname;

    return url;
  };
  useEffect(() => {
    if (!view) {
      router.push(getLink(statDdata[0]));
    }
  }, []);
  return (
    <div>
      <div className="relative flex w-full isolate ">
        <div className="relative w-full px-3 pt-2 pb-5 lg:pt-5 lg:pb-10 lg:px-7 max-w-fit bg-white-A700 rounded-t-2xl reverseBorder">
          <div className="flex items-center gap-2">
            <div
              style={{
                flexShrink: 0,
              }}
              className="w-[46px] h-[46px] flex-shrink-0 rounded-full bg-yellow-900 flex items-center justify-center"
            >
              {selectedItem?.icon}
            </div>
            <div>
              <p className="text-[9px] text-gray-500">
                {selectedItem?.name ?? ""}
              </p>
              <p className="text-xl text-black-900">
                {selectedItem?.amount ?? ""}
              </p>
              <span className="flex items-center gap-1">
                <UpNumbersIcon />
                <p className="text-[8px]">
                  <span className="text-yellow-900">
                    {" "}
                    {selectedItem?.change ?? ""}
                  </span>
                  This month
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="relative flex items-center flex-grow gap-2 pl-5 overflow-x-scroll bg-indigo-50">
          {statDdata
            .filter((item) => item?.param !== view)
            .map((item, index) => {
              return (
                <Link
                  href={getLink(item)}
                  scroll={false}
                  key={index}
                  className="lg:px-5 lg:py-2.5 px-2 py-2 border border-black-900 rounded-xl"
                >
                  <div className="flex items-center gap-2 white-space-nowrap">
                    <div className="w-[46px] h-[46px] rounded-full bg-white-A700 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <p
                        style={{
                          whiteSpace: "nowrap",
                        }}
                        className="!text-[12px] text-gray-500 !white-space-nowrap"
                      >
                        {item?.name}
                      </p>
                      <p className="text-xl text-black-900">{item?.amount}</p>
                      <span
                        style={{
                          whiteSpace: "nowrap",
                        }}
                        className="flex items-center gap-1"
                      >
                        {item?.change > 0 ? (
                          <UpNumbersIcon />
                        ) : (
                          <DownNumberIcon />
                        )}
                        <p className="text-[12px]">
                          <span className="text-yellow-900">
                            {" "}
                            {item?.change}%
                          </span>
                          This month
                        </p>
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>

      <div className="w-full p-6 rounded-b-lg rounded-tr-lg bg-white-A700">
        <Text size="lg" as="p">
          Trends
        </Text>
        <CampaignsChart />
      </div>
    </div>
  );
}

export default ALLStats;
