import { ZodUtils } from "@/utils/zod-utils";
import z from "zod";

export const ProductSchema = z.object({
  id: z.string(),
  /**
   * there's a data which name is null
   * {
   *  id: 21,
   *  name: null
   * }
   */
  name: z.string().nullable(),
});
export type Product = z.infer<typeof ProductSchema>;

export const ProductResponseSchema = ZodUtils.withResponse(ProductSchema);
export type ProductResponse = z.infer<typeof ProductResponseSchema>;

export const ImageSchema = z.object({
  id: z.array(z.string()),
  image: z.string(),
});
export type Image = z.infer<typeof ImageSchema>;

export const ImageResponseSchema = ZodUtils.withResponse(ImageSchema);
export type ImageResponse = z.infer<typeof ImageResponseSchema>;
