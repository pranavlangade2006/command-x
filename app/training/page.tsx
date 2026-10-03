"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { intelligence } from "@/lib/data";

export default function Training() {
  const [decision, setDecision] = useState("");
  const [confidence, setConfidence] = useState(50);

  return (
    <div className="app-shell">
      <Sidebar />

      <main className="main">
        <header className="topbar">
          <div>
            <p className="eyebrow">TRAINEE MODE</p>
            <h1>Training Dashboard</h1>
            <p className="muted">Scenario: Silent Network</p>
          </div>

          <div className="timer">14:32</div>
        </header>

        <div className="training-layout">
          <section className="panel map-panel">
            <div className="panel-header">
              <div>
                <h2>Situation Overview</h2>
                <p>Training map — synthetic environment</p>
              </div>

              <span className="badge active">LIVE</span>
            </div>

            <div className="fake-map">
              <div className="map-grid" />

              <div className="map-point point-a">A</div>
              <div className="map-point point-b">B</div>
              <div className="map-point point-c">C</div>

              <div className="map-center">
                TRAINING<br />AREA
              </div>
            </div>
          </section>

          <section className="panel">
            <div className="panel-header">
              <div>
                <h2>Communication</h2>
                <p>Current system status</p>
              </div>
            </div>

            <div className="communication-status">
              <div>
                <span>Network</span>
                <strong>DEGRADED</strong>
              </div>

              <div className="signal-bars">
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>

            <div className="uncertainty">
              <span>Situational Uncertainty</span>
              <strong>62%</strong>
              <div className="progress">
                <div style={{ width: "62%" }} />
              </div>
            </div>

            <h3 className="section-title">Intelligence</h3>

            {intelligence.map((item) => (
              <div className="intel-card" key={item.id}>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
                <span>{item.reliability}</span>
              </div>
            ))}
          </section>
        </div>

        <section className="panel decision-panel">
          <div className="panel-header">
            <div>
              <h2>Decision</h2>
              <p>Select your response and provide reasoning.</p>
            </div>
          </div>

          <div className="decision-buttons">
            {[
              "Continue Mission",
              "Request Information",
              "Hold Position",
              "Change Plan"
            ].map((item) => (
              <button
                key={item}
                className={decision === item ? "selected" : ""}
                onClick={() => setDecision(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <textarea
            placeholder="Enter your decision rationale..."
          />

          <div className="confidence-row">
            <label>
              Confidence: <strong>{confidence}%</strong>
            </label>

            <input
              type="range"
              min="0"
              max="100"
              value={confidence}
              onChange={(e) => setConfidence(Number(e.target.value))}
            />
          </div>

          <button className="primary-button">
            Submit Decision
          </button>
        </section>
      </main>
    </div>
  );
}
