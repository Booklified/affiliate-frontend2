import React from "react";
import Page from ".";
import Link from "next/link";
import Header1 from "@/components/Header1";
import DateRangePicker from "@/components/shared/dateRangePicker";

export const metadata = {
  title: "Toocan",
  description: "Web site created using create-react-app",
  //ogTitle:'...'
};

export default function WireframeCampaigns1OnePage() {
  return (
    <div className="w-screen px-4 overflow-hidden md:w-full">
      <div className="flex flex-col-reverse items-center w-full gap-2 py-2 font-bold xl:flex-row">
        <div className="flex items-center gap-3 py-3 pt-3 pl-12 pr-8 text-2xl rounded-lg w-fit text-black-900 whitespace-nowrap bg-white-A700">
          <span className="text-xs font-medium">Date Range :</span>
          <DateRangePicker />
          <span className="text-xs text-gray-500">
            vs. May 05, 2024 - Jun 05, 2024
          </span>
        </div>
        <div className="flex items-center gap-1 ml-auto">
          <Link
            href={"/campaigns?add=true"}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-white-A700 bg-yellow-900"
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
          <Header1 showNotification />
        </div>
      </div>
      <Page />
    </div>
  );
}
