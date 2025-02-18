import { Button } from "@/components/ui/button";

const Categories = () => {
  return (
    <div className="w-[217px] h-[344px] flex flex-col gap-4 overflow-y-auto mt-10">
      <Button variant={"link"}>
        <h3 className="w-full text-start">Woman’s Fashion</h3>
      </Button>
      <Button variant={"link"}>
        <h3 className="w-full text-start">Men’s Fashion</h3>
      </Button>
      <Button variant={"link"}>
        <h3 className="w-full text-start">Electronics</h3>
      </Button>
      <Button variant={"link"}>
        <h3 className="w-full text-start">Home & Lifestyle</h3>
      </Button>
      <Button variant={"link"}>
        <h3 className="w-full text-start">Medicine</h3>
      </Button>
      <Button variant={"link"}>
        <h3 className="w-full text-start">Sports & Outdoor</h3>
      </Button>
      <Button variant={"link"}>
        <h3 className="w-full text-start">Baby’s & Toys</h3>
      </Button>
      <Button variant={"link"}>
        <h3 className="w-full text-start">Groceries & Pets</h3>
      </Button>
      <Button variant={"link"}>
        <h3 className="w-full text-start">Health & Beauty</h3>
      </Button>
    </div>
  );
};

export default Categories;
