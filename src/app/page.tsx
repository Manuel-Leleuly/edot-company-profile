import { GiovankovApi } from "@/api/giovankov/giovankov";
import { Hero } from "@/components/hero";
import { ProductSection } from "@/components/product/product-section";
import { NetworkUtils } from "@/utils/network-utils";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default async function HomePage() {
  const network = NetworkUtils.create();
  const products = await GiovankovApi.getProductList(network);
  const images = await GiovankovApi.getImageList(network);

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProductSection products={products.data} images={images.data} />
    </div>
  );
}
