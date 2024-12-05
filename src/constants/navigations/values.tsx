import { NavItem } from "@/types/navigations/types";

const ABOUT = {
  title: "Home",
  path: "/",
};

const Gallery = {
  title: "Gallery",
  path: "/Gallery",
};


export const NAV_ITEMS: NavItem[] = (() => {
  return [ABOUT, Gallery];
})();
