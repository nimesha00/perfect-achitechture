"use client";
import { usePathname } from "next/navigation";
import React from "react";
import {} from "next/router";
import Link from "next/link";
import { NavItem } from "@/types/navigations/types";

export interface NavDirectoryProps {
  itemList: NavItem[];
}

const NavDirectory: React.FC<NavDirectoryProps> = ({ itemList }) => {
  return (
    <div className="flex-shrink-0 w-full h-full">
      <nav className="min-h-0 max-h-full" aria-label="Directory">
        <div className="flex space-x-4">
          {itemList?.map((item) => {
            return <MenuItem key={item.title} item={item} />;
          })}
        </div>
      </nav>
    </div>
  );
};

const MenuItem = ({ item }: { item: NavItem }) => {
  const pathname = usePathname();

  return (
    <div>
      <>
        <Link
          href={item.path}
          className="flex w-full flex-row items-center justify-between rounded-lg p-2 group"
        >
          <div className="flex flex-row items-center space-x-4">
            <span
              className={`flex group-hover:text-primaryGold text-base font-medium ${
                pathname === item.path ? "text-primaryGold" : "text-primary"
              }`}
            >
              {item.title}
            </span>
          </div>
        </Link>
      </>
    </div>
  );
};

export default NavDirectory;
