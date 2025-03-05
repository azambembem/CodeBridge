import { useLocation, useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div>
      <h1 className="text-base font-semibold">Manage My Account</h1>
      <div className="pl-[35px] flex flex-col gap-4 my-4">
        <h3
          className={`cursor-pointer ${
            pathname.includes("/profile/my-profile") && "text-[#DB4444]"
          }`}
          onClick={() => navigate("/profile/my-profile")}
        >
          My Profile
        </h3>
        <h3
          className={`cursor-pointer ${
            pathname.includes("/profile/address-book") && "text-[#DB4444]"
          }`}
          onClick={() => navigate("/profile/address-book")}
        >
          Address Book
        </h3>
        <h3
          className={`cursor-pointer ${
            pathname.includes("/profile/payment-options") && "text-[#DB4444]"
          }`}
          onClick={() => navigate("/profile/payment-options")}
        >
          My Payment Options
        </h3>
      </div>
      <h1 className="text-base font-semibold">My Orders</h1>
      <div className="pl-[35px] flex flex-col gap-4 my-4">
        <h3
          className={`cursor-pointer ${
            pathname.includes("/profile/returns") && "text-[#DB4444]"
          }`}
          onClick={() => navigate("/profile/returns")}
        >
          My Returns
        </h3>
        <h3
          className={`cursor-pointer ${
            pathname.includes("/profile/cancellations") && "text-[#DB4444]"
          }`}
          onClick={() => navigate("/profile/cancellations")}
        >
          My Cancellations
        </h3>
      </div>
      <h1 className="text-base font-semibold">My WishList</h1>
      <div className="pl-[35px] flex flex-col gap-4 my-4">
        <h3
          className={`cursor-pointer ${
            pathname.includes("/profile/wishlist") && "text-[#DB4444]"
          }`}
          onClick={() => navigate("/profile/wishlist")}
        >
          WishList
        </h3>
      </div>
    </div>
  );
};

export default SideBar;
