"use client";
import Wrapper from "@/components/Wrapper";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";
import "./styles.css"; // Import the generated CSS styles
import userImage from "../../../public/images/user.png";
import { Button, Heading, Img, SelectBox, Text } from "../../components";


export default function WireframeBillingPayment1OnePage() {
  return (
    <Wrapper>
      <div className="flex flex-1 flex-col items-end md:self-stretch">
      {/* <div className="flex w-[18%] items-center gap-[19px] md:w-full md:p-5">
          <Button shape="round" className="w-[51px] shadow-sm">
            <Img src="img_vector.svg" width={51} height={51} />
          </Button>
          <Text size="6xl" as="p">
            Mike Wazowski
          </Text>
          <Img
            src="img_lock.svg"
            width={51}
            height={51}
            alt="lock"
            className="h-[51px] w-[51px]"
          />
        </div> */}
        <div className="flex w-full justify-center items-center p-10">
          <div className="parent">
            <div className="profileSection">
              <div className="ProfileBox">
                <div className="profile">
                  <img src="/images/user.png" />
                </div>
                <h1 className="profileName">Mike Wazowski</h1>
                <div className="SocialBox">
                  <p className="Social"><img src="/images/fb.png" /></p>
                  <p className="Social"><img src="/images/instagram.png" /></p>
                  <p className="Social"><img src="/images/tiktok.png" /></p>
                  <p className="Social"><img src="/images/yt.png" /></p>
                </div>
                <div>
                  <ul className="AddressBox">
                    <li className="addressIcon"><span><img src="/images/phone.png" /></span>(205) 555-201</li>
                    <li className="addressIcon"><span><img src="/images/email.png" /></span>mike@yahoo.com</li>
                    <li className="addressIcon"><span><img src="/images/web.png" /></span>mikewazowski.com</li>
                  </ul>
                </div>
              </div>
              <div className="PartnerShip">
                <div className="partnerLogo">
                  <img src="/images/notes.png" className="partenerImg"/>
                </div>
                <div className="partnershipText">
                  <p>PartenerShip </p>
                </div>
              </div>
            </div>

            <div className="priceSection">
              <div className="priceBox">
                <p className="subHeading">Lifetime Sales</p>
                <h2 className="heading">$25,000</h2>
                <p>
                  <span className="TextSpan">10%</span> this month
                </p>
              </div>
            </div>

            <div className="priceSection2">
            <div className="priceBox">
                <p className="subHeading">Lifetime Sales</p>
                <h2 className="heading">$25,000</h2>
                <p>
                  <span className="TextSpan">10%</span> this month
                </p>
              </div>
            </div>

            <div className="priceSection3">
            <div className="priceBox">
                <p className="subHeading">Lifetime Sales</p>
                <h2 className="heading">$25,000</h2>
                <p>
                  <span className="TextSpan">10%</span> this month
                </p>
              </div>
            </div>

            <div className="productBrands">
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

            <div className="promoProducts">
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
            <div className="productNotes">
              <p className="StyleParagraph">
                Mauris non tincidunt arcu. Donec dapibus pretium sem, sagittis
                sollicitudin odio interdum porta. Curabitur placerat viverra
                urna nec consectetur. Quisque placerat maximus dui. Mauris
                aliquet euismod eleifend. Ut porta tristique nulla ut tristique.
                Curabitur sodales lobortis risus, vel tristique lacus hendrerit
                nec. Sed pharetra, sapien eget bibendum suscipit, eros ex
                lobortis arcu, non varius tellus quam at neque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
