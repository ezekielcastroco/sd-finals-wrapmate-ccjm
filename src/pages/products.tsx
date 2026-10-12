import { Tag } from "lucide-react";
import { PlaceholderPage } from "@/components/placeholder-page";

export default function Products() {
  return (
    <PlaceholderPage
      eyebrow="Product Management"
      title="Products"
      description="Manage product records — name, SKU, and box dimensions (W × H)."
      icon={<Tag />}
    />
  );
}
