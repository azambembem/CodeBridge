// import { type LucideProps, Phone } from "lucide-react"; // bu yerda {} ichida type beilgani uchun faqat bittasiga type tegishli
import type { FC, ForwardRefExoticComponent, RefAttributes } from "react"; // yani bu yerda type tashqarida bulganligi uchun {} ichidagi hammasiga tasiq qiladi.
import type { LucideProps } from "lucide-react";

type CardProps = {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGAElement>
  >;
  title: string;
};
const Card: FC<CardProps> = (props) => {
  const { icon: Icon } = props;
  return (
    <div className="h-[145px] w-full flex flex-col gap-4 items-center justify-center border border-solid border-[#0000004D] rounded-md">
      <Icon />
      {props.title}
      <h3 className="text-base">Phones</h3>
    </div>
  );
};

export default Card;
