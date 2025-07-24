import { Button } from "@/components/ui/button";
import type { FC } from "react";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import {
  User,
  ShoppingCart,
  LogOut,
  X,
  Menu,
  LogIn,
  Heart
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import useSignOut from "react-auth-kit/hooks/useSignOut";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { getInitials } from "@/lib/utils";
import { setStore } from "@/redux/stores/navbar";
import { useReduxDispatch, useReduxSelector } from "@/hooks/useRedux";
import { useManageAccountCache } from "@/services";

type ActionsProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Actions: FC<ActionsProps> = ({ setIsOpen, isOpen }) => {
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();
  const signOut = useSignOut();
  const { menuOpen } = useReduxSelector(({ navbar }) => navbar);
  const dispatch = useReduxDispatch();
  const {
    account: { data: account }
  } = useManageAccountCache();

  // Authenticated user uchun user sheet
  const AuthenticatedUserSheet = () => (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sheet - faqat mobile uchun */}
      <div
        className={`fixed top-0 left-0 w-full sm:h-[92px] bg-[#2b2b2b] z-50 transform transition-transform duration-300 ease-in-out sm:hidden ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#3b3b3b]">
          <img className="w-[121px] h-[40px]" alt="logo" />
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-[#4F4F4F]"
          >
            <X className="w-7 h-7 text-[#eee]" />
          </button>
        </div>

        <div className="p-6 text-center border-b border-[#3b3b3b]">
          {/* Added p-6 and text-center */}
          <div className="font-semibold text-[#eee] text-[16px] mb-1">
            {account?.name} {account?.surname}
          </div>
          <div className="text-[#A5A5A5] text-[14px] font-light">
            {account?.email}
          </div>
        </div>

        {/* Menu Items */}
        <div className="p-6 space-y-6">
          <Button
            variant="ghost"
            className="w-full justify-center text-[#eee] hover:text-[#eee] hover:bg-[#3B3B3B] h-[52px] text-[14px] font-semibold"
            onClick={() => {
              navigate("/my-profile/manage-account");
              setIsOpen(false);
            }}
          >
            마이페이지
          </Button>

          <div className="flex items-center justify-center">
            {/* Centering the logout button */}
            <Button
              variant="ghost"
              className="w-full flex items-center gap-3 text-[#eee] hover:text-[#eee] hover:bg-[#3B3B3B] h-[52px] text-[14px] font-light px-6"
              onClick={() => {
                signOut();
                window.location.assign("/");
              }}
            >
              <LogOut className="w-5 h-5" />
              로그아웃
            </Button>
          </div>
        </div>
      </div>
    </>
  );

  // Unauthenticated user uchun login sheet (faqat mobile uchun)
  const UnauthenticatedUserSheet = () => (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sheet - faqat mobile uchun - TEPADAN OCHILADIGAN */}
      <div
        className={`fixed top-0 left-0 w-full h-[185px] bg-[#2b2b2b] z-50 transform transition-transform duration-300 ease-in-out sm:hidden ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#3b3b3b]">
          <img className="w-[121px] h-[40px]" alt="logo" />
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-[#4F4F4F] rounded-lg"
          >
            <X className="w-7 h-7 text-[#eee]" />
          </button>
        </div>

        {/* Login Content */}
        <div className="p-6">
          {/* Login Button */}
          <Button
            className="w-full bg-[#3B3B3B] hover:bg-[#4F4F4F] text-[#eee] h-[52px] text-base font-semibold font-pre rounded-lg flex items-center justify-center gap-2"
            onClick={() => {
              navigate("/sign-in");
              setIsOpen(false);
            }}
          >
            <LogIn className="w-5 h-5" />
            Login
          </Button>
        </div>
      </div>
    </>
  );

  // Mobile uchun user icon click handler
  const handleMobileTabletUserClick = () => {
    // Faqat mobile uchun sheet ochish
    if (window.innerWidth < 640) {
      setIsOpen(true);
    }
  };

  if (isAuthenticated) {
    return (
      <>
        <div className="flex items-center gap-2">
          {/* Shopping Cart */}
          <div className="w-10 h-10 bg-[#3B3B3B] hover:bg-[#4F4F4F] cursor-pointer rounded-md flex items-center justify-center">
            <ShoppingCart
              onClick={() => navigate("/shopping-cart")}
              className="w-5 h-5  text-[#eee]"
            />
          </div>

          {/* Desktop and Tablet Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="hidden sm:flex">
              <div className="w-10 h-10 bg-[#3B3B3B] rounded-md flex items-center justify-center cursor-pointer hover:bg-[#4F4F4F] transition-colors">
                {account?.name || account?.surname ? (
                  <span className="text-[#eee] text-sm font-light">
                    {getInitials(
                      `${account?.name || ""} ${account?.surname || ""}`
                    )}
                  </span>
                ) : (
                  <User className="w-5 h-5 text-[#eee]" />
                )}
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[186px] mt-2 text-[#eee] bg-[#2b2b2b] border-[#4F4F4F]">
              <DropdownMenuLabel className="text-center py-4">
                <div className="font-semibold text-[16px] text-[#eee]">
                  {account?.name} {account?.surname}
                </div>
                <div className="text-[#A5A5A5] font-light text-sm">
                  {account?.email}
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-[#4F4F4F]" />
              <DropdownMenuItem
                className="justify-center py-4 hover:bg-[#4F4F4F] cursor-pointer text-[14px] font-light"
                onClick={() => navigate("/my-profile/manage-account")}
              >
                마이페이지
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-[#4F4F4F]" />
              <DropdownMenuItem
                className="justify-center py-3 hover:bg-[#4F4F4F] cursor-pointer font-light"
                onClick={() => {
                  signOut();
                  window.location.assign("/");
                }}
              >
                <LogOut className="w-5 h-5 mr-2" />
                로그아웃
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile User Icon */}
          <div
            className="w-10 h-10 bg-[#3B3B3B] rounded-md flex items-center justify-center cursor-pointer hover:bg-[#4F4F4F] transition-colors sm:hidden"
            onClick={handleMobileTabletUserClick}
          >
            {account?.name || account?.surname ? (
              <span className="text-[#eee] text-[14px] font-semibold">
                {getInitials(
                  `${account?.name || ""} ${account?.surname || ""}`
                )}
              </span>
            ) : (
              <User className="w-5 h-5 text-[#eee]" />
            )}
          </div>

          {/* Hamburger Menu */}
          <button
            type="button"
            onClick={() => {
              dispatch(setStore({ menuOpen: !menuOpen }));
            }}
            aria-label="Toggle menu"
            className="lg:hidden p-0 w-10 h-10 flex items-center justify-center hover:bg-[#4F4F4F] rounded-md"
          >
            {menuOpen ? (
              <X className="w-7 h-7 text-[#eee]" />
            ) : (
              <Menu className="w-7 h-7 text-[#eee]" />
            )}
          </button>
        </div>

        {/* Mobile User Sheet */}
        <AuthenticatedUserSheet />
      </>
    );
  }

  // Unauthenticated user
  return (
    <>
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Shopping Cart */}
        <div className="w-10 h-10  hover:cursor-pointer rounded-md flex items-center justify-center">
          <ShoppingCart className="w-5 h-5 text-[#eee]" />
        </div>
        <div className="w-10 h-10  hover:cursor-pointer rounded-md flex items-center justify-center">
          <Heart className="w-5 h-5 text-[#eee]" />
        </div>

        {/* Desktop and Tablet Login Button */}
        <button
          type="button"
          className=" border-2 border-solid rounded-md hover:cursor-pointer text-[#eee] px-4 bg- py-2 text-[18px] gap-2 hidden sm:flex lg:flex items-center h-10 font-semibold transition-colors"
          onClick={() => navigate("/sign-in")}
        >
          <LogIn className="w-5 h-5  text-[#eee]" />
          Login
        </button>

        {/* Mobile/Tablet User Icon */}
        <div
          className="w-10 h-10 rounded-md flex items-center justify-center cursor-pointer bg-[#3B3B3B] hover:bg-[#4F4F4F] transition-colors sm:hidden"
          onClick={handleMobileTabletUserClick}
        >
          <User className="w-5 h-5 text-[#eee]" />
        </div>

        {/* Hamburger Menu */}
        <button
          className="lg:hidden p-0 w-10 h-10 flex items-center justify-center hover:bg-[#4F4F4F] rounded-md"
          onClick={() => {
            dispatch(setStore({ menuOpen: !menuOpen }));
          }}
          type="button"
        >
          {menuOpen ? (
            <X className="w-7 h-7 text-[#eee]" />
          ) : (
            <Menu className="w-7 h-7 text-[#eee]" />
          )}
        </button>
      </div>

      {/* Unauthenticated User Sheet - faqat mobile uchun */}
      <UnauthenticatedUserSheet />
    </>
  );
};
