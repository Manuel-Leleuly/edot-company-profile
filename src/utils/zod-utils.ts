import z from "zod";

export class ZodUtils {
  static withResponse = <D>(Codec: z.ZodType<D>) => {
    return z.object({
      data: z.array(Codec),
    });
  };
}
