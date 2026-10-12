import { Settings as SettingsIcon } from "lucide-react";
import { PlaceholderPage } from "@/components/placeholder-page";

export default function Settings() {
  return (
    <PlaceholderPage
      eyebrow="Preferences"
      title="Settings"
      description="Configure your WrapMate workspace, account, and preferences."
      icon={<SettingsIcon />}
    />
  );
}
