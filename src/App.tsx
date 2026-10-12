import { Authenticated, Refine } from "@refinedev/core";
import { useGetIdentity, useLogout } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import routerProvider, {
  CatchAllNavigate,
  NavigateToResource,
  UnsavedChangesNotifier,
  DocumentTitleHandler,
} from "@refinedev/react-router";
import { dataProvider } from "./providers/data";
import { authProvider } from "./providers/auth";
import { useNotificationProvider } from "./components/refine-ui/notification/use-notification-provider";
import { Toaster } from "./components/refine-ui/notification/toaster";
import { ThemeProvider } from "./components/refine-ui/theme/theme-provider";
import "./App.css";
import Dashboard from "./pages/dashboard";
import Orders from "./pages/orders";
import { SignInForm } from "./components/refine-ui/form/sign-in-form";
import { SignUpForm } from "./components/refine-ui/form/sign-up-form";
import { Home, Package } from "lucide-react";
import { Layout } from "./components/refine-ui/layout/layout";

type Identity = {
  username?: string;
  role?: string;
};

function UserBar() {
  const { data: identity } = useGetIdentity<Identity>();
  const { mutate: logout } = useLogout();

  return (
    <div className="wrapmate-user-bar">
      <span>
        Logged in as <strong>{identity?.username ?? "user"}</strong>
        {identity?.role ? ` (${identity.role})` : ""}
      </span>
      <button type="button" onClick={() => logout()}>
        Log out
      </button>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ThemeProvider>
          <DevtoolsProvider>
            <Refine
              dataProvider={dataProvider}
              authProvider={authProvider}
              notificationProvider={useNotificationProvider()}
              routerProvider={routerProvider}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                projectId: "qLedav-z4lJY5-ly2aJh",
              }}
              resources={[
                {
                  name: "dashboard",
                  list: "/",
                  meta: { label: "Home", icon: <Home /> },
                },
                {
                  name: "orders",
                  list: "/orders",
                  meta: { label: "Order Queue", icon: <Package /> },
                },
              ]}
            >
              <Routes>
                {/* Protected app routes */}
                <Route
                  element={
                    <Authenticated
                      key="authenticated-routes"
                      fallback={<CatchAllNavigate to="/login" />}
                    >
                      <Layout>
                        <UserBar />
                        <Outlet />
                      </Layout>
                    </Authenticated>
                  }
                >
                  <Route index element={<Dashboard />} />
                  <Route path="/orders" element={<Orders />} />
                </Route>

                {/* Auth routes — redirect to the app if already logged in */}
                <Route
                  element={
                    <Authenticated
                      key="auth-pages"
                      fallback={<Outlet />}
                    >
                      <NavigateToResource resource="dashboard" />
                    </Authenticated>
                  }
                >
                  <Route path="/login" element={<SignInForm />} />
                  <Route path="/register" element={<SignUpForm />} />
                </Route>
              </Routes>

              <Toaster />
              <RefineKbar />
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
            <DevtoolsPanel />
          </DevtoolsProvider>
        </ThemeProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
