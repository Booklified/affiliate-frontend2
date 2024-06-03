"use client";

import React, { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Drawer, Layout, Menu, theme } from "antd";
import SideNav from "./sideNav";

const { Header, Sider, Content } = Layout;

const Container = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobileDrawarOpen, setIsMobileDrawarOpen] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {}, [collapsed]);
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Layout className="relative flex h-screen">
        {/* Large screens sidebar */}
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          className={`hidden px-4 pt-10 bg-black-900 lg:block  
        transition-all duration-300 ease-in-out
        ${collapsed ? "sideBar_collapsed" : "sideBar 2xl:!min-w-[344px]"} `}
          width={"fit-content"}
          collapsedWidth={"85px"}
        >
          <div></div>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className={`absolute z-50 top-4 right-4 transition-transform duration-300 ease-in-out transform  ${
              collapsed ? "rotate-180" : ""
            } `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <div className="flex mb-[60px] justify-center ">
            {<CollapsedLogo />}
            {!collapsed && (
              <span className="text-[52px] font-bold text-white-A700 ">
                toocan
              </span>
            )}
          </div>

          <SideNav collapsed={collapsed} />
        </Sider>
        {/* small screens sidebar */}

        <div
          style={{
            background: "#030024",
            maxWidth: "344px",
          }}
        >
          <Drawer
            placement={"left"}
            onClose={() => setIsMobileDrawarOpen(false)}
            open={isMobileDrawarOpen}
            style={{
              background: "#030024",
              // maxWidth: "344px",
              padding: 0,
            }}
            closeIcon={null}
          >
            <div className="flex  mb-[60px] justify-center ">
              {<CollapsedLogo />}
              {
                <span className="text-[52px] font-bold text-white-A700">
                  toocan
                </span>
              }
            </div>

            <SideNav
              handleClick={() => setIsMobileDrawarOpen(false)}
              collapsed={false}
            />
          </Drawer>
        </div>
        <Layout className="flex-grow !pt-0">
          <Content>
            <div className="flex flex-col w-full h-full pt-0 pb-5 overflow-x-hidden bg-indigo-50">
              <div className="flex justify-end w-full p-2 pb-0">
                {" "}
                <button
                  onClick={() => setIsMobileDrawarOpen(true)}
                  className="z-50 transition-transform duration-300 ease-in-out transform lg:hidden "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="black"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              </div>
              {children}
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

const CollapsedLogo = () => (
  <svg
    width="55"
    height="57"
    viewBox="0 0 55 57"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
  >
    <path
      d="M50.82 42.23C50.22 40.17 49.08 38.16 49.08 38.16C49.08 38.16 43.56 46.75 43.21 47.25C42.86 47.75 42.75 48.17 43.07 48.63C43.39 49.09 44.48 50.25 45.76 51.34C47.04 52.43 48.82 53.32 49.83 53.62C50.83 53.92 51.04 53.62 51.04 53.62C51.04 53.62 51.29 52.35 51.72 49.82C52.15 47.28 51.42 44.3 50.82 42.24V42.23Z"
      fill="white"
      stroke="white"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M35.17 50.79C35.17 50.79 36.15 49.44 36.99 48.32C37.83 47.2 37.64 47 37.64 47H34.52C34.65 47.18 34.58 47.25 34.46 47.41C34.34 47.58 32.38 50.32 32.38 50.32C30.94 50.07 29.84 49.94 28.93 49.91C27.3 49.86 26.25 50.14 24.8 50.69C22.55 51.54 20.79 53.41 20.79 53.41L33.13 53.32L38.69 53.28C37.23 51.27 35.16 50.79 35.16 50.79H35.17Z"
      fill="white"
      stroke="white"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M37.09 23.05C37.09 23.05 37.84 17.93 35.9 12.7C33.96 7.48001 27.71 2.79001 20.58 3.09001C13.46 3.39001 9.35004 7.16001 7.00004 9.99001C6.79004 10.24 6.59004 10.51 6.40004 10.8C6.34004 10.89 6.28004 10.98 6.22004 11.07C6.09004 11.27 5.96004 11.48 5.84004 11.69C5.81004 11.74 5.78004 11.79 5.75004 11.84C5.72004 11.89 5.70003 11.95 5.67003 12.01C5.52003 12.29 5.37004 12.58 5.24004 12.88C5.21004 12.96 5.17004 13.03 5.13004 13.11C4.97004 13.48 4.82003 13.87 4.69003 14.26C4.66003 14.35 4.63003 14.45 4.60003 14.55C4.50003 14.87 4.41004 15.19 4.33004 15.51C4.30004 15.63 4.27004 15.75 4.24004 15.87C4.15004 16.29 4.06003 16.72 4.01003 17.15C3.79003 18.77 3.84004 20.48 4.22004 22.16C5.26004 26.7 8.82004 29.02 8.88004 29.06C7.91004 23.05 13.67 19.51 17.39 17.87C19.1 17.12 20.38 16.77 20.38 16.77L16.51 23.07L16.44 23.19V23.21C15.73 25.47 16.65 31.19 17.59 33.06C17.94 33.75 18.55 34.53 19.43 35.43C20.93 36.98 23.2 38.9 26.2 41.32C30.95 45.15 33.98 46.11 33.98 46.11H40.05L49.08 38.18C43.93 29.97 37.09 23.07 37.09 23.07V23.05Z"
      fill="white"
      stroke="white"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M49.08 38.16L40.05 46.09H33.98C33.98 46.09 30.95 45.13 26.2 41.3C23.2 38.88 20.93 36.97 19.43 35.41C18.56 34.51 17.94 33.73 17.59 33.04C16.64 31.17 15.73 25.46 16.42 23.19V23.17L16.51 23.05L20.38 16.75C20.38 16.75 19.1 17.1 17.39 17.85C13.67 19.49 7.91004 23.03 8.88004 29.04C8.82004 29 5.26004 26.68 4.22004 22.14C3.84004 20.46 3.79003 18.76 4.01003 17.13C4.27003 15.19 4.89004 13.36 5.75004 11.83C6.13004 11.15 6.55003 10.53 7.01003 9.98C9.36003 7.14 13.46 3.38 20.59 3.08C27.71 2.78 33.97 7.47 35.91 12.69C37.85 17.91 37.1 23.04 37.1 23.04C37.1 23.04 43.94 29.94 49.09 38.15L49.08 38.16Z"
      fill="#030024"
    />
    <path
      d="M49.0801 38.16C49.0801 38.16 50.2201 40.18 50.8201 42.23C51.4201 44.28 52.1501 47.27 51.7201 49.81C51.2901 52.35 51.0401 53.61 51.0401 53.61C51.0401 53.61 50.8401 53.91 49.8301 53.61C48.8201 53.31 47.0401 52.43 45.7601 51.33C44.4801 50.23 43.4001 49.08 43.0701 48.62C42.7401 48.16 42.8601 47.74 43.2101 47.24C43.5601 46.74 49.0801 38.15 49.0801 38.15V38.16Z"
      fill="#030024"
    />
    <path
      d="M38.7 53.28L33.14 53.32L20.8 53.41C20.8 53.41 22.56 51.54 24.81 50.69C26.26 50.15 27.31 49.86 28.94 49.91C29.85 49.94 30.94 50.07 32.39 50.32C32.39 50.32 34.35 47.58 34.47 47.41C34.59 47.24 34.66 47.18 34.53 47H37.65C37.65 47 37.83 47.2 37 48.32C36.16 49.44 35.18 50.79 35.18 50.79C35.18 50.79 37.25 51.27 38.71 53.28H38.7Z"
      fill="#1C1D42"
    />
    <path
      d="M20.38 6.84998C19.71 9.44998 16.2 12.41 16.2 12.41L8.12001 19.07L5.09001 18.97L4.01001 17.15C4.38001 14.35 5.52001 11.79 7.01001 9.99998C9.36001 7.15998 13.46 3.39998 20.59 3.09998C20.59 3.09998 21.06 4.25998 20.39 6.84998H20.38Z"
      fill="#FF3B2E"
    />
    <path
      d="M8.88004 29.05C8.82004 29.01 5.26004 26.69 4.22004 22.15C3.84004 20.47 3.79003 18.77 4.01003 17.14C4.27003 15.2 4.89004 13.37 5.75004 11.84C8.95004 14.16 8.76003 17.08 8.76003 17.08C4.89003 24.83 8.82004 28.99 8.88004 29.05Z"
      fill="#1C1D42"
    />
    <path
      d="M20.3801 6.84998C20.3801 6.84998 5.95007 13.55 7.11007 24.59C7.11007 24.59 6.13007 15.02 21.1501 13.31C21.1501 13.31 20.0801 9.99998 20.3801 6.85998V6.84998Z"
      fill="#FA7E11"
    />
    <path
      d="M21.3501 6.69C21.3501 6.69 22.8701 9.1 21.6501 14.72L30.9301 20.74C30.9301 20.74 30.9801 15.79 30.9301 14.6C30.8801 13.41 31.0301 7.09 21.3601 6.69H21.3501Z"
      fill="#F5A003"
    />
    <path
      d="M22.17 29.41C19.73 32.21 19.43 35.42 19.43 35.42C18.56 34.52 17.9399 33.74 17.5899 33.05C16.6399 31.18 15.73 25.47 16.42 23.2V23.18L16.51 23.06L20.93 23.8L22.17 29.41Z"
      fill="#F6A003"
    />
    <path
      d="M29.3099 39.49L22.1699 29.41L23.9099 21.69L30.9199 20.75C30.9199 20.75 30.9699 32.41 29.2999 39.5L29.3099 39.49Z"
      fill="#FB7E10"
    />
    <path
      d="M30.93 20.74C30.93 20.74 23.92 26.81 22.18 29.41L16.45 23.18L16.52 23.06L20.39 16.76L21.66 14.72L30.94 20.74H30.93Z"
      fill="#FAC578"
    />
    <path
      d="M49.08 38.16H36.37L30.47 31.43C34.76 27.79 37.09 23.05 37.09 23.05C37.09 23.05 43.93 29.95 49.08 38.16Z"
      fill="#3A395E"
    />
    <path
      d="M33.14 53.32L20.8 53.41C20.8 53.41 22.56 51.54 24.81 50.69C26.26 50.15 27.31 49.86 28.94 49.91C32.05 50.19 33.14 53.31 33.14 53.31V53.32Z"
      fill="#030024"
    />
    <path
      d="M24.98 13.26C26.079 13.26 26.97 12.369 26.97 11.27C26.97 10.1709 26.079 9.27997 24.98 9.27997C23.8809 9.27997 22.99 10.1709 22.99 11.27C22.99 12.369 23.8809 13.26 24.98 13.26Z"
      fill="#030024"
    />
    <path
      d="M25.23 12.22C25.473 12.22 25.67 12.023 25.67 11.78C25.67 11.537 25.473 11.34 25.23 11.34C24.987 11.34 24.79 11.537 24.79 11.78C24.79 12.023 24.987 12.22 25.23 12.22Z"
      fill="#FEFEFE"
    />
  </svg>
);

export default Container;
