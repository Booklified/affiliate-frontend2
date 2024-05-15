import React from "react";
import { Heading, Img, Text } from "./";
import Header from "./Header";
import Header1 from "./Header1";
// import Sidebar1 from "./Sidebar1";
import dynamic from "next/dynamic";
const Sidebar1 = dynamic(() => import("./Sidebar1"), { ssr: false });
export default function Wrapper({ children, header = 1 }) {
  return (
    <>
      <div className="flex w-screen overflow-hidden items-start gap-[37px] md:flex-col">
        <Sidebar1 />
        <div className="w-screen !lg:w-[calc(50vw-346px)] overflow-hidden  flex flex-col items-start flex-1 pb-10 md:self-stretch md:p-5">
          {header === 1 && <Header />}
          {header === 2 && <Header1 />}
          {children}
        </div>
      </div>
    </>
  );
}

/* import React from "react";
import { Heading, Img, Text } from "./";
import Header from "./Header";
import Header1 from "./Header1";
// import Sidebar1 from "./Sidebar1";
import dynamic from "next/dynamic";
const Sidebar1 = dynamic(() => import("./Sidebar1"), { ssr: false });
export default function Wrapper({ children, header = 1 }) {
  return (
    <div>
      <div className="flex w-screen overflow-hidden md:flex-col">
        <div>
          <Sidebar1 />
        </div>
        <div className="w-screen !lg:w-[calc(50vw-346px)] overflow-hidden px-6">
          <div className="flex flex-col flex-1 flex-shrink-0 w-full pb-10 md:p-5">
            <div className="">
              {header === 1 && <Header />}
              {header === 2 && <Header1 />}
            </div>
            <div className="flex flex-grow overflow-hidden ">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
} */
