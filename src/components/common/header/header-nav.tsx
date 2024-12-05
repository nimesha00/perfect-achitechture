"use client";
import React from "react";
import MaxWidthWrapper from "../wrapper/max-width-wrapper";
import NavDirectory from "./nav-directory";
import { NAV_ITEMS } from "@/constants/navigations/values";
import Image from "next/image";
import { MayaLuminaLogo } from "@/assetLayer";

export default function HeaderNav() {
  return (
    <div className="bg-white flex items-center w-full py-3">
      <MaxWidthWrapper>
        <div className="flex items-center w-full">
          {/* Navigation Links for Desktop */}
          <div className="hidden md:flex gap-10 items-center w-full">
            <div className="flex-1 flex gap-10 items-center">
              <Image src={MayaLuminaLogo} alt="logo" width={60} height={60} />
              <NavDirectory itemList={NAV_ITEMS} />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
