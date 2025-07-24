export type ScrollMenuItem = {
  name: string;
  type: "scroll";
  targetId: string;
};

export type NavigateMenuItem = {
  name: string;
  type: "navigate";
  route: string;
};

export type MenuItem = ScrollMenuItem | NavigateMenuItem;
