"use client";

import { Image, Product } from "@/api/giovankov/model/giovankov";
import { ProductCard } from "./product-card";
import { useState } from "react";
import { ProductWithImage } from "@/models/models";
import { ProductPreviewModal } from "./product-preview-modal";

export const ProductSection = ({
  products,
  images,
}: {
  products: Product[];
  images: Image[];
}) => {
  const [selectedProduct, setSelectedProduct] =
    useState<ProductWithImage | null>(null);

  return (
    <>
      <section id="product" className="py-24 md:py-40 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="text-center mb-20">
            <div className="mb-4">
              <span className="uppercase tracking-[0.2em] text-xs text-gray-500">
                Product Portfolio
              </span>
            </div>
            <h2
              id="heading"
              className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-gray-900 mb-6"
            >
              Our Products
            </h2>
            <p
              id="subtitle"
              className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            >
              Discover our comprehensive range of innovative products designed
              to meet your needs and exceed your expectations.
            </p>
          </div>

          <div
            id="grid"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8"
          >
            {products.map((product) => {
              const productWithImage: ProductWithImage = {
                ...product,
                imageUrl:
                  images.find((image) => image.id.includes(product.id))
                    ?.image ?? "",
              };
              return (
                <ProductCard
                  key={product.id}
                  product={productWithImage}
                  onClick={() => setSelectedProduct(productWithImage)}
                />
              );
            })}
          </div>
        </div>
      </section>

      {selectedProduct && (
        <ProductPreviewModal
          isOpen={!!selectedProduct}
          product={selectedProduct}
          onOpenChange={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
};
