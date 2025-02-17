import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[90%] m-auto h-[40px] flex items-center justify-between">
      <div>
        <h3
          onClick={() => navigate("/")}
          className="text-2xl font-bold cursor-pointer"
        >
          Exclusive
        </h3>
      </div>
      <div className="flex items-center gap-4">
        <h3 className="text-base cursor-pointer">Home</h3>
        <h3 className="text-base cursor-pointer">Contact</h3>
        <h3 className="text-base cursor-pointer">About</h3>
        <h3 className="text-base cursor-pointer">Sign Up</h3>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
