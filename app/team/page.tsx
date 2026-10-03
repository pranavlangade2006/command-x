import Sidebar from "@/components/Sidebar";
import { trainees } from "@/lib/data";

export default function Team() {
  return (
    <div className="app-shell">
      <Sidebar />

      <main className="main">
        <header className="topbar">
          <div>
            <p className="eyebrow">TEAM</p>
            <h1>Team Dashboard</h1>
            <p className="muted">Current team coordination status</p>
          </div>
        </header>

        <div className="stats-grid">
          <div className="stat-card">
            <div>
              <span>Teams</span>
              <strong>3</strong>
            </div>
          </div>

          <div className="stat-card">
            <div>
              <span>Members</span>
              <strong>12</strong>
            </div>
          </div>

          <div className="stat-card">
            <div>
              <span>Online</span>
              <strong>8</strong>
            </div>
          </div>
        </div>

        <section className="panel">
          <h2>Team Members</h2>

          {trainees.map((team) => (
            <div className="team-row large" key={team.id}>
              <div className="avatar">{team.name.charAt(0)}</div>

              <div className="team-info">
                <strong>{team.name}</strong>
                <span>{team.members} members</span>
              </div>

              <span className={`badge ${team.status.toLowerCase()}`}>
                {team.status}
              </span>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
