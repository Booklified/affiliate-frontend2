import Link from "next/link";
import React from "react";
import { Button, Img, SelectBox, Text } from "./..";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";

const dropDownOptions = [
  { label: "Brand 1", value: "option1" },
  { label: "Brand 2", value: "option2" },
  { label: "Brand 3", value: "option3" },
];

export default function Header({ ...props }) {
  const pathname = usePathname();
  const [origin, setOrigin] = React.useState("");

  console.log("---origin", origin);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(
        window?.location?.origin
          ? window?.location?.origin + "/" + pathname
          : ""
      );
    }
  }, []);

  return (
    <header
      {...props}
      className={`${props.className} flex  self-stretch justify-between items-center gap-5 pt-1`}
    >
      <SelectBox
        size="md"
        shape="square"
        indicator={
          <Img
            src="img_arrowdown.svg"
            width={16}
            height={8}
            alt="arrow_down"
            className="h-[8px] w-[16px] ml-1"
          />
        }
        name="Brand Dropdown"
        placeholder={`Brand 1`}
        options={dropDownOptions}
        className="gap-px "
      />

      <SignedOut>
        <SignInButton />
      </SignedOut>

      <SignedIn>
        <UserButton afterSignOutUrl={origin} />
      </SignedIn>
    </header>
  );
}
