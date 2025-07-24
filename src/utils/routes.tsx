import { v4 } from "uuid";
import type { TRoute } from "@/types/shared";
import Home from "@/pages/home";

export const authed_route: TRoute[] = [
  {
    path: "/",
    element: <Home />,
    id: v4()
  }
];

export const unauthed_route: TRoute[] = [
  {
    path: "/",
    element: <Home />,
    id: v4()
  }
];
