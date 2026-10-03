"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { trainees, scenarios } from "@/lib/data";

export default function Instructor() {
  const [running, setRunning] = useState(false);
  const [events, setEvents] = useState<string[]>([]);

  function injectEvent(event: string) {
    setEvents((old) => [event, ...old]);
  }

  return (
    <div className="app-shell">
      <Sidebar />

      <main className="main">
        <header className="topbar">
          <div>
            <p className="eyebrow">INSTRUCTOR MODE</p>
            <h1>Instructor Dashboard</h1>
            <p className="muted">
              Configure and monitor training exercises
            </p>
          </div>

          <button
            className={running ? "danger-button" : "primary-button"}
            onClick={() => setRunning(!running)}
          >
            {running ? "Stop Exercise" : "Start Exercise"}
          </button>
        </header>

        <div className="dashboard-grid">
          <section className="panel">
            <h2>Scenario Configuration</h2>

            <label className="field-label">Scenario</label>
            <select>
              {scenarios.map((s) => (
                <option key={s.id}>{s.name}</option>
              ))}
            </select>

            <label className="field-label">Difficulty</label>
            <select>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>

            <div className="event-grid">
              {[
                "Communication Delay",
                "Signal Dropout",
                "Conflicting Report",
                "Information Blackout"
              ].map((event) => (
                <button
                  key={event}
                  onClick={() => injectEvent(event)}
                >
                  + {event}
                </button>
              ))}
            </div>
          </section>

          <section className="panel">
            <h2>Trainee Monitoring</h2>

            {trainees.map((team) => (
              <div className="monitor-row" key={team.id}>
                <div>
                  <strong>{team.name}</strong>
                  <span>{team.members} trainees</span>
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
          </section>
        </div>

        <section className="panel">
          <h2>Injected Events</h2>

          {events.length === 0 ? (
            <p className="empty">No events injected yet.</p>
          ) : (
            events.map((event, index) => (
              <div className="event-log" key={index}>
                <span>EVENT</span>
                {event}
              </div>
            ))
          )}
        </section>
      </main>
    </div>
  );
}
