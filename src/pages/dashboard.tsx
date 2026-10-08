import { Package, Clock3, CheckCircle2 } from "lucide-react";
import { useCan } from "@refinedev/core";

export const Dashboard = () => {
  const { data: canCreate } = useCan({
    resource: "orders",
    action: "create",
  });

  return (
    <div className="wrapmate-dashboard">
      <div className="wrapmate-dashboard-heading">
        <div>
          <p className="wrapmate-eyebrow">Packaging management</p>
          <h1>Order Queue</h1>
          <p className="wrapmate-muted">
            Manage incoming packaging orders and prepare them for processing.
          </p>
        </div>

        {canCreate?.can && (
          <button className="wrapmate-primary-button">
            Add order
          </button>
        )}
      </div>

      <div className="wrapmate-stat-grid">
        <div className="wrapmate-stat-card">
          <div className="wrapmate-stat-icon"><Package size={20} /></div>
          <div>
            <span>Pending orders</span>
            <strong>0</strong>
          </div>
        </div>

        <div className="wrapmate-stat-card">
          <div className="wrapmate-stat-icon"><Clock3 size={20} /></div>
          <div>
            <span>Processing</span>
            <strong>0</strong>
          </div>
        </div>

        <div className="wrapmate-stat-card">
          <div className="wrapmate-stat-icon"><CheckCircle2 size={20} /></div>
          <div>
            <span>Completed today</span>
            <strong>0</strong>
          </div>
        </div>
      </div>

      <section className="wrapmate-queue-card">
        <div className="wrapmate-section-heading">
          <div>
            <h2>Pending orders</h2>
            <p className="wrapmate-muted">
              Orders waiting to be processed will appear here.
            </p>
          </div>
          <span className="wrapmate-status-badge">0 pending</span>
        </div>

        <div className="wrapmate-empty-state">
          <Package size={36} />
          <h3>No pending orders yet</h3>
          <p>
            The order queue is ready. 
          </p>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
