"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Target,
  Users,
  GraduationCap,
  FileBarChart,
  Settings
} from "lucide-react";

const menu = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Training", href: "/training", icon: Target },
  { name: "Instructor", href: "/instructor", icon: GraduationCap },
  { name: "Team", href: "/team", icon: Users },
  { name: "AAR Reports", href: "/aar", icon: FileBarChart },
  { name: "Settings", href: "#", icon: Settings }
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-logo">CX</div>
        <div>
          <h2>COMMAND-X</h2>
          <span>Training System</span>
        </div>
      </div>

      <nav>
        {menu.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`nav-item ${active ? "active" : ""}`}
            >
              <Icon size={19} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="sidebar-bottom">
        <div className="system-online">
          <span />
          System Online
        </div>
        <small>Training Environment</small>
      </div>
    </aside>
  );
}
