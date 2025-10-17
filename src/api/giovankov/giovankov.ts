import { FetchUtils } from "@/utils/fetch-utils";
import { AxiosInstance } from "axios";
import {
  ImageResponse,
  ImageResponseSchema,
  ProductResponse,
  ProductResponseSchema,
} from "./model/giovankov";

export class GiovankovApi {
  static getProductList = async (network: AxiosInstance) => {
    return FetchUtils.validateResponse<ProductResponse>(
      () => network.get("/product.json"),
      ProductResponseSchema
    );
  };

  static getImageList = async (network: AxiosInstance) => {
    return FetchUtils.validateResponse<ImageResponse>(
      () => network.get("/image.json"),
      ImageResponseSchema
    );
  };
}
