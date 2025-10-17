import { AxiosResponse } from "axios";
import z from "zod";

export class FetchUtils {
  static validateResponse = async <D>(
    networkCall: () => Promise<AxiosResponse<D>>,
    Codec: z.ZodType<D>
  ) => {
    const response = await networkCall();
    return Codec.parse(response.data);
  };
}
