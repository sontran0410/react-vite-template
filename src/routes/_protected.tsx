import { SidebarProvider } from "@/components/ui/sidebar";
import AppHeader from "@/features/layouts/components/AppHeader";
import { AppSidebar } from "@/features/layouts/components/AppSidebar";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full min-h-screen flex flex-col">
        <AppHeader />
        <div className="flex-1">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
  //   return <Outlet />;
}
