import type { MenuItem } from "@/types/navbar";

export const menuItems: MenuItem[] = [
  { name: "Home", targetId: "solutions-section", type: "scroll" },
  { name: "Categories", route: "/software", type: "navigate" },
  { name: "Courses", targetId: "guide-section", type: "scroll" },
  { name: "About Us", targetId: "contact-heading", type: "scroll" }
  // { name: "Contact", targetId: "contact-heading", type: "scroll" }
];
