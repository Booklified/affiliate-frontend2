import React from "react";
import Page from ".";
import Header1 from "@/components/Header1";

export const metadata = {
  title: "Toocan",
  description: "Web site created using create-react-app",
  //ogTitle:'...'
};

export default function WireframeProductsTwoPage() {
  return (
    <div className="w-screen overflow-hidden md:w-full ">
      <Header1 showNotification />
      <Page />
    </div>
  );
}
