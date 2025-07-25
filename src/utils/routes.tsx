import { v4 } from "uuid";
import type { TRoute } from "@/types/shared";
import Home from "@/pages/home";
import SignUp from "@/pages/sign-up";
import SignIn from "@/pages/sign-in";
import { AccountVerified } from "@/pages/account-verified";
import { VerifyAccount } from "@/pages/verify-account";

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
  },
  {
    path: "/verify-account",
    element: <VerifyAccount />,
    id: v4()
  },
  {
    path: "/account-verified",
    element: <AccountVerified />,
    id: v4()
  }
];
