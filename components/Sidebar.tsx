"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Target,
  Users,
  GraduationCap,
  FileBarChart,
  Settings,
  Shield,
} from "lucide-react";

const menu = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Training",
    href: "/training",
    icon: Target,
  },
  {
    name: "Instructor",
    href: "/instructor",
    icon: GraduationCap,
  },
  {
    name: "Team",
    href: "/team",
    icon: Users,
  },
  {
    name: "AAR Reports",
    href: "/aar",
    icon: FileBarChart,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-logo">
          <Shield size={22} strokeWidth={2.5} />
        </div>

        <div>
          <h2>COMMAND-X</h2>
          <span>Defence Trainer</span>
        </div>
      </div>

      <div className="nav-label">MAIN MENU</div>

      <nav className="sidebar-nav">
        {menu.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href ||
            (item.href !== "/dashboard" &&
              pathname.startsWith(item.href));

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`nav-item ${
                active ? "active" : ""
              }`}
            >
              <Icon size={19} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="sidebar-spacer" />

      <div className="sidebar-status">
        <div className="status-title">
          <span className="online-dot" />
          System Online
        </div>

        <p>Training environment ready</p>
      </div>

      <Link href="#" className="settings-link">
        <Settings size={18} />
        Settings
      </Link>
    </aside>
  );
}
