import {
  Button,
  CloseButton,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment, useState } from "react";

export default function ReusableModal({
  children,
  isOpen,
  toggleOpen,
  title,
  description,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  toggleOpen: () => void;
  title?: string;
  description?: string;
}) {
  function setopen() {
    toggleOpen();
  }

  function setclose() {
    toggleOpen();
  }

  return (
    <>
      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={setclose}
          __demoMode
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
            <div className="flex items-center justify-center min-h-full p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full relative max-w-[810px] p-6 rounded-3xl bg-white-A700 backdrop-blur-2xl">
                  <DialogTitle
                    as="h3"
                    className="font-medium text-white text-base/7"
                  >
                    {title}
                  </DialogTitle>
                  <p className="text-[#8F8F8F] mt-2">{description}</p>

                  <div className="mt-4 border-t">{children}</div>
                  <button className="absolute top-4 right-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
