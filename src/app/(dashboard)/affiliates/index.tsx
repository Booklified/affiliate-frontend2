"use client";
import Wrapper from "@/components/Wrapper";
import {
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { CloseSVG } from "../../../assets/images";
import {
  Button,
  Heading,
  Img,
  Input,
  SelectBox,
  Text,
} from "../../../components";
import { ReactTable } from "../../../components/ReactTable";
import Sidebar11 from "../../../components/Sidebar11";
import Link from "next/link";
import {
  leadGenerationsData,
  contactTemplatesData,
  agreementTemplatesData,
  onboardingData,
  AgreementTemplateType,
  ContactTemplateType,
  LeadGenerationType,
  OnboardingType,
  agreementTemplateColumns,
  contactTemplateColumns,
  leadGenerationColumns,
  onboardingColumns,
} from "./affiliatesColumns";
import LeadGenerationTable from "./(tables)/lead-generation";
import ContactTemplatesTable from "./(tables)/contact-templates";
import AgreementTemplateTable from "./(tables)/agreement-templates";
import OnboardingTable from "./(tables)/onboarding";
import { it } from "node:test";

export default function WireframeAffiliatesOnePage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const view = searchParams.get("view");

  const list = [
    {
      id: 1,
      text: "Lead Generation",
      img: "img_vector_yellow_900.svg",
      param: "lead-generation",
    },
    {
      id: 2,
      text: "Contact Templates",
      img: "img_user_white_a700.svg",
      param: "contact-templates",
    },
    {
      id: 3,
      text: "Agreement Templates",
      img: "img_television.svg",
      param: "agreement-templates",
    },
    {
      id: 4,
      text: "Onboarding",
      img: "img_call.svg",
      param: "onboarding",
    },
  ];

  const getLink = (e: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set("view", e.toString());
    current.set("page", "1");

    const search = current.toString();
    const query = search ? `?${search}` : "";
    const link = pathname + "/" + query;
    return link;
  };

  useEffect(() => {
    if (!view) {
      router.push(getLink("lead-generation"));
    }
  }, []);

  return (
    <div className="flex flex-col w-full overflow-x-hidden gap-9 md:self-stretch">
      <div>
        <div className="flex flex-col gap-11">
          <div className="flex flex-wrap ">
            {list.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={getLink(item.param)}
                  className="w-full p-2 sm:w-1/2 xl:w-1/4"
                >
                  <div
                    key={index}
                    className={`flex w-full items-center justify-center gap-5 rounded-[20px]  px-[15px] pb-4 pt-[15px] md:p-5
                    ${
                      view == item.param
                        ? "bg-yellow-900 text-white-A700"
                        : "bg-white-A700 text-black-900"
                    }
                    `}
                  >
                    <Button
                      color="white_A700"
                      shape="circle"
                      className="w-[50px] !rounded-[25px]"
                    >
                      <Img
                        src="img_vector_yellow_900.svg"
                        width={50}
                        height={50}
                      />
                    </Button>
                    <div className="flex flex-col items-start">
                      <Text
                        size="9xl"
                        as="p"
                        className={`!text-[22.82px]  ${
                          view == item?.param
                            ? "!text-white-A700"
                            : "text-black-900"
                        } `}
                      >
                        {item.text.split(" ")[0]}
                      </Text>
                      <Text
                        size="9xl"
                        as="p"
                        className={`!text-[22.82px]  ${
                          view == item?.param
                            ? "!text-white-A700"
                            : "text-black-900"
                        } `}
                      >
                        {item.text.split(" ")[1]}
                      </Text>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {view == "lead-generation" && <LeadGenerationTable />}
      {view == "contact-templates" && <ContactTemplatesTable />}
      {view == "agreement-templates" && <AgreementTemplateTable />}
      {view == "onboarding" && <OnboardingTable />}
    </div>
  );
}
