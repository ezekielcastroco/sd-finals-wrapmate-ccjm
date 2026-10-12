import { Users as UsersIcon } from "lucide-react";
import { PlaceholderPage } from "@/components/placeholder-page";

export default function Users() {
  return (
    <PlaceholderPage
      eyebrow="User Management"
      title="Users"
      description="Manage operator and admin accounts and their roles."
      icon={<UsersIcon />}
    />
  );
}
