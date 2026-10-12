import { Table } from "lucide-react";
import { PlaceholderPage } from "@/components/placeholder-page";

export default function Records() {
  return (
    <PlaceholderPage
      eyebrow="Table View"
      title="Records"
      description="Historical log of completed packaging runs — order ID, SKU, box dimensions, protection level, target length, and timestamp."
      icon={<Table />}
    />
  );
}
