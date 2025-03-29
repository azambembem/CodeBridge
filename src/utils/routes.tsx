import Billing from "@/pages/billing";
import Cart from "@/pages/cart";
import Home from "@/pages/home";
import AddressBook from "@/pages/profile/address-book";
import Cancellations from "@/pages/profile/cancellations";
import MyProfile from "@/pages/profile/my-profile";
import PaymentOptions from "@/pages/profile/payment-options";
import Returns from "@/pages/profile/returns";
import SignIn from "@/pages/sign-in";
import SignUp from "@/pages/sign-up";
import Wishlist from "@/pages/wishlist";
import { v4 } from "uuid";
import ProfileWishlist from "@/pages/profile/wishlist";

// authed_route ro'yxatdan o'tilgan routelar
export const authed_route = [
  {
    path: "/",
    element: <Home />,
    id: v4()
  },
  {
    path: "/wishlist",
    element: <Wishlist />, // wishlist royxatdan utgan bulsa ham korinadi utmagan bulsa ham shuning uchun pastda ham bor.
    id: v4()
  },
  {
    path: "/cart",
    element: <Cart />,
    id: v4()
  },
  {
    path: "/billing",
    element: <Billing />,
    id: v4()
  },
  {
    path: "/profile/my-profile",
    element: <MyProfile />,
    id: v4()
  },
  {
    path: "/profile/address-book",
    element: <AddressBook />,
    id: v4()
  },
  {
    path: "/profile/payment-options",
    element: <PaymentOptions />,
    id: v4()
  },
  {
    path: "/profile/returns",
    element: <Returns />,
    id: v4()
  },
  {
    path: "/profile/cancellations",
    element: <Cancellations />,
    id: v4()
  },
  {
    path: "/profile/wishlist",
    element: <ProfileWishlist />,
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
    path: "/wishlist", // wishlist uchun -> ruyxatdan utmagan holatda
    element: <Wishlist />,
    id: v4()
  },
  {
    path: "/cart",
    element: <Cart />,
    id: v4()
  },
  {
    path: "/billing",
    element: <Billing />,
    id: v4()
  }
];
