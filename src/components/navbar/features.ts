import { useReduxDispatch, useReduxSelector } from "@/hooks/useRedux";
import { setStore } from "@/redux/stores/navbar";
import type { MenuItem } from "@/types/navbar";
import { useNavigate } from "react-router-dom";

export const useNavbarFeatures = () => {
  const navigate = useNavigate();
  const dispatch = useReduxDispatch();
  const { menuOpen } = useReduxSelector(({ navbar }) => navbar);

  const scrollToSection = (targetId: string) => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMenuClick = (item: MenuItem) => {
    if (item.type === "navigate") {
      navigate(item.route);
    } else {
      scrollToSection(item.targetId);
    }

    // Mobile menu ochiq bo'lsa yopish
    if (menuOpen) {
      dispatch(setStore({ menuOpen: false }));
    }
  };

  return {
    handleMenuClick,
  };
};
