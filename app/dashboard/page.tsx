"use client";

import Sidebar from "@/components/Sidebar";
import { stats, trainees, scenarios } from "@/lib/data";
import {
  Activity,
  Users,
  Target,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="app-shell">
      <Sidebar />

      <main className="main">
        <header className="topbar">
          <div>
            <p className="eyebrow">COMMAND-X</p>
            <h1>Main Dashboard</h1>
            <p className="muted">
              Decision-making training environment
            </p>
          </div>

          <div className="status-pill">
            <span />
            Training System Online
          </div>
        </header>

        <section className="stats-grid">
          <Stat
            title="Total Exercises"
            value={stats.exercises}
            icon={<Target />}
          />
          <Stat
            title="Active Trainees"
            value={stats.activeTrainees}
            icon={<Users />}
          />
          <Stat
            title="Completed"
            value={stats.completed}
            icon={<CheckCircle />}
          />
          <Stat
            title="Scenarios"
            value={stats.scenarios}
            icon={<Activity />}
          />
        </section>

        <div className="dashboard-grid">
          <section className="panel">
            <div className="panel-header">
              <div>
                <h2>Active Teams</h2>
                <p>Current training sessions</p>
              </div>
              <Link href="/team">View All</Link>
            </div>

            <div className="team-list">
              {trainees.map((team) => (
                <div className="team-row" key={team.id}>
                  <div className="avatar">{team.name.charAt(0)}</div>

                  <div className="team-info">
                    <strong>{team.name}</strong>
                    <span>{team.members} members</span>
                  </div>

                  <div className="progress-wrap">
                    <div className="progress">
                      <div style={{ width: `${team.progress}%` }} />
                    </div>
                    <small>{team.progress}%</small>
                  </div>

                  <span className={`badge ${team.status.toLowerCase()}`}>
                    {team.status}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="panel">
            <div className="panel-header">
              <div>
                <h2>Available Scenarios</h2>
                <p>Training scenarios</p>
              </div>
            </div>

            {scenarios.map((scenario) => (
              <div className="scenario-card" key={scenario.id}>
                <div>
                  <span className="scenario-id">{scenario.id}</span>
                  <h3>{scenario.name}</h3>
                  <p>
                    {scenario.domain} · {scenario.duration}
                  </p>
                </div>

                <span className="difficulty">
                  {scenario.difficulty}
                </span>
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}

function Stat({
  title,
  value,
  icon
}: {
  title: string;
  value: number;
  icon: React.ReactNode;
}) {
  return (
    <div className="stat-card">
      <div className="stat-icon">{icon}</div>
      <div>
        <span>{title}</span>
        <strong>{value}</strong>
      </div>
    </div>
  );
}
