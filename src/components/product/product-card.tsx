"use client";

import { ProductWithImage } from "@/models/models";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
import { Card, CardContent } from "../ui/card";

export const ProductCard = ({
  product,
  onClick,
}: {
  product: ProductWithImage;
  onClick: () => void;
}) => {
  const imageRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const onMouseEnter = () => {
    gsap.to(imageRef.current, {
      scale: 1.15,
      rotation: 2,
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(cardRef.current, {
      y: -8,
      rotationY: 5,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const onMouseLeave = () => {
    gsap.to(imageRef.current, {
      scale: 1,
      rotation: 0,
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(cardRef.current, {
      y: 0,
      rotationY: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <div ref={cardRef} id="card" className="perspective-[1000px]">
      <Card
        className="overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer border-gray-200"
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <div id="image" ref={imageRef} className="w-full h-full">
            <Image
              src={
                product.imageUrl ?? "https://placehold.co/300x200?text=%3C/%3E"
              }
              alt={product.name ?? "product-card"}
              fill
              className="w-full h-full object-cover"
              unoptimized={!product.imageUrl}
            />
          </div>
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 text-xs tracking-wider text-gray-900">
            #{product.id}
          </div>
        </div>
        <CardContent className="p-5">
          <h3 className="text-gray-900 line-clamp-2 leading-snug">
            {product.name}
          </h3>
        </CardContent>
      </Card>
    </div>
  );
};
