"use client";
import React, { useEffect } from "react";
import { Text } from "../Text";
import { Img } from "../Img";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

interface PaginationProps {
  total: number;
  siblings: number;
  limit?: number;
  setPage?: (e: number) => void;
  page?: number;
}

const TablePagination: React.FC<PaginationProps> = ({
  total,
  siblings,
  limit = 10,
  setPage,
  page,
}) => {
  const totalPages = Math.ceil(total / limit);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const currentPage = page ? page : Number(searchParams.get("page")) || 1;

  console.log("x");

  const handleSetPage = (e: number) => {
    if (setPage) {
      setPage(e);
    } else {
      const current = new URLSearchParams(Array.from(searchParams.entries()));
      current.set("page", e.toString());
      const search = current.toString();
      const query = search ? `?${search}` : "";
      const link = pathname + "/" + query;
      router.push(link, {
        scroll: false,
      });
    }
  };

  // useEffect(() => {
  //   if (currentPage > totalPages) {
  //     handleSetPage(1);
  //   }
  // }, [currentPage]);

  const range = (start: number, end: number) => {
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  };

  const generatePages = () => {
    const totalNumbers = siblings * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - siblings);
      const endPage = Math.min(totalPages - 1, currentPage + siblings);
      let pages: (number | string)[] = range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = ["...", ...extraPages, ...pages];
          break;
        }
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, "..."];
          break;
        }
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = ["...", ...pages, "..."];
          break;
        }
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  };

  return (
    <div className="flex w-full flex-col gap-[18px] md:w-full">
      <div className="h-px bg-blue_gray-100" />
      <div className="flex items-center justify-between gap-5">
        <Text as="p" className="self-start !text-[13.69px] !text-blue_gray-100">
          Showing {currentPage} of {totalPages} entries
        </Text>
        <div className="flex items-center">
          <Img
            src="img_arrow_left.svg"
            width={16}
            height={16}
            alt="arrowleft"
            className={`h-[16px] w-[16px] self-start ${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer"
            }`}
            onClick={() => {
              if (currentPage > 1) handleSetPage(currentPage - 1);
            }}
          />
          {generatePages().map((page, index) => (
            <div
              key={index}
              className={`ml-2 flex h-[16px] !w-[16px] flex-shrink-0  flex-col items-center self-start ${
                page === currentPage
                  ? "bg-[url(/images/img_group.svg)]"
                  : "bg-[url(/images/img_group_blue_gray_100.svg)]"
              } bg-cover bg-no-repeat p-px md:h-auto cursor-pointer`}
              onClick={() => {
                if (typeof page === "number") handleSetPage(page);
              }}
            >
              <Text size="md" as="p" className="!text-[11.06px]">
                {page}
              </Text>
            </div>
          ))}
          <Img
            src="img_clock_blue_gray_100.svg"
            width={16}
            height={16}
            alt="clock"
            className={`ml-2 h-[16px] w-[16px] self-start ${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer"
            }`}
            onClick={() => {
              if (currentPage < totalPages) handleSetPage(currentPage + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TablePagination;
