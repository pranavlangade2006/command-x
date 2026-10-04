"use client";

import Sidebar from "@/components/Sidebar";

export default function AAR() { 
  return (
    <div className="app-shell">
      <Sidebar />

      <main className="main">
        <header className="topbar">
          <div>
            <p className="eyebrow">AFTER ACTION REVIEW</p>
            <h1>AAR Reports</h1>
            <p className="muted">
              Training exercise performance analysis
            </p>
          </div>

          <button
            className="primary-button"
            onClick={() => window.print()}
          >
            Export Report
          </button>
        </header>

        <section className="stats-grid">
          <div className="stat-card">
            <div>
              <span>Decision Accuracy</span>
              <strong>82%</strong>
            </div>
          </div>

          <div className="stat-card">
            <div>
              <span>Avg Response</span>
              <strong>01:42</strong>
            </div>
          </div>

          <div className="stat-card">
            <div>
              <span>Decisions</span>
              <strong>14</strong>
            </div>
          </div>

          <div className="stat-card">
            <div>
              <span>Exercise Score</span>
              <strong>78</strong>
            </div>
          </div>
        </section>

        <section className="panel">
          <h2>Decision Timeline</h2>

          {[
            ["10:42", "Communication degradation detected"],
            ["10:45", "Conflicting report received"],
            ["10:47", "Information request submitted"],
            ["10:50", "Decision submitted"],
            ["10:54", "Exercise completed"],
          ].map(([time, text]) => (
            <div className="timeline-item" key={time}>
              <strong>{time}</strong>
              <span>{text}</span>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
