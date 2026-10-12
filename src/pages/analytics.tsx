import { BarChart3 } from "lucide-react";
import { PlaceholderPage } from "@/components/placeholder-page";

export default function Analytics() {
  return (
    <PlaceholderPage
      eyebrow="Plot View"
      title="Analytics"
      description="Charts for plastic waste reduction and material usage across SKU batches."
      icon={<BarChart3 />}
    />
  );
}
