import Cart from "@/pages/cart";
import Home from "@/pages/home";
import SignIn from "@/pages/sign-in";
import SignUp from "@/pages/sign-up";
import Wishlist from "@/pages/wishlist";
import { v4 } from "uuid";

// authed_route ro'yxatdan o'tilgan routelar
export const authed_route = [
  {
    path: "/",
    element: <Home />,
    id: v4()
  },
  {
    path: "/wishlist",
    element: <Wishlist />, // wishlist royxatdan utgan bulsa ham korinadi utmagan bulsa ham shuning uchun pastda ham bor
    id: v4()
  },
  {
    path: "/cart",
    element: <Cart />,
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
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
    id: v4()
  },
  {
    path: "/cart",
    element: <Cart />,
    id: v4()
  }
];
