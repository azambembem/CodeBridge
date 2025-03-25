import { SendHorizontal } from "lucide-react";
import { Input } from "../ui/input";

const Footer = () => {
  return (
    <div className="bg-black h-[440px] flex flex-col">
      <div className="flex-1 flex items-start justify-between gap-[50px] w-[90%] m-auto pt-[80px]">
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-white">Exclusive</h1>
          <div className="mt-6">
            <h1 className="text-xl font-semibold text-white">Subscribe</h1>
            <div className="mt-6 flex flex-col gap-4">
              <p className="text-base text-white">
                Get 10% off your first order
              </p>
              <div className="relative ">
                <Input placeholder="Enter your email" className="tex-white" />
                <SendHorizontal
                  className="absolute right-3 top-2"
                  color="#fff"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-white">Support</h1>
          <div className="mt-6 flex flex-col gap-6">
            <h1 className="text-base font-semibold text-white">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </h1>
            <h1 className="text-base font-semibold text-white">
              exclusive@gmail.com
            </h1>
            <h1 className="text-base font-semibold text-white">
              +88015-88888-9999
            </h1>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-white">Account</h1>
          <div className="mt-6 flex flex-col gap-4">
            <h1 className="text-base font-semibold text-white">My Account</h1>
            <h1 className="text-base font-semibold text-white">
              Login / Register
            </h1>
            <h1 className="text-base font-semibold text-white">Cart</h1>
            <h1 className="text-base font-semibold text-white">Wishlist</h1>
            <h1 className="text-base font-semibold text-white">Shop</h1>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-white">Quick Link</h1>
          <div className="mt-6 flex flex-col gap-4">
            <h1 className="text-base font-semibold text-white">
              Privacy Policy
            </h1>
            <h1 className="text-base font-semibold text-white">Terms Of Use</h1>
            <h1 className="text-base font-semibold text-white">FAQ</h1>
            <h1 className="text-base font-semibold text-white">Contact</h1>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-white">Download App</h1>
          <div className="mt-6 flex flex-col gap-4">
            <p className="text-base font-semibold text-white">
              Save $3 with App New User Only
            </p>
            <div className="flex gap-2">
              <img
                src="https://www.qrcode-monkey.com/img/blog/qrcode-classic.png"
                alt=""
                className="w-[86px] h-[96px]"
              />
              <div className="flex flex-col gap-1">
                <img
                  src="https://cdn.pixabay.com/photo/2021/09/22/16/07/google-play-6647242_640.png"
                  alt=""
                  className="w-[104px] h-[46px]  border-solid border-2 border-white"
                />
                <div className="flex flex-row gap-1">
                  <img
                    src="https://cdn.pixabay.com/photo/2021/09/22/16/07/google-play-6647242_640.png"
                    alt=""
                    className="w-[104px] h-[46px]  border-solid border-2 border-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[70px] w-full border-t border-solid border-[#59595991] flex items-center justify-center">
        <h3 className="text-base text-white">
          &copy; Copyright Rimel {new Date().getFullYear()}. 2022. All right
          reserved
        </h3>
      </div>
    </div>
  );
};

export default Footer;
