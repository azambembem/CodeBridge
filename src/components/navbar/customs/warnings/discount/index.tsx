import { Button } from "@/components/ui/button";

const Discount = () => {
  return (
    <div className="w-full h-12 bg-black flex items-center justify-center gap-2">
      <h3 className="text-sm text-white ">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
      </h3>
      <Button variant="link" className="text-white border-white">
        Shop Now
      </Button>
    </div>
  );
};

export default Discount;
