"use client";
import { CloseSVG } from "@/assets/images";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useAuth,
  useUser,
} from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";

function Header1({ showNotification, ...props }) {
  const { user } = useUser();
  const { actor, userId, getToken } = useAuth();
  const [origin, setOrigin] = React.useState("");
  const pathname = usePathname();

  console.log("---origin", origin);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(
        window?.location?.origin
          ? window?.location?.origin + "/" + pathname
          : ""
      );
    }
  }, []);
  console.log("---actor", actor);

  return (
    <header
      {...props}
      className={`${props.className} ml-auto min-w-20     flex md:flex-row flex-col justify-end w-fit items-center gap-[22px]  px-3 `}
    >
      <div className="flex justify-end items-center gap-[19px]  ">
        <SignedOut>
          <SignInButton className="px-3 py-2 bg-yellow-900 rounded-md whitespace-nowrap text-white-A700 ">
            Sign in
          </SignInButton>
        </SignedOut>

        <SignedIn>
          {showNotification && (
            <svg
              width="60"
              height="60"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_3_4249)">
                <path
                  d="M34.8301 60.48C49.0183 60.48 60.5201 48.9782 60.5201 34.79C60.5201 20.6018 49.0183 9.10001 34.8301 9.10001C20.6419 9.10001 9.14014 20.6018 9.14014 34.79C9.14014 48.9782 20.6419 60.48 34.8301 60.48Z"
                  fill="white"
                />
              </g>
              <path
                d="M40.8904 42.96C40.1204 42.96 39.3603 42.96 38.5903 42.96C38.4203 42.96 38.3603 43.02 38.3303 43.18C37.9903 44.83 36.5203 46.03 34.8403 46.03C33.1603 46.03 31.6803 44.83 31.3503 43.18C31.3103 43 31.2304 42.96 31.0604 42.96C29.5704 42.96 28.0803 42.96 26.5803 42.96C25.6103 42.96 24.8604 42.39 24.6704 41.48C24.5104 40.73 24.7503 40.09 25.3503 39.61C25.6003 39.41 25.8504 39.22 26.1204 39.04C26.5504 38.74 26.7603 38.33 26.8403 37.82C27.1803 35.7 27.5104 33.57 27.9004 31.45C28.4004 28.78 29.9704 26.97 32.5004 26C32.7204 25.92 32.8004 25.84 32.8104 25.59C32.8304 24.55 33.5504 23.71 34.5104 23.58C35.5404 23.43 36.4704 23.99 36.7804 24.96C36.8504 25.19 36.8804 25.44 36.8904 25.69C36.8904 25.86 36.9603 25.92 37.1003 25.97C39.5403 26.86 41.1103 28.55 41.7103 31.08C41.9803 32.22 42.1204 33.4 42.3104 34.57C42.5004 35.72 42.6904 36.87 42.8804 38.01C42.9404 38.4 43.1403 38.71 43.4503 38.95C43.7203 39.15 43.9904 39.35 44.2504 39.56C44.9504 40.09 45.2203 40.89 44.9603 41.68C44.7003 42.47 44.0004 42.97 43.1204 42.98C42.3804 42.98 41.6404 42.98 40.8904 42.98V42.96ZM34.8303 41.93C35.8703 41.93 36.9003 41.93 37.9403 41.93C39.6603 41.93 41.3903 41.93 43.1103 41.93C43.5503 41.93 43.8603 41.72 43.9803 41.35C44.1003 40.98 43.9804 40.63 43.6304 40.36C43.3504 40.15 43.0704 39.94 42.7904 39.72C42.2904 39.32 41.9704 38.81 41.8704 38.18C41.7204 37.32 41.5803 36.47 41.4403 35.61C41.2103 34.22 41.0103 32.82 40.7403 31.43C40.0703 28.02 36.7004 25.96 33.4304 26.78C31.0304 27.38 29.4803 28.91 28.9603 31.32C28.5103 33.41 28.2104 35.53 27.9004 37.64C27.7504 38.66 27.3603 39.48 26.4703 40.03C26.2803 40.15 26.0904 40.3 25.9204 40.45C25.6804 40.66 25.5904 40.94 25.6604 41.25C25.7304 41.57 25.9303 41.79 26.2403 41.89C26.3703 41.93 26.5204 41.93 26.6704 41.93C29.3904 41.93 32.1103 41.93 34.8303 41.93ZM37.3104 42.98H32.3503C32.5303 44.11 33.6203 44.99 34.8203 45C36.0303 45 37.1304 44.13 37.3104 42.98ZM35.8503 25.61C35.8503 25.2 35.6803 24.89 35.3303 24.69C34.9503 24.49 34.5703 24.51 34.2303 24.77C33.9503 24.98 33.8103 25.27 33.8303 25.61H35.8503Z"
                fill="black"
              />
              <defs>
                <filter
                  id="filter0_d_3_4249"
                  x="0.140137"
                  y="0.100006"
                  width="71.3804"
                  height="71.38"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="1" dy="1" />
                  <feGaussianBlur stdDeviation="5" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_3_4249"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_3_4249"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          )}
          <span className="uppercase whitespace-nowrap">
            {user?.fullName ?? ""}
          </span>
          <UserButton afterSignOutUrl={origin} />
        </SignedIn>
      </div>
    </header>
  );
}

//dynamic export
export default dynamic(() => Promise.resolve(Header1), {
  ssr: false,
});
