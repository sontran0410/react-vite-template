import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { PacerDevtoolsPanel } from "@tanstack/react-pacer-devtools";
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";
import { type QueryClient } from "@tanstack/react-query";

const RootRoute: React.FC = () => {
  return (
    <>
      <Outlet />
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
    </>
  );
};

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: RootRoute,
});
