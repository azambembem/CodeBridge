import { v4 } from "uuid";
import type { TRoute } from "@/types/shared";

export const authed_route: TRoute[] = [
  {
    path: "/",
    element: <>home</>,
    id: v4()
  }
];

export const unauthed_route: TRoute[] = [
  {
    path: "/",
    element: <>home</>,
    id: v4() // app.tsx index o'rniga id berish uchun ishlatdik
  }
];
