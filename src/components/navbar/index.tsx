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
import useAuthUser from "react-auth-kit/hooks/useAuthUser"; // react-auth-kit
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
  const user = useAuthUser<TUser>();
  const signOut = useSignOut();
  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();
  const { products } = useReduxSelector(({ wishlist }) => wishlist);

  return (
    <div>
      <Discount />
      <div className="border-b border-solid pt-[47px] pb-[23px]">
        <div className="w-[90%] m-auto h-[40px] flex items-center justify-between">
          <div>
            <Button
              variant="link"
              onClick={() => navigate("/")}
              className="text-2xl font-bold cursor-pointer"
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

            {isAuthenticated && (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src={user?.profile_picture} />
                    <AvatarFallback>
                      {`${user?.first_name?.slice(
                        0,
                        1
                      )} ${user?.last_name?.slice(0, 1)}`}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
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
                      signOut();
                      window.location.assign("/");
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
