import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between gap-6">
      <div className="flex items-center gap-2">
        <div className="w-5 h-10 bg-red-500 rounded-md" />
        <h3 className="text-base font-semibold text-[red]">Just For You</h3>
      </div>
      <Button variant={"destructive"} onClick={() => navigate("/")}>
        See All
      </Button>
    </div>
  );
};

export default Header;
