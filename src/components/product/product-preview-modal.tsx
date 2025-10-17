import { ProductWithImage } from "@/models/models";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";

export const ProductPreviewModal = ({
  product,
  isOpen,
  onOpenChange,
}: {
  product: ProductWithImage;
  isOpen: boolean;
  onOpenChange: () => void;
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogTitle>{product.name}</DialogTitle>
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
          <Image
            src={
              product.imageUrl ?? "https://placehold.co/600x400?text=%3C/%3E"
            }
            alt={product.name ?? ""}
            fill
            className="w-full h-auto object-cover rounded-lg"
            unoptimized={!product.imageUrl}
          />
        </div>
        <p className="text-center text-gray-700 mt-4">{product.name}</p>
      </DialogContent>
    </Dialog>
  );
};
