"use client";
import Wrapper from "@/components/Wrapper";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";
import userImage from "../../../public/images/user.png";
import {
  Button,
  Heading,
  Img,
  SelectBox,
  Text,
} from "../../../../../components";
import "./styles.css"; // Import the generated CSS styles
import PromotedBrandsTable from "./tabels/promotedBrandsTable";
import PromotedProductsTable from "./tabels/promotedProductsTable";
import { DownNumberIcon, UpNumbersIcon } from "@/assets/icons";

export default function WireframeBillingPayment1OnePage() {
  return (
    <div className="flex flex-col flex-grow w-full min-h-full overflow-hidden xl:flex-row">
      <div className="flex flex-col flex-grow min-h-full gap-6 py-6 xl:gap-3 2xl:gap-6 xl:flex-row">
        <PRogfile />
        <div className="w-full overflow-hidden">
          <Metrics />
          <Tabels />
          <Notes />
        </div>
      </div>
    </div>
  );
}

const Notes = () => {
  return (
    <div className="px-2 mt-6">
      <h4 className="text-[23px] font-medium text-black-900">
        Notes{" "}
        <span className="text-base text-gray-500">(Internal Use Only)</span>
      </h4>
      <div className="px-5 py-4 mt-4 bg-white-A700 rounded-xl ">
        <p className="text-base text-gray-500">
          sunt in culpa qui officia deserunt mollit anim id est laborum.in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut
        </p>
      </div>
    </div>
  );
};

const Tabels = () => {
  return (
    <div className="flex flex-col flex-grow gap-2 px-2 mt-6 2xl:flex-row ">
      <div className="flex-grow">
        <PromotedBrandsTable />
      </div>
      <div className="flex-grow">
        <PromotedProductsTable />
      </div>
    </div>
  );
};

const Metrics = () => {
  const items = [
    {
      id: 1,
      label: "Lifetime Sales",
      value: "$25,000",
      change: -10,
    },
    {
      id: 2,
      label: "Lifetime Commissions",
      value: "$25,000",
      change: -15,
    },
    {
      id: 3,
      label: "Commission %",
      value: "10%",
      change: 10,
    },
  ];
  return (
    <div className="flex flex-col flex-grow overflow-x-scroll sm:flex-row h-fit ">
      {items?.map((item, index) => {
        return (
          <div
            key={index}
            className=" w-full p-2 lg:w-1/2 min-[1920px]:w-1/4 h-fit   "
          >
            <div className="bg-white-A700  2xl:py-10 py-5    3xl:px-11 2xl:px-6 px-6 rounded-[20px] !max-w-none">
              <div className="priceBox">
                <p className="text-xs lg:text-base 2xl:text-xl 3xl:text-2xl whitespace-nowrap">
                  {item?.label}
                </p>
                <h2 className="3xl:text-[50px] xl:text-[40px] font-bold text-2xl leading-none">
                  {item?.value}
                </h2>
                <span
                  style={{
                    whiteSpace: "nowrap",
                  }}
                  className="flex items-center gap-1"
                >
                  {item?.change > 0 ? <UpNumbersIcon /> : <DownNumberIcon />}
                  <p className="text-[12px]">
                    <span className="text-yellow-900"> {item?.change}%</span>
                    This month
                  </p>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const PRogfile = () => {
  return (
    <div className="flex-grow h-fit 2xl:h-full px-6  w-full flex-shrink-0 bg-white-A700 xl:max-w-[400px] py-[50px] flex rounded-3xl">
      <div className="mx-auto 2xl:m-auto">
        <div className="ProfileBox">
          <div className="profile">
            <img src="/images/user.png" />
          </div>
          <h1 className="profileName">Mike Wazowski</h1>
          <div className="SocialBox">
            <p className="Social">
              <img src="/images/fb.png" />
            </p>
            <p className="Social">
              <img src="/images/instagram.png" />
            </p>
            <p className="Social">
              <img src="/images/tiktok.png" />
            </p>
            <p className="Social">
              <img src="/images/yt.png" />
            </p>
          </div>
          <div>
            <ul className="AddressBox">
              <li className="addressIcon">
                <span>
                  <img src="/images/phone.png" />
                </span>
                (205) 555-201
              </li>
              <li className="addressIcon">
                <span>
                  <img src="/images/email.png" />
                </span>
                mike@yahoo.com
              </li>
              <li className="addressIcon">
                <span>
                  <img src="/images/web.png" />
                </span>
                mikewazowski.com
              </li>
            </ul>
          </div>
        </div>
        <div className="PartnerShip">
          <div className="partnerLogo">
            <img src="/images/notes.png" className="partenerImg" />
          </div>
          <div className="partnershipText">
            <p>PartenerShip </p>
          </div>
        </div>
      </div>
    </div>
  );
};
