import Home from "@/pages/home";
import SignIn from "@/pages/sign-in";
import SignUp from "@/pages/sign-up";
import { v4 } from "uuid";

// authed_route ro'yxatdan o'tilgan routelar
export const authed_route = [
  {
    path: "/",
    element: <Home />,
    id: v4()
  }
]; //

// unauthed_route ro'yxatdan o'tilmagan routelar
export const unauthed_route = [
  {
    path: "/",
    element: <Home />,
    id: v4() // app.tsx index o'rniga id berish uchun ishlatdik
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
