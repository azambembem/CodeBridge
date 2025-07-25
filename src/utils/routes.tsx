import { v4 } from "uuid";
import type { TRoute } from "@/types/shared";
import Home from "@/pages/home";
import SignUp from "@/pages/sign-up";
import SignIn from "@/pages/sign-in";

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
  },
  {
    path: "/sign-in",
    element: <SignIn />,
    id: v4()
  },
  {
    path: "/sign-up",
    element: <SignUp />,
    id: v4()
  }
];
