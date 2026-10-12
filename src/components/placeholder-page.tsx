import type { ReactNode } from "react";

type PlaceholderPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  icon: ReactNode;
};

/**
 * A small, consistent "coming soon" empty-state used by modules that are
 * planned but not yet implemented (Products, Records, Analytics, Users,
 * Settings). Reuses the dashboard look so the app feels cohesive.
 */
export function PlaceholderPage({
  eyebrow,
  title,
  description,
  icon,
}: PlaceholderPageProps) {
  return (
    <div className="wrapmate-dashboard">
      <section className="dashboard-welcome">
        <div>
          <p className="dashboard-eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </section>

      <section className="dashboard-section">
        <div className="placeholder-empty">
          <div className="placeholder-empty-icon">{icon}</div>
          <strong>Coming soon</strong>
          <span>
            This module is part of the WrapMate roadmap and will be available in
            a future update.
          </span>
        </div>
      </section>
    </div>
  );
}

PlaceholderPage.displayName = "PlaceholderPage";
