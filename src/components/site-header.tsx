import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "./layout/app-layout/ThemeToggle";
import NavProfile from "./layout/app-layout/NavProfile";
import NavNotification from "./layout/app-layout/NavNotification";

export function SiteHeader() {
  return (
    <header className="sticky top-0 bg-accent/90 z-50  flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="relative flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1 md:-ml-10 cursor-pointer bg-card shadow" />

        {/* <h1 className="text-base font-medium">Documents</h1> */}
        <div className="ml-auto flex items-center gap-3">
          <ThemeToggle />
          <NavNotification />
          <NavProfile />
        </div>
      </div>
    </header>
  );
}
