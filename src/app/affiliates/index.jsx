"use client";
import Wrapper from "@/components/Wrapper";
import { createColumnHelper } from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import React from "react";
import { CloseSVG } from "../../assets/images";
import { Button, Heading, Img, Input, SelectBox, Text } from "../../components";
import { ReactTable } from "../../components/ReactTable";
import Sidebar11 from "../../components/Sidebar11";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const tableData = [
  {
    affiliatesname: "Jane",
    channel: "Microsoft",
    associated: "Microsoft",
    phonenumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    lifetimesales: "$1,200",
  },
  {
    affiliatesname: "Floyd Miles",
    channel: "Yahoo",
    associated: "Yahoo",
    phonenumber: "(205) 555-100",
    email: "floyd@yahoo.com",
    lifetimesales: "$200",
  },
  {
    affiliatesname: "Ronald Richards",
    channel: "Adobe",
    associated: "Adobe",
    phonenumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    lifetimesales: "$5,200",
  },
  {
    affiliatesname: "Marvin McKinney",
    channel: "Tesla",
    associated: "Tesla",
    phonenumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    lifetimesales: "$3,000",
  },
  {
    affiliatesname: "Jerome Bell",
    channel: "Google",
    associated: "Google",
    phonenumber: "(629) 555-0129",
    email: "jerome@google.com",
    lifetimesales: "$100",
  },
  {
    affiliatesname: "Kathryn Murphy",
    channel: "Microsoft",
    associated: "Microsoft",
    phonenumber: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    lifetimesales: "$11,000",
  },
  {
    affiliatesname: "Jacob Jones",
    channel: "Yahoo",
    associated: "Yahoo",
    phonenumber: "(208) 555-0112",
    email: "jacob@yahoo.com",
    lifetimesales: "$1,000",
  },
  {
    affiliatesname: "Kristin Watson",
    channel: "Facebook",
    associated: "Facebook",
    phonenumber: "(104) 555-0127",
    email: "kristin@facebook.com",
    lifetimesales: "$100",
  },
];

export default function WireframeAffiliatesOnePage() {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const router = useRouter();
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("affiliatesname", {
        cell: (info) => (
          <Text
            as="p"
            className="!text-[13.69px] cursor-pointer"
            onClick={() => {
              router.push("/profile");
            }}
          >
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="px-px pb-2.5 !text-[13.69px] !text-gray-500">
            Affiliates Name
          </Text>
        ),
        meta: { width: "251px" },
      }),
      tableColumnHelper.accessor("channel", {
        cell: (info) => (
          <Text
            as="p"
            className="!text-[13.69px] cursor-pointer"
            onClick={() => {
              router.push("/profile");
            }}
          >
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="pb-2.5 pt-px !text-[13.69px] !text-gray-500">
            Channel
          </Text>
        ),
        meta: { width: "251px" },
      }),
      tableColumnHelper.accessor("associated", {
        cell: (info) => (
          <Text
            as="p"
            className="!text-[13.69px] cursor-pointer"
            onClick={() => {
              router.push("/profile");
            }}
          >
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text
            as="p"
            className="pb-[9px] pt-px !text-[13.69px] !text-gray-500"
          >
            Associated Brand(s)
          </Text>
        ),
        meta: { width: "251px" },
      }),
      tableColumnHelper.accessor("phonenumber", {
        cell: (info) => (
          <Text
            as="p"
            className="!text-[13.69px] cursor-pointer"
            onClick={() => {
              router.push("/profile");
            }}
          >
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="pb-2.5 pt-px !text-[13.69px] !text-gray-500">
            Phone Number
          </Text>
        ),
        meta: { width: "252px" },
      }),
      tableColumnHelper.accessor("email", {
        cell: (info) => (
          <Text
            as="p"
            className="!text-[13.69px] cursor-pointer"
            onClick={() => {
              router.push("/profile");
            }}
          >
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="pb-2.5 pt-px !text-[13.69px] !text-gray-500">
            Email
          </Text>
        ),
        meta: { width: "251px" },
      }),
      tableColumnHelper.accessor("lifetimesales", {
        cell: (info) => (
          <Heading as="h2" className="!text-[21.45px]">
            {info?.getValue?.()}
          </Heading>
        ),
        header: (info) => (
          <Text as="p" className="pb-2.5 !text-[13.69px] !text-gray-500">
            Lifetime Sales
          </Text>
        ),
        meta: { width: "149px" },
      }),
    ];
  }, []);

  return (
    <Wrapper>
      <div className="flex flex-1 flex-col gap-9 md:self-stretch">
        <div>
          <div className="flex flex-col gap-11">
            <div className="flex items-start justify-between gap-5 md:flex-col">
              <div className="flex flex-wrap items-center gap-2.5 md:p-5">
                <Heading
                  size="s"
                  as="h1"
                  className="!text-[40.71px] !text-black-900"
                >
                  Recruit New Affiliates
                </Heading>
                <Text size="3xl" as="p" className="self-end !text-gray-500">
                  See Knowledge Base For More Details on Best Practices
                </Text>
              </div>
              <div className="mb-2 flex w-[18%] items-center justify-center gap-[19px] md:w-full md:p-5">
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
              </div>
            </div>
            <div className="flex gap-[22px] md:flex-col">
              <div className="flex w-full items-center justify-center gap-5 rounded-[20px] bg-yellow-900 px-[15px] pb-4 pt-[15px] md:p-5">
                <Button shape="circle" className="w-[50px] !rounded-[25px]">
                  <Img src="img_vector_yellow_900.svg" width={50} height={50} />
                </Button>
                <div className="flex flex-col items-start">
                  <Text
                    size="9xl"
                    as="p"
                    className="!text-[22.82px] !text-white-A700"
                  >
                    Lead
                  </Text>
                  <Text
                    size="9xl"
                    as="p"
                    className="!text-[22.82px] !text-white-A700"
                  >
                    Generation
                  </Text>
                </div>
              </div>
              <div className="flex w-full items-center justify-center gap-5 rounded-[20px] bg-white-A700 px-[15px] pb-[13px] pt-[15px] md:p-5">
                <Button shape="circle" className="w-[50px] !rounded-[25px]">
                  <Img src="img_user_white_a700.svg" width={50} height={50} />
                </Button>
                <div className="flex flex-col items-start">
                  <Text size="9xl" as="p" className="!text-[22.82px]">
                    Contact
                  </Text>
                  <Text size="9xl" as="p" className="!text-[22.82px]">
                    Templates
                  </Text>
                </div>
              </div>
              <div className="flex w-full items-center justify-center gap-5 rounded-[20px] bg-white-A700 px-[18px] pb-[13px] pt-[18px] md:p-5">
                <Button
                  shape="circle"
                  className="w-[50px] self-start !rounded-[25px]"
                >
                  <Img src="img_television.svg" width={50} height={50} />
                </Button>
                <div className="flex flex-col items-start">
                  <Text size="9xl" as="p" className="!text-[22.82px]">
                    Agreement
                  </Text>
                  <Text size="9xl" as="p" className="!text-[22.82px]">
                    Templates
                  </Text>
                </div>
              </div>
              <div className="flex w-full items-start justify-center gap-5 rounded-[20px] bg-white-A700 p-[18px] md:p-5">
                <div className="flex flex-col items-center rounded-[25px] bg-yellow-900 p-[13px]">
                  <Img
                    src="img_call.svg"
                    width={23}
                    height={23}
                    alt="call"
                    className="h-[23px] w-[23px]"
                  />
                </div>
                <Text size="9xl" as="p" className="mt-2.5 !text-[22.82px]">
                  Onboarding
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-[20px] bg-white-A700 px-5 pb-[17px] pt-5">
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between gap-5 md:flex-col">
              <Text
                size="8xl"
                as="p"
                className="self-start !text-[20.21px] !font-medium"
              >
                <span className="text-black-900">All Affiliates&nbsp;</span>
                <span className="text-yellow-900">Active Members</span>
              </Text>
              <div className="flex w-[35%] justify-center gap-5 md:w-full sm:flex-col">
                <Input
                  size="xs"
                  shape="square"
                  name="search"
                  placeholder={`Search`}
                  value={searchBarValue}
                  onChange={(e) => setSearchBarValue(e)}
                  suffix={
                    <div className="flex h-[10px] w-[10px] items-center justify-center">
                      {searchBarValue?.length > 0 ? (
                        <CloseSVG
                          onClick={() => setSearchBarValue("")}
                          height={10}
                          width={10}
                        />
                      ) : (
                        <Img
                          src="img_rewind.svg"
                          width={10}
                          height={10}
                          alt="rewind"
                          className="h-[10px] w-[10px] cursor-pointer"
                        />
                      )}
                    </div>
                  }
                  className="flex-grow gap-[35px]"
                />
                <SelectBox
                  shape="square"
                  indicator={
                    <Img
                      src="img_arrowdown_black_900.svg"
                      width={10}
                      height={5}
                      alt="arrow_down"
                      className="h-[5px] w-[10px]"
                    />
                  }
                  name="sortbynewest"
                  placeholder={`Sort by: Newest`}
                  options={dropDownOptions}
                  className="w-[38%] gap-px text-gray-500 sm:w-full sm:pr-5"
                />
              </div>
            </div>
            <ReactTable
              size="xs"
              bodyProps={{ className: "" }}
              headerProps={{ className: "flex-wrap" }}
              rowDataProps={{ className: "flex-wrap" }}
              columns={tableColumns}
              data={tableData}
            />
            <div className="flex items-center justify-between gap-5">
              <Text
                as="p"
                className="self-start !text-[13.69px] !text-blue_gray-100"
              >
                Showing 1 of 5 entries
              </Text>
              <div className="flex w-[11%] items-center justify-center self-end">
                <Img
                  src="img_arrow_left.svg"
                  width={16}
                  height={16}
                  alt="arrowleft"
                  className="h-[16px] w-[16px] self-start"
                />
                <div className="ml-2 flex h-[16px] w-[15%] flex-col items-center self-start bg-[url(/images/img_group.svg)] bg-cover bg-no-repeat p-px md:h-auto">
                  <Text size="md" as="p" className="!text-[11.06px]">
                    1
                  </Text>
                </div>
                <div className="ml-2 flex h-[16px] w-[15%] flex-col items-center self-start bg-[url(/images/img_group_blue_gray_100.svg)] bg-cover bg-no-repeat p-px md:h-auto">
                  <Text size="md" as="p" className="!text-[11.06px]">
                    2
                  </Text>
                </div>
                <div className="ml-2 flex h-[16px] w-[15%] flex-col items-center self-start bg-[url(/images/img_group_blue_gray_100.svg)] bg-cover bg-no-repeat p-px md:h-auto">
                  <Text size="md" as="p" className="!text-[11.06px]">
                    3
                  </Text>
                </div>
                <Text
                  size="md"
                  as="p"
                  className="ml-[11px] self-end !text-[11.06px]"
                >
                  ...
                </Text>
                <div className="ml-[11px] flex h-[16px] w-[15%] flex-col items-center self-start bg-[url(/images/img_group_blue_gray_100.svg)] bg-cover bg-no-repeat p-px md:h-auto">
                  <Text size="md" as="p" className="!text-[11.06px]">
                    5
                  </Text>
                </div>
                <Img
                  src="img_clock.svg"
                  width={16}
                  height={16}
                  alt="clock"
                  className="ml-2 h-[16px] w-[16px] self-start"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
