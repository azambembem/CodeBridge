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
                src="https://s3-alpha-sig.figma.com/img/9913/87c0/5dd6d44594e01b675513068803e2426d?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lEeT2i7TvRlCMIEx75QqFkd1VAHY7zAu0xYuKd~MLE5na9c~OsVxgrH-12uKHgESVPnYoQBG~QxLALnpZ9-baF0w0cM-nSFL9b8NEtskiPUl3lomWtjTBDfDZsdsLay36btKg56XnsVs0GwVzzdl45cj0BE8L2Zyfa1gVLU3JQkiK-CdYZaWxrDO-9Z5qXpyo-ST5A6hjtFkOFD-2CZFTIio5Rbu31qKlI6KolAy6~JWxrE3g-XqGJbkb0AaJm2oYBSCrUsusHO0br748JfQWWiFCrNULnzdMfiQrhUZ~yoheB8AxmxUVTasHXaHc-t0Jz1QVyyc0nkY4b2oyxL5JQ__"
                alt=""
                className="w-[76px] h-[76px]"
              />
              <div className="flex flex-col gap-1">
                <img
                  src="https://s3-alpha-sig.figma.com/img/a61d/4c71/10b18ab55a1e1a07ebf54a46ebb07284?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GlFnWLVyTZeQP3poqeFA8uqviLZCtZjCY8DxlL3UCtTLTi3v4NRVyqGezs6qT9CLDXJ0dSxdDL7DoGWAEILsvfu~-6yXUuQKU16pEF906osrjoY7unBlR6Qql4yGwmUjeM6CDcS-2b~KcLyJs7CBQ~zkjNgSD-egOqTYMgiDXnpcJ4FXyKaJjM6g-UeA2Gg8aYWZnnwHQRo0igrL5R7t3vLnYgZjh8gAhkLPvUkStYemyZ0dse2Dm9v5aVvMVJWCshFB7VNyuAkvTK6qAn98W5lkxNZJmCxq1GlTSDzLYcOznK-zlZ4aYolOfW3ywGs7ZHuOTGCV-Pj2WJDBB18LUg__"
                  alt=""
                  className="w-[104px]"
                />
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
