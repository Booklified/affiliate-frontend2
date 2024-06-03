import { SearchSVG } from "@/assets/images";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Link from "next/link";

function AffiliatesToolBar({
  title,
  subTitle,
}: {
  title: string;
  subTitle?: string;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const sort = searchParams.get("sort");
  const search = searchParams.get("search");

  const getLink = (e: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set("sort", e.toString());

    const search = current.toString();
    const query = search ? `?${search}` : "";
    const link = pathname + "/" + query;
    return link;
  };

  const sortLabel = sort; //?.split("_")[0];
  const sortItems = [
    {
      lable: "Newest",
      value: "newest",
    },
    {
      lable: "Oldest",
      value: "oldest",
    },
    {
      lable: "A-Z",
      value: "a-z",
    },
    {
      lable: "Z-A",
      value: "z-a",
    },
  ];

  const handleNavigate = ({ key, value }: { key: string; value: string }) => {
    const current = new URLSearchParams(searchParams);
    current.set(key, value);
    const search = current.toString();
    const url = pathname + search ? `?${search}` : "";
    return url;
  };

  return (
    <div className="flex flex-col justify-between w-full gap-6 md:flex-row">
      <div className="flex flex-wrap gap-1">
        <p className="text-xl font-medium text-black-900">{title}</p>
        <p className="text-xl font-medium text-yellow-900">{subTitle}</p>
      </div>

      <div className="flex flex-col items-end justify-end flex-grow w-full gap-2 ml-auto md:w-fit sm:flex-row">
        <div className="relative flex w-full px-5 pr-10 ml-auto overflow-hidden rounded-lg sm:w-fit bg-indigo-50 ">
          <span className="absolute -translate-y-1/2 right-3 top-1/2">
            <SearchSVG width={"20px"} height={"20px"} />
          </span>
          <input
            placeholder="Search"
            className="flex-grow w-full border-none h-[30px] !outline-none !focus:outline-none "
          />
        </div>
        <div className="relative min-w-[240px]   w-full sm:w-fit ">
          <Menu>
            <div className="relative w-full sm:max-w-[228px]">
              <MenuButton className="px-6 py-2 h-[30px] w-full bg-indigo-50 text-left rounded-lg">
                {sortLabel ? (
                  <div className="flex items-center gap-2 text-gray-500">
                    {" "}
                    Sort By:{" "}
                    <span className="capitalize text-black-900">
                      {sortLabel}
                    </span>
                  </div>
                ) : (
                  "Sort"
                )}
              </MenuButton>
            </div>
            <MenuItems
              anchor="bottom"
              className=" sm:w-[228px] px-2 py-2 space-y-1 rounded-b-lg shadow-lg bg-white-A700 w-full"
            >
              {sortItems?.map((item, index) => {
                return (
                  <MenuItem>
                    <Link
                      href={handleNavigate({
                        key: "sort",
                        value: `${item?.value}`,
                      })}
                      scroll={false}
                      className="flex items-center gap-2  hover:bg-light_green-100 py-2 px-4 rounded-lg  data-[focus]:bg-blue-100"
                    >
                      {item?.lable}
                    </Link>
                  </MenuItem>
                );
              })}
            </MenuItems>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default AffiliatesToolBar;
