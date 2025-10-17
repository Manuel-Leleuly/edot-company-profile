import { ProductWithImage } from "@/models/models";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import Image from "next/image";

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
        <div className="relative">
          <Image
            src={product.imageUrl}
            alt={product.name ?? ""}
            fill
            className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
          />
        </div>
        <p className="text-center text-gray-700 mt-4">{product.name}</p>
      </DialogContent>
    </Dialog>
  );
};
