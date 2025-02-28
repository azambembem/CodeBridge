import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Heart, Search, ShoppingCart } from "lucide-react";
import Discount from "./customs/warnings/discount";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";

const Navbar = () => {
  const isAuthenticated = useIsAuthenticated();

  const navigate = useNavigate();
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
            <Button variant="ghost">
              <ShoppingCart />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
