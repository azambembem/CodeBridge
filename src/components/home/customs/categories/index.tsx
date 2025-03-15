import { Button } from "@/components/ui/button";
import { useHomeCache } from "@/services/home";
import Loading from "./loading";

const Categories = () => {
  const {
    categories: { data: categories, isLoading, isError }
  } = useHomeCache(); // faeture.ts ichidagi const ichidagi useHomeCachedan keliyapti

  // birinchi categories feature.ts type HomeCache ichidagidan keliyapti

  if (isLoading || isError) return <Loading />; // yani bizda categorylarni chaqirishdan oldin buladigan holat

  /*
  Yani biz pastda map qilish orqali bir nechta Buttonlarni 
  biitada ishlatib quyib pastdagilarini delete qilib taylayapmiz
*/

  return (
    <div className="w-[217px] h-[344px] flex flex-col gap-4 overflow-y-auto mt-10">
      {categories?.map((category) => (
        <Button variant={"link"} key={category._id}>
          <h3 className="w-full text-start">{category.name}</h3>
        </Button>
      ))}

      {/* <Button variant={"link"}>
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
      </Button> */}
    </div>
  );
};

export default Categories;
