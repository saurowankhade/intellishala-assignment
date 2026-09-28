"use client";

import { useState, type ReactNode } from "react";
import Sidebar from "./Sidebar";
import { Button } from "@/components/ui/Button";
import { Close, Menu } from "@/components/icons";
import Logo from "./Logo";

interface DashboardLayoutProps {
  activeKey?: string;
  children?: ReactNode;
}

const DashboardLayout = ({ activeKey, children }: DashboardLayoutProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <div className="hidden h-screen shrink-0 lg:block">
        <Sidebar activeKey={activeKey} />
      </div>

      <div
        className={`fixed inset-0 z-40 lg:hidden ${
          drawerOpen ? "" : "pointer-events-none"
        }`}
        aria-hidden={!drawerOpen}
      >
        <div
          onClick={closeDrawer}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            drawerOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          className={`absolute inset-y-0 left-0 w-64 transition-transform duration-300 ${
            drawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Button.Gray
            flat
            small
            iconOnly
            onClick={closeDrawer}
            aria-label="Close menu"
            className="absolute right-3 top-3 z-10"
          >
            <Close size={20} />
          </Button.Gray>
          <Sidebar activeKey={activeKey} onNavigate={closeDrawer} />
        </div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <header className="flex shrink-0 items-center gap-3 border-b border-gray-200 bg-white px-4 py-3 lg:hidden">
          <Button.Gray
            flat
            small
            iconOnly
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </Button.Gray>
          <Logo />
        </header>

        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
