import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/features/layouts/components/AppSidebar";
import {
  createRootRouteWithContext,
  Outlet,
  useRouterState,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { PacerDevtoolsPanel } from "@tanstack/react-pacer-devtools";
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";
import { type QueryClient } from "@tanstack/react-query";
import AppHeader from "@/features/layouts/components/AppHeader";

const RootRoute: React.FC = () => {
  const isLogin = useRouterState({
    select: (s) => s.location.pathname === "/login",
  });
  if (isLogin) return <Outlet />;

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full min-h-screen flex flex-col">
        <AppHeader />
        <div className="flex-1">
          <Outlet />
        </div>
      </main>
      <TanStackDevtools
        eventBusConfig={{
          debug: false,
        }}
        plugins={[
          {
            name: "TanStack Query",
            render: <ReactQueryDevtoolsPanel />,
          },
          { name: "TanStack Pacer", render: <PacerDevtoolsPanel /> },
          {
            name: "TanStack Router",
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      ></TanStackDevtools>
    </SidebarProvider>
  );
};

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: RootRoute,
});
