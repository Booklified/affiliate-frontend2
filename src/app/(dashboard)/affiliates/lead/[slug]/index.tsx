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

export default function WireframeBillingPayment1OnePage() {
  return (
    <div className="flex flex-col flex-grow w-full min-h-full overflow-hidden xl:flex-row">
      <div className="flex flex-col flex-grow min-h-full gap-6 p-6 xl:flex-row">
        <PRogfile />
        <div className="w-full overflow-hidden">
          <Metrics />
          <Tabels />
          <Notes />
        </div>
      </div>
    </div>
  );
  return (
    <div className="flex items-center justify-center w-full p-10 ">
      <div className="flex parent">
        <div className="border-4 border-blue-700 profileSection">
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

        <div className="w-full border-4 border-red-900">
          <div className="priceSection">
            <div className="priceBox">
              <p className="subHeading">Lifetime Sales</p>
              <h2 className="heading">$25,000</h2>
              <p>
                <span className="TextSpan">10%</span> this month
              </p>
            </div>
          </div>

          <div className="border-4 border-red-700 productBrands">
            <div className="AdvBoxSection">
              <div className="ButtonBox">
                <p>1. ORCA Campaign Ad </p>
                <button className="FilledButton">Campaign Ad Group Link</button>
              </div>
              <div className="ButtonBox">
                <p>2.Natural Glo</p>
                <button className="FilledButton">Campaign Ad Group Link</button>
              </div>
              <div className="ButtonBox">
                <p>2.Natural Glo</p>
                <button className="FilledButton">Campaign Ad Group Link</button>
              </div>
            </div>
            {/* Entries and Pagination */}
            <div className="BottomContent">
              <div className="Entries">Showing 1 of 5 entries</div>
              <div className="Pagination">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
              </div>
            </div>
          </div>

          <div className="border-4 border-red-700 promoProducts">
            <div className="AdvBoxSection">
              <div className="ButtonBox">
                <p>1. ORCA Campaign Ad </p>
                <button className="BorderButton">Campaign Ad Group Link</button>
              </div>{" "}
              <div className="ButtonBox">
                <p>2. ORCA Campaign Ad </p>
                <button className="BorderButton">Campaign Ad Group Link</button>
              </div>{" "}
              <div className="ButtonBox">
                <p>3. Hideaway Murphy Beds </p>
                <button className="BorderButton">Campaign Ad Group Link</button>
              </div>
            </div>
            {/* Entries and Pagination */}
            <div className="BottomContent">
              <div className="Entries">Showing 1 of 5 entries</div>
              <div className="Pagination">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
              </div>
            </div>
          </div>
          <div className="border-4 border-red-700 productNotes">
            <p className="StyleParagraph">
              Mauris non tincidunt arcu. Donec dapibus pretium sem, sagittis
              sollicitudin odio interdum porta. Curabitur placerat viverra urna
              nec consectetur. Quisque placerat maximus dui. Mauris aliquet
              euismod eleifend. Ut porta tristique nulla ut tristique. Curabitur
              sodales lobortis risus, vel tristique lacus hendrerit nec. Sed
              pharetra, sapien eget bibendum suscipit, eros ex lobortis arcu,
              non varius tellus quam at neque.
            </p>
          </div>
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
    <div className="flex flex-col flex-grow gap-2 px-2 mt-6 2xl:flex-row">
      <div className="w-full 2xl:w-1/2">
        <PromotedBrandsTable />
      </div>
      <div className="w-full 2xl:w-1/2">
        <PromotedProductsTable />
      </div>
    </div>
  );
};

const Metrics = () => {
  const items = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ];
  return (
    <div className="flex flex-wrap flex-grow h-fit">
      {items?.map((item, index) => {
        return (
          <div
            key={index}
            className=" w-full p-2 lg:w-1/2 min-[1920px]:w-1/4 h-fit "
          >
            <div className="priceSection !max-w-none">
              <div className="priceBox">
                <p className="subHeading">Lifetime Sales</p>
                <h2 className="heading">$25,000</h2>
                <p>
                  <span className="TextSpan">10%</span> this month
                </p>
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
    <div className="flex-grow px-6  w-full flex-shrink-0 bg-white-A700 xl:max-w-[400px] py-[50px] flex rounded-3xl">
      <div className="m-auto ">
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
