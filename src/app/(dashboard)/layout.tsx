import Container from "@/components/Container";
import Wrapper from "@/components/Wrapper";
import "@/styles/tailwind.css";
import React from "react";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <div className="flex-grow overflow-y-scroll  px-4 2xl:px-[36px] ">
        {children}
      </div>
    </Container>
  );
}
export default RootLayout;
