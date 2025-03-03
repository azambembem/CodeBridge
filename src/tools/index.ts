import { IProduct } from "@/types/home";

export const calculateDiscountRange = (product: IProduct): number => {
  const discount_percentage = product.discount / 100;
  const price_before_discount = product.price / (1 - discount_percentage);

  return Number(price_before_discount.toFixed(0));
}


