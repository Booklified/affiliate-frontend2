import React from "react";
import {
  AffiliatesIcon,
  AssestsIcon,
  BillingsAndPAymentsIcon,
  CampaignsIcon,
  HomeIcon,
  IntegrationsICon,
  KnowledgeBaseIcon,
  ProductsIcon,
  RightChevron,
} from "./icons";
import { usePathname } from "next/navigation";
import Link from "next/link";
function SideNav({
  collapsed,
  handleClick,
}: {
  collapsed: boolean;
  handleClick?: () => void;
}) {
  const pathname = usePathname();
  const menuItems = [
    {
      href: "/",
      icon: <HomeIcon />,

      label: "Dashboard",
    },
    {
      href: "/assets",
      icon: <AssestsIcon />,

      label: "Brand Assets",
    },
    {
      href: "/campaigns",
      icon: <CampaignsIcon />,

      label: "Campaigns",
    },
    {
      href: "/affiliates",
      icon: <AffiliatesIcon />,
      label: "Affiliates",
    },
    // {
    //   href: "/integrations",
    //   icon: <IntegrationsICon />,
    //   label: "Integrations",
    // },
    {
      href: "/billing",
      icon: <BillingsAndPAymentsIcon />,
      label: "Billing & Payment",
    },
    // {
    //   href: "/knowledge",
    //   icon: <KnowledgeBaseIcon />,
    //   label: "Knowledge Base",
    // },
    {
      href: "/products",
      icon: <ProductsIcon />,
      label: "Products",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full min-h-full gap-3">
      {menuItems.map((item, index) => {
        return (
          <Link
            onClick={handleClick}
            key={index}
            href={item.href}
            style={{
              background:
                pathname === item.href ||
                (pathname.includes(item.href) && item.href !== "/")
                  ? "linear-gradient(90deg, #FF3B2E 0%, #FA372C 5%, #D31D20 46%, #BB0C19 79%, #B30717 100%)"
                  : "",
              borderRadius: "15px",
              width: collapsed ? "fit-content" : "100%",
            }}
            className="flex items-center gap-2 px-3 py-2 text-white rounded-lg hover:hoverdMenu "
          >
            {item.icon}
            {!collapsed && (
              <span className="text-[18px] text-white-A700">{item.label}</span>
            )}
            {!collapsed && (
              <span className="ml-auto">
                {" "}
                <RightChevron />
              </span>
            )}
          </Link>
        );
      })}
    </div>
  );
}

export default SideNav;
