import { Product } from "@/api/giovankov/model/giovankov";

export type ProductWithImage = Product & {
  imageUrl: string;
};
