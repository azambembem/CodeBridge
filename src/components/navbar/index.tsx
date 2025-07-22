import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Heart,
  LogOut,
  Search,
  ShoppingBag,
  ShoppingCart,
  Star,
  TicketX,
  User
} from "lucide-react";
import Discount from "./customs/warnings/discount";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useAuthUser from "react-auth-kit/hooks/useAuthUser"; // react-auth-kit userdan keliyapti
import type { TUser } from "@/types/user";
import useSignOut from "react-auth-kit/hooks/useSignOut"; // sign out qilsih uchun -> react-auth-kit
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Badge } from "antd";
import { useReduxSelector } from "@/hooks/useRedux";

const Navbar = () => {
  const user = useAuthUser<TUser>(); // user ustiga borsak bizga TUser yoki null ko'rsatadi.
  // userni user. qilib korsak TUser ichidagi barcha malumotlarni korsatib beradi.
  const signOut = useSignOut(); // signOut bizga react-auth kitdan keladi bizga yani signOut qilish uchun kerak bizga.
  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();
  const { products } = useReduxSelector(({ wishlist }) => wishlist); // Yani savatchaga nechta product add bulgani

  return (
    <div>
      <Discount />
      <div className="border-b border-solid pt-[47px] pb-[23px]">
        <div className="w-[90%] m-auto h-[40px] flex items-center justify-between">
          <div>
            <Button
              variant="link"
              onClick={() => navigate("/")}
              className="text-2xl font-light cursor-pointer"
            >
              Exclusive
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <Button onClick={() => navigate("/")} variant="link">
              Home
            </Button>
            <Button onClick={() => navigate("/contact")} variant="link">
              Contact
            </Button>
            <Button onClick={() => navigate("/about")} variant="link">
              About
            </Button>
            {!isAuthenticated && (
              <Button onClick={() => navigate("/sign-up")} variant="link">
                Sign Up
              </Button>
            )}
          </div>
          <div className="flex items-center gap-6">
            <div className="relative w-[240px]">
              <Input placeholder="What are you looking for?" />
              <Search className="absolute top-2 right-4 w-5 h-5" />
            </div>
            <Button variant="ghost">
              <Heart />
            </Button>
            <Badge count={products.length}>
              <Button onClick={() => navigate("/wishlist")} variant="ghost">
                <ShoppingCart />
              </Button>
            </Badge>

            {isAuthenticated && ( // isAuthenticated bulsagina AvatarImage chiqishi kerak.
              <DropdownMenu>
                {/* <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src={user?.profile_picture} />
                    <AvatarFallback>
                      {`${user?.first_name?.slice(
                        // slice kesib oliyapti lekin nima maqsadda ishlatilyotgani aniqlash kerak??
                        0,
                        1
                      )} ${user?.last_name?.slice(0, 1)}`}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger> */}
                <DropdownMenuTrigger>
                  {user?.profile_picture ? (
                    <Avatar>
                      <AvatarImage src={user.profile_picture} />
                      <AvatarFallback>
                        {`${user?.first_name?.slice(0, 1) ?? "U"}${
                          user?.last_name?.slice(0, 1) ?? "N"
                        }`}
                      </AvatarFallback>
                    </Avatar>
                  ) : (
                    <Button variant="ghost" size="icon">
                      <User className="w-5 h-5 " />
                    </Button>
                  )}
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => navigate("/profile/my-profile")}
                  >
                    <User />
                    Manage My Account
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <ShoppingBag /> My Order
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <TicketX />
                    My Cancellations
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Star />
                    My Reviews
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      signOut(); // tepadagi signOut ni olib kelib buyerda Logout bosganda home page chiqarib tashlaydi.
                      window.location.assign("/"); //
                    }}
                    className="text-red-500 hover:text-red-500"
                  >
                    <LogOut />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
