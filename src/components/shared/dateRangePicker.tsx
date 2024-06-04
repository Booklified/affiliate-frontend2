"use client";
import React, { useEffect } from "react";
import {
  DateRangePicker,
  Radio,
  RadioGroup,
  Button,
  ButtonGroup,
  cn,
  PopoverContent,
  // CalendarDate,
} from "@nextui-org/react";
import {
  today,
  startOfWeek,
  startOfMonth,
  endOfWeek,
  endOfMonth,
  getLocalTimeZone,
} from "@internationalized/date";

import { useLocale, useDateFormatter } from "@react-aria/i18n";
import { date } from "zod";
import { format } from "date-fns";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const formatRangeTo = (start: Date, end: Date) => {
  return `${format(start, "MMM dd, yyyy")} - ${format(end, "MMM dd, yyyy")}`;
};

export default function MyDateRangePicker() {
  let defaultDate = {
    start: today(getLocalTimeZone()),
    end: today(getLocalTimeZone()).add({ days: 7 }),
  };
  let [value, setValue] = React.useState(defaultDate);

  let { locale } = useLocale();
  let formatter = useDateFormatter({ dateStyle: "full" });
  let now = today(getLocalTimeZone());
  let nextWeek = {
    start: startOfWeek(now.add({ weeks: 1 }), locale),
    end: endOfWeek(now.add({ weeks: 1 }), locale),
  };
  let nextMonth = {
    start: startOfMonth(now.add({ months: 1 })),
    end: endOfMonth(now.add({ months: 1 })),
  };

  let lastMonth = {
    start: startOfMonth(now.add({ months: -1 })),
    end: endOfMonth(now.add({ months: -1 })),
  };
  let last3Months = {
    start: startOfMonth(now.add({ months: -3 })),
    end: endOfMonth(now),
  };
  let last6Months = {
    start: startOfMonth(now.add({ months: -6 })),
    end: endOfMonth(now),
  };
  let lastYear = {
    start: startOfMonth(now.add({ years: -1 })),
    end: endOfMonth(now),
  };
  let monthToDate = {
    start: startOfMonth(now),
    end: now,
  };

  // let defaultDate = {
  //   start: today(getLocalTimeZone()),
  //   end: today(getLocalTimeZone()).add({ days: 7 }),
  // };
  // let [value, setValue] = React.useState<{
  //   start: CalendarDate;
  //   end: CalendarDate;
  // }>(defaultDate);

  const searchParams = useSearchParams();
  const start = searchParams.get("start");
  const end = searchParams.get("end");

  const pathname = usePathname();
  const router = useRouter();

  const handleNavigate = () => {
    const current = new URLSearchParams(searchParams.toString());
  };

  /* Expected 3-5 arguments, but got 1.ts(2554)
types.d.ts(167, 31): An argument for 'month' was not provided.
(alias) new CalendarDate(year: number, month: number, day: number): CalendarDate (+3 overloads)
import CalendarDate
A CalendarDate represents a date without any time components in a specific calendar system.

 */

  /* TypeError: _nextui_org_react__WEBPACK_IMPORTED_MODULE_6__.CalendarDate is not a constructor */

  //todo: correctly set the date range from the url on initial load
  // useEffect(() => {
  //   if (start && end) {
  //     const startDate = new Date(start);
  //     const endDate = new Date(end);
  //     //   setValue({
  //     //   start: new CalendarDate(
  //     //     startDate.getFullYear(),
  //     //     startDate.getMonth() + 1, // Month is zero-based in JavaScript Date
  //     //     startDate.getDate()
  //     //   ),
  //     //   end: new CalendarDate(
  //     //     endDate.getFullYear(),
  //     //     endDate.getMonth() + 1, // Month is zero-based in JavaScript Date
  //     //     endDate.getDate()
  //     //   ),
  //     // });
  //   } else {
  //     setValue(defaultDate);
  //     const current = new URLSearchParams(searchParams.toString());
  //     current.set(
  //       "start",
  //       format(value.start.toDate(getLocalTimeZone()), "yyyy-MM-dd")
  //     );

  //     current.set(
  //       "end",
  //       format(value.end.toDate(getLocalTimeZone()), "yyyy-MM-dd")
  //     );

  //     const search = current.toString();

  //     const url = search ? `${pathname}?${search}` : pathname;
  //     router.push(url);
  //   }
  // }, []);

  // let { locale } = useLocale();

  // let now = today(getLocalTimeZone());

  // console.log(
  //   "value",
  //   value?.start?.toDate(getLocalTimeZone()),
  //   value?.end?.toDate(getLocalTimeZone())
  // );

  const getIsCurrentPreset = (preset: any) => {
    console.log(preset);
    return true;
  };

  return (
    <div className="flex flex-col gap-4 overflow-hidden picker">
      <DateRangePicker
        // startContent={<div></div>}
        popoverProps={{
          placement: "bottom-start",
          shouldFlip: false,
          shouldUpdatePosition: false,
          shouldBlockScroll: true,
        }}
        calendarWidth={384}
        classNames={{
          base: "max-w-[228px] flex flex-col ",
          helperWrapper: "bg-blue-500 max-w-[384px] flex",
          popoverContent:
            "bg-transparent max-w-[384px] flex -translate-y-14 -translate-x-4  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border-none",
          segment: " max-w-[384px] flex",
          calendar:
            " max-w-[384px] bg-transparent flex MyCalendar relative pt-10",
          calendarContent: "bg-white-A700",
        }}
        className="relative "
        CalendarTopContent={
          <div className="  py-4 items-center gap-2  justify-center bg-white-A700 px-1 pb-2 pt-3 max-w-[143px] flex flex-col  [&>button]:text-default-500 [&>button]:border-default-200/60">
            <div className="absolute left-0 right-0 h-10 -top-0 ">
              <div className="flex items-center h-full px-2 shadow-t-xl  bg-white-A700 w-full max-w-[230px] rounded-tr-lg ">
                <p>
                  {" "}
                  {value
                    ? formatter.formatRange(
                        value.start.toDate(getLocalTimeZone()),
                        value.end.toDate(getLocalTimeZone())
                      )
                    : "--"}
                </p>
              </div>
            </div>
            <p className="text-[9px] text-[#8f8f8f] mr-auto">Presets</p>

            {/* Last Month */}
            <PresetButton
              selected={getIsCurrentPreset(lastMonth)}
              onClick={() => setValue(nextWeek)}
            >
              Last Month
            </PresetButton>

            {/* This week */}
            <PresetButton
              selected={getIsCurrentPreset({
                start: now,
                end: now.add({ days: 7 }),
              })}
              onClick={() =>
                setValue({
                  start: now,
                  end: now.add({ days: 7 }),
                })
              }
            >
              This week
            </PresetButton>
            {/* Last 3 Months */}
            <PresetButton
              selected={getIsCurrentPreset(last3Months)}
              onClick={() => setValue(last3Months)}
            >
              Last 3 Months
            </PresetButton>
            {/* Last 6 Months */}
            <PresetButton
              selected={getIsCurrentPreset(last6Months)}
              onClick={() => setValue(last6Months)}
            >
              Last 6 Months
            </PresetButton>
            {/* Last Year */}
            <PresetButton
              selected={getIsCurrentPreset(lastYear)}
              onClick={() => setValue(lastYear)}
            >
              Last Year
            </PresetButton>
            {/* Month to Date */}
            <PresetButton
              selected={getIsCurrentPreset(monthToDate)}
              onClick={() => setValue(monthToDate)}
            >
              Month to Date
            </PresetButton>
          </div>
        }
        selectorButtonProps={{
          size: "sm",
          variant: "light",
          radius: "none",
          isIconOnly: true,
        }}
        calendarProps={{
          focusedValue: value.start,
          onFocusChange: (val) => setValue({ ...value, start: val }),

          nextButtonProps: {
            variant: "bordered",
            className: "rounded-md",
          },
          prevButtonProps: {
            variant: "bordered",
            className: "rounded-md",
          },
          color: "success",

          showShadow: false,
        }}
        radius="none"
        value={value}
        onChange={setValue}
        // label="Event date"
        // need to only have past dates
        // minValue={today(getLocalTimeZone()).add({ years: -12 })}
        // maxValue={today(getLocalTimeZone()).add({ days: -1 })}
      />
    </div>
  );
}

const PresetButton = (props: any) => {
  return (
    <button
      className={`w-full  h-7 flex items-center justify-center p-1 rounded-lg border ${
        props?.selected
          ? "border-transparent bg-light_green-100"
          : "border-black-900"
      } text-black-900 text-[10px] `}
    >
      {props.children}
    </button>
  );
};
