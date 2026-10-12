import { Authenticated, Refine } from "@refinedev/core";
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
import Products from "./pages/products";
import Records from "./pages/records";
import Analytics from "./pages/analytics";
import Users from "./pages/users";
import Settings from "./pages/settings";
import { SignInForm } from "./components/refine-ui/form/sign-in-form";
import { SignUpForm } from "./components/refine-ui/form/sign-up-form";
import { Home, Package, Tag, Table, BarChart3, Users as UsersIcon } from "lucide-react";
import { Layout } from "./components/refine-ui/layout/layout";

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
                  meta: { label: "Dashboard", icon: <Home /> },
                },
                {
                  name: "orders",
                  list: "/orders",
                  meta: { label: "Order Queue", icon: <Package /> },
                },
                {
                  name: "products",
                  list: "/products",
                  meta: { label: "Products", icon: <Tag /> },
                },
                {
                  name: "records",
                  list: "/records",
                  meta: { label: "Records", icon: <Table /> },
                },
                {
                  name: "analytics",
                  list: "/analytics",
                  meta: { label: "Analytics", icon: <BarChart3 /> },
                },
                {
                  name: "users",
                  list: "/users",
                  meta: { label: "Users", icon: <UsersIcon /> },
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
                        <Outlet />
                      </Layout>
                    </Authenticated>
                  }
                >
                  <Route index element={<Dashboard />} />
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/records" element={<Records />} />
                  <Route path="/analytics" element={<Analytics />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/settings" element={<Settings />} />
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
