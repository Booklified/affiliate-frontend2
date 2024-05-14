import { Img, Text, Button } from "./..";


const DateRange = () => {
    return (
           <div className="flex items-center sm:flex-col five-px-padding-wbg mt-6">
              <Text size="lg" as="p" className="!text-[12.77px] !font-normal">
                Date Range:
              </Text>
              <div className="ml-[13px] flex h-[33px] items-center bg-[url(/images/img_group_white_a700_33x228.svg)] bg-cover bg-no-repeat px-2.5 pb-[7px] pt-2.5 md:h-auto sm:ml-0">
                <div className="flex items-center gap-[7px]">
                  <Img src="img_calendar.svg"
                    width={14}
                    height={14}
                    alt="calendar"
                    className="h-[14px] w-[14px] self-start"
                    />
                  <Text size="lg" as="p" className="!text-[12.77px] !font-normal">
                    May 05, 2024 - Jun 05, 2024
                  </Text>
                </div>
              </div>
              <Text size="lg" as="p" className="ml-1.5 !text-[12.77px] !font-normal !text-gray-500 sm:ml-0">
                vs. May 05, 2024 - Jun 05, 2024
              </Text>
            </div>
    )
}

export {DateRange}