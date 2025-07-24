import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import Apple from "./customs/apple";
import Samsung from "./customs/samsung";
import Lg from "./customs/lg";

const Flayer = () => {
  return (
    <div className="h-[344px] w-full mt-10">
      <Carousel>
        <CarouselContent>
          <Apple />
          <Samsung />
          <Lg />
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Flayer;
