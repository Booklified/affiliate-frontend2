"use client";
import React from "react";

import dynamic from "next/dynamic";
const Sidebar1 = dynamic(() => import("./Sidebar1"), { ssr: false });
export default function Wrapper({ children, header = 1 }) {
  return (
    <>
      <div className="flex flex-col w-screen max-h-screen overflow-hidden lg:flex-row ">
        <div className="hidden lg:flex">
          <Sidebar1 />
        </div>
        <div className=" lg:hidden">
          <MyModal>
            <Sidebar1 />
          </MyModal>
        </div>

        <div className=" lg:w-[calc(100vw-28px)] 2xl:w-[calc(100vw-346px)]  overflow-hidden  flex flex-col  flex-1 pb-4 w-full    ">
          <div className="max-h-screen overflow-y-scroll min-h-[580px] w-full overflow-x-hidden  flex-grow">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

/* Modal */
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useState } from "react";

function MyModal({ children }) {
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <Button
        onClick={open}
        className="w-10 h-10 bg-black/20 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="black"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </Button>

      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={close}
        >
          <div className="fixed inset-0 z-[99999] w-fit overflow-y-auto   ">
            <div className="min-h-full ">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 "
                enterTo="opacity-100 "
                leave="ease-in duration-200"
                leaveFrom="opacity-100 "
                leaveTo="opacity-0 "
              >
                <DialogPanel className="w-full p-0 bg-white/5 backdrop-blur-2xl">
                  {children}
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
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
