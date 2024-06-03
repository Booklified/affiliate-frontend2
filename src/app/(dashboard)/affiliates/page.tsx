import React from "react";
import Page from ".";
import Header1 from "@/components/Header1";
import Link from "next/link";

export const metadata = {
  title: "Toocan",
  description: "Web site created using create-react-app",
  //ogTitle:'...'
};

export default function WireframeAffiliatesOnePage() {
  return (
    <div className="overflow-hidden md:w-full">
      <div className="flex flex-col-reverse w-full py-2 font-bold md:flex-row">
        <div className="flex-grow pt-3 pl-2 text-2xl text-black-900 whitespace-nowrap">
          <Link
            href={"/affiliates?add=true"}
            className="flex flex-wrap text-black-900 hover:text-black-900"
          >
            <p className="text-4xl font-bold">Recruit New Affiliates</p>
            <p className="text-gray-500 text-[15px] mt-auto ml-1">
              {" "}
              See Knowledge Base For More Details on Best Practices
            </p>
          </Link>
        </div>

        <Header1 showNotification={true} />
      </div>
      <Page />
    </div>
  );
}
