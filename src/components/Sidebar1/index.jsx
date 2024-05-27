import Link from "next/link";
import React from "react";
import { Menu, MenuItem, Sidebar, sidebarClasses } from "react-pro-sidebar";
import { Img } from "./..";
import { usePathname } from "next/navigation";

export default function Sidebar1({ ...props }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  const getIsCurrent = (item) => {
    return pathname.includes(item);
  };

  console.log("---pathname", pathname);
  return (
    <Sidebar
      {...props}
      width="346px !important"
      collapsedWidth="80px !important"
      collapsed={collapsed}
      rootStyles={{ [`.${sidebarClasses.container}`]: { gap: 83 } }}
      className={`${props.className} flex flex-col h-screen pt-[79px] pl-[23px] pr-[21px] gap-[83px] top-0 md:gap-[62px] md:pt-5 md:p-5 sm:gap-[41px] sm:px-5 bg-black-900 shadow-xs !sticky overflow-auto `}
    >
      <Img
        src="img_sidebar_logo.png"
        width={230}
        height={63}
        alt="sidebar logo"
        className="h-[63px] w-[230px] object-contain"
      />
      <Menu
        menuItemStyles={{
          button: {
            padding: "14px 14px 14px 21px",
            color: "#ffffff",
            fontWeight: 400,
            fontSize: "18px",
            gap: "17px",
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
            borderBottomLeftRadius: "15px",
            borderBottomRightRadius: "14px",
            [`&:hover, &.ps-active`]: {
              background:
                "linear-gradient(90deg, #ff3b2e,#fa372c,#d31d20,#bb0c19,#b30717)",
            },
          },
        }}
        className="self-stretch w-full"
      >
        <div className="flex h-[75vh] flex-col gap-3 justify-between">
          <div className="relative ">
            <div className="absolute w-full m-auto">
              <div className="flex flex-col gap-3 ">
                <Link
                  href="/"
                  style={{
                    background:
                      pathname === "/"
                        ? "linear-gradient(90deg, #FF3B2E 0%, #FA372C 5%, #D31D20 46%, #BB0C19 79%, #B30717 100%)"
                        : "",
                    borderRadius: "15px",
                  }}
                >
                  <MenuItem
                    icon={
                      <Img
                        src="home.svg"
                        width={24}
                        height={19}
                        alt="brand folder icon"
                        className="h-[24px] w-[19px]"
                      />
                    }
                  >
                    Dashboard
                    <RightChevron />
                  </MenuItem>
                </Link>
                <Link
                  href="/assets"
                  style={{
                    background: pathname?.includes("/assets")
                      ? "linear-gradient(90deg, #FF3B2E 0%, #FA372C 5%, #D31D20 46%, #BB0C19 79%, #B30717 100%)"
                      : "",
                    borderRadius: "15px",
                  }}
                >
                  <MenuItem
                    icon={
                      <Img
                        src="img_folder.svg"
                        width={24}
                        height={19}
                        alt="brand folder icon"
                        className="h-[24px] w-[19px]"
                      />
                    }
                  >
                    Brand Assets
                    <RightChevron />
                  </MenuItem>
                </Link>
                <Link
                  href="/campaigns"
                  style={{
                    background: pathname?.includes("/campaigns")
                      ? "linear-gradient(90deg, #FF3B2E 0%, #FA372C 5%, #D31D20 46%, #BB0C19 79%, #B30717 100%)"
                      : "",
                    borderRadius: "15px",
                  }}
                >
                  <MenuItem
                    icon={
                      <Img
                        src="img_vector_white_a700.svg"
                        width={24}
                        height={19}
                        alt="campaigns icon"
                        className="h-[24px] w-[19px]"
                      />
                    }
                  >
                    Campaigns
                    <RightChevron />
                  </MenuItem>
                </Link>
                <Link
                  href="/affiliates"
                  style={{
                    background: pathname?.includes("/affiliates")
                      ? "linear-gradient(90deg, #FF3B2E 0%, #FA372C 5%, #D31D20 46%, #BB0C19 79%, #B30717 100%)"
                      : "",
                    borderRadius: "15px",
                  }}
                >
                  <MenuItem
                    icon={
                      <Img
                        src="affiliate.svg"
                        width={24}
                        height={19}
                        alt="affiliates icon"
                        className="h-[24px] w-[19px]"
                      />
                    }
                  >
                    Affiliates
                    <RightChevron />
                  </MenuItem>
                </Link>
                <Link
                  href="/integrations"
                  style={{
                    background: pathname?.includes("/integrations")
                      ? "linear-gradient(90deg, #FF3B2E 0%, #FA372C 5%, #D31D20 46%, #BB0C19 79%, #B30717 100%)"
                      : "",
                    borderRadius: "15px",
                  }}
                >
                  <MenuItem
                    icon={
                      <Img
                        src="img_vector_white_a700_12x10.svg"
                        width={24}
                        height={19}
                        alt="integrations icon"
                        className="h-[24px] w-[19px]"
                      />
                    }
                  >
                    Integrations
                    <RightChevron />
                  </MenuItem>
                </Link>
                <Link
                  href="/billing"
                  style={{
                    background: pathname?.includes("/billing")
                      ? "linear-gradient(90deg, #FF3B2E 0%, #FA372C 5%, #D31D20 46%, #BB0C19 79%, #B30717 100%)"
                      : "",
                    borderRadius: "15px",
                  }}
                >
                  <MenuItem
                    icon={
                      <Img
                        src="Vector (4).svg"
                        width={24}
                        height={19}
                        alt="integrations icon"
                        className="h-[24px] w-[19px]"
                      />
                    }
                  >
                    Billing & Payment
                    <RightChevron />
                  </MenuItem>
                </Link>
                <Link
                  href="/knowledge"
                  style={{
                    background: pathname?.includes("/knowledge")
                      ? "linear-gradient(90deg, #FF3B2E 0%, #FA372C 5%, #D31D20 46%, #BB0C19 79%, #B30717 100%)"
                      : "",
                    borderRadius: "15px",
                  }}
                >
                  <MenuItem
                    icon={
                      <Img
                        src="img_vector_white_a700_15x13.svg"
                        width={24}
                        height={19}
                        alt="knowledge icon"
                        className="h-[24px] w-[19px]"
                      />
                    }
                  >
                    Knowledge Base
                    <RightChevron />
                  </MenuItem>
                </Link>
                <Link
                  href="/products"
                  style={{
                    background: pathname?.includes("/products")
                      ? "linear-gradient(90deg, #FF3B2E 0%, #FA372C 5%, #D31D20 46%, #BB0C19 79%, #B30717 100%)"
                      : "",
                    borderRadius: "15px",
                  }}
                >
                  <MenuItem
                    icon={
                      <Img
                        src="img_vector_white_a700_10x20.svg"
                        width={24}
                        height={19}
                        alt="products icon"
                        className="h-[24px] w-[19px] flex"
                      />
                    }
                  >
                    Products
                    <RightChevron />
                  </MenuItem>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Menu>
    </Sidebar>
  );
}

const RightChevron = () => (
  <svg
    width="11"
    height="19"
    viewBox="0 0 11 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.42969 17.12C1.42969 17.01 1.4697 16.91 1.5597 16.83L9.50971 9.57L1.54969 1.87999C1.38969 1.72999 1.38969 1.48 1.54969 1.32C1.69969 1.16 1.94969 1.16 2.10969 1.32L10.3697 9.29998C10.4497 9.36998 10.4897 9.48001 10.4897 9.58001C10.4897 9.69001 10.4397 9.79998 10.3597 9.86998L2.09971 17.41C1.93971 17.56 1.68971 17.55 1.53971 17.38C1.46971 17.3 1.4397 17.21 1.4397 17.11L1.42969 17.12Z"
      fill="white"
      stroke="white"
      stroke-miterlimit="10"
    />
  </svg>
);
