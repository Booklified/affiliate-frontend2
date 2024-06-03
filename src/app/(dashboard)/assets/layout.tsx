import Header1 from "@/components/Header1";
import React from "react";
import SelectBrandAndProduct from "./(components)/BrandProductNavigation";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-full">
      <div className="flex flex-col-reverse items-center justify-between w-full gap-2 py-2 font-bold md:flex-row">
        <SelectBrandAndProduct />
        <Header1 showNotification={true} />
      </div>
      {children}
    </div>
  );
}

export default Layout;
