import Link from "next/link";
import type { ReactNode } from "react";

interface NavItemProps {
  icon: ReactNode;
  label: string;
  href?: string;
  active?: boolean;
  onClick?: () => void;
}

const NavItem = ({ icon, label, href = "#", active = false, onClick }: NavItemProps) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
        active
          ? "bg-blue-50 text-blue-600"
          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
      }`}
    >
      <span
        className={`shrink-0 ${active ? "text-blue-600" : "text-gray-400"}`}
      >
        {icon}
      </span>
      {label}
    </Link>
  );
};

export default NavItem;
