import Logo from "./Logo";
import WorkspaceCard from "./WorkspaceCard";
import NavItem from "./NavItem";
import SignOutButton from "./SignOutButton";
import { NAV_LINKS, DEMO_PROFILE } from "@/utils/constants";

interface SidebarProps {
  activeKey?: string;
  onNavigate?: () => void;
}

const Sidebar = ({ activeKey = "my-tests", onNavigate }: SidebarProps) => {
  return (
    <aside className="flex h-full w-64 shrink-0 flex-col bg-white">
      <div className="flex flex-col gap-4 p-4">
        <Logo />
        <WorkspaceCard name={DEMO_PROFILE.workspace} role={DEMO_PROFILE.role} />
      </div>

      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 pb-4">
        {NAV_LINKS.map((link) => {
          const Icon = link.icon;
          return (
            <NavItem
              key={link.key}
              icon={<Icon size={20} />}
              label={link.label}
              href={link.href}
              active={link.key === activeKey}
              onClick={onNavigate}
            />
          );
        })}
      </nav>

      <div className="mt-auto flex flex-col gap-6 p-4">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-200 text-sm font-semibold text-gray-600">
            {DEMO_PROFILE.initials}
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-gray-900">
              {DEMO_PROFILE.name}
            </p>
            <p className="truncate text-xs text-gray-400">
              {DEMO_PROFILE.email}
            </p>
          </div>
        </div>
        <SignOutButton onClick={onNavigate} />
      </div>
    </aside>
  );
};

export default Sidebar;
