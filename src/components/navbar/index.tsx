import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Actions } from "./customs/actions";
import { X } from "lucide-react";
import { setStore } from "@/redux/stores/navbar";
import { useNavbarFeatures } from "./features";
import { useReduxDispatch, useReduxSelector } from "@/hooks/useRedux";
import { menuItems } from "@/mock/navbar";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useReduxDispatch();
  const { menuOpen } = useReduxSelector(({ navbar }) => navbar);
  const { handleMenuClick } = useNavbarFeatures();

  // Menu Sheet komponenti
  const MenuSheet = () => (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        onClick={() => dispatch(setStore({ menuOpen: false }))}
      />

      {/* Sheet - tablet uchun 320px, mobile uchun 248px */}
      <div className="fixed top-0 left-0 w-full h-[390px] sm:h-[390px]  bg-gradient-to-l from-[#4BC0C8] via-[#C779D0] to-[#FEAC5E] z-50 transform transition-transform duration-300 ease-in-out lg:hidden rounded-b-lg">
        {/* Header */}
        <div className="flex items-center justify-between p-4">
          <Button
            variant="link"
            className="p-0"
            onClick={() => {
              navigate("/");
              dispatch(setStore({ menuOpen: false }));
            }}
          >
            <h1 className="text-2xl font-semibold font-pre text-[#2b4070] w-[105px] h-[36px] lg:w-[121px] lg:h-[40px]">
              CodeBridge
            </h1>
          </Button>
          <button
            onClick={() => dispatch(setStore({ menuOpen: false }))}
            type="button"
            className="p-2 hover:border-2 border-solid rounded-lg"
          >
            <X className="w-7 h-7 text-[#eee]" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="p-6 space-y-6">
          {menuItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              className="w-full justify-center text-[#333] font-pre font-semibold hover:bg-[#918cb9] hover:text-[#eee] h-12 text-[12px] sm:text-base"
              onClick={() => handleMenuClick(item)}
            >
              {item.name}
            </Button>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className="pt-6 pb-5 bg-gradient-to-l from-[#4BC0C8] via-[#C779D0] to-[#FEAC5E]">
        <div className="w-[90%] max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={() => {
              navigate("/");
              // Agar menu ochiq bo'lsa yopish
              if (menuOpen) dispatch(setStore({ menuOpen: false }));
            }}
            className="p-0"
          >
            <h1 className="text-2xl font-semibold font-pre text-[#2b4070] w-[105px] h-[36px] lg:w-[121px] lg:h-[40px]">
              CodeBridge
            </h1>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-4">
            {menuItems.map((item) => (
              <Button
                key={item.name}
                className="text-sm xl:text-base text-[#333] hover:text-[#eee] transition-colors font-semibold font-pre"
                variant="link"
                onClick={() => handleMenuClick(item)}
              >
                {item.name}
              </Button>
            ))}
          </div>

          {/* Actions Section */}
          <Actions isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>

      {/* Menu Sheet */}
      {menuOpen && <MenuSheet />}
    </>
  );
};

export default Navbar;
