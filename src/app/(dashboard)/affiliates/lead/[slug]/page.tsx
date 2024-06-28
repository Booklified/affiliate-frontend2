import React from "react";
import Page from ".";
import Header1 from "@/components/Header1";
import { Breadcrumb } from "antd";
import Link from "next/link";

export const metadata = {
  title: "Toocan",
  description: "Web site created using create-react-app",
  //ogTitle:'...'
};

export default function WireframeBillingPayment1OnePage() {
  return (
    <div className="flex flex-col min-h-full overflow-hidden ">
      <Breadcrumb
        className="mt-3 -mb-3"
        items={[
          {
            title: (
              <Link href={"/affiliates"} className="">
                Affiliates
              </Link>
            ),
          },
          {
            title: "Lead",
          },
        ]}
      />
      <Header1 showNotification />
      <Page />
    </div>
  );
}
