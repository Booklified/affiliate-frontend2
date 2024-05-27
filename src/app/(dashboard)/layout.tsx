import Wrapper from "@/components/Wrapper";
import "@/styles/tailwind.css";
import React from "react";

function RootLayout({ children }: { children: React.ReactNode }) {
  return <Wrapper header={1}>{children}</Wrapper>;
}
export default RootLayout;
