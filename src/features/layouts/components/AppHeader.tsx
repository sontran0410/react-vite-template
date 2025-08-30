import { SidebarTrigger } from "@/components/ui/sidebar";

export default function AppHeader() {
  return (
    <header className="flex h-(--header-height) items-center border-b px-4">
      <SidebarTrigger />
    </header>
  );
}
