"use client";

import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import {
  dashboardCourses,
  dashboardModules,
  recentActivity,
  assessments,
} from "@/lib/data";
import {
  Bell,
  ChevronRight,
  Clock3,
  BookOpen,
  ClipboardCheck,
  Users,
  ArrowUpRight,
  Play,
  ShieldCheck,
  Target,
  Award,
} from "lucide-react";

export default function Dashboard() {
  const overallProgress = 65;

  return (
    <div className="app-shell">
      <Sidebar />

      <main className="main dashboard-main">
        {/* TOP BAR */}
        <header className="dashboard-topbar">
          <div>
            <p className="dashboard-kicker">
              COMMAND-X TRAINING PLATFORM
            </p>

            <h1>Dashboard</h1>

            <p className="dashboard-subtitle">
              Your defence training command center
            </p>
          </div>

          <div className="topbar-actions">
            <button className="notification-button">
              <Bell size={20} />
              <span />
            </button>

            <div className="profile">
              <div className="profile-avatar">JK</div>

              <div>
                <strong>pranav langade</strong> 
                <small>Trainee</small>
              </div>
            </div>
          </div>
        </header>

        {/* WELCOME CARD */}
        <section className="welcome-card">
          <div className="welcome-content">
            <div className="welcome-badge">
              <ShieldCheck size={15} />
              TRAINING SYSTEM ONLINE
            </div>

            <h2>
              Welcome back,
              <br />
              <span>pranav!</span>
            </h2>

            <p>
              Continue your training journey and sharpen
              your decision-making skills.
            </p>

            <Link href="/training" className="welcome-button">
              Continue Training
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="welcome-progress">
            <div className="progress-ring">
              <div>
                <strong>{overallProgress}%</strong>
                <span>Complete</span>
              </div>
            </div>

            <p>Overall Training Progress</p>
          </div>
        </section>

        {/* STAT CARDS */}
        <section className="dashboard-stats">
          <StatCard
            icon={<BookOpen />}
            label="Active Courses"
            value="3"
            text="2 in progress"
          />

          <StatCard
            icon={<ClipboardCheck />}
            label="Assessments"
            value="8"
            text="3 completed"
          />

          <StatCard
            icon={<Users />}
            label="Team Members"
            value="12"
            text="8 currently online"
          />

          <StatCard
            icon={<Award />}
            label="Achievements"
            value="7"
            text="2 this month"
          />
        </section>

        {/* MAIN GRID */}
        <div className="dashboard-content-grid">
          {/* COURSES */}
          <section className="dashboard-card courses-card">
            <CardHeader
              title="My Courses"
              subtitle="Continue where you left off"
              link="/training"
            />

            <div className="course-list">
              {dashboardCourses.map((course) => (
                <div className="course-item" key={course.id}>
                  <div className="course-icon">
                    {course.icon}
                  </div>

                  <div className="course-details">
                    <div className="course-title-row">
                      <div>
                        <span className="course-category">
                          {course.category}
                        </span>

                        <h3>{course.title}</h3>
                      </div>

                      <strong>{course.progress}%</strong>
                    </div>

                    <div className="course-progress">
                      <div
                        style={{
                          width: `${course.progress}%`,
                        }}
                      />
                    </div>

                    <div className="course-meta">
                      <span>
                        {course.completed} / {course.lessons} lessons
                      </span>

                      <Link href="/training">
                        Continue
                        <ChevronRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* RECENT ACTIVITY */}
          <section className="dashboard-card">
            <CardHeader
              title="Recent Activity"
              subtitle="Your latest training activity"
            />

            <div className="activity-list">
              {recentActivity.map((item) => (
                <div className="activity-item" key={item.id}>
                  <div
                    className={`activity-dot ${item.type}`}
                  />

                  <div className="activity-content">
                    <strong>{item.title}</strong>
                    <p>{item.description}</p>

                    <span>
                      <Clock3 size={12} />
                      {item.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* LOWER GRID */}
        <div className="dashboard-content-grid lower-grid">
          {/* TRAINING MODULES */}
          <section className="dashboard-card">
            <CardHeader
              title="Training Modules"
              subtitle="Build your operational skills"
              link="/training"
            />

            <div className="module-grid">
              {dashboardModules.map((module) => (
                <Link
                  href="/training"
                  className="module-card"
                  key={module.id}
                >
                  <div className="module-top">
                    <span>{module.number}</span>

                    <Target size={18} />
                  </div>

                  <h3>{module.title}</h3>

                  <p>{module.description}</p>

                  <div className="module-progress">
                    <div className="module-progress-label">
                      <span>{module.lessons}</span>
                      <strong>{module.progress}%</strong>
                    </div>

                    <div className="course-progress">
                      <div
                        style={{
                          width: `${module.progress}%`,
                        }}
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* QUICK STATS */}
          <section className="dashboard-card quick-stats-card">
            <CardHeader
              title="Quick Stats"
              subtitle="Your performance overview"
            />

            <div className="quick-stat">
              <div className="quick-stat-icon">
                <Target size={19} />
              </div>

              <div>
                <span>Training Accuracy</span>
                <strong>87%</strong>
              </div>

              <span className="stat-up">+8%</span>
            </div>

            <div className="quick-stat">
              <div className="quick-stat-icon">
                <Clock3 size={19} />
              </div>

              <div>
                <span>Training Time</span>
                <strong>24h 36m</strong>
              </div>

              <span className="stat-up">+3h</span>
            </div>

            <div className="quick-stat">
              <div className="quick-stat-icon">
                <Award size={19} />
              </div>

              <div>
                <span>Average Score</span>
                <strong>82 / 100</strong>
              </div>

              <span className="stat-up">+5</span>
            </div>

            <div className="ready-card">
              <div>
                <small>READY FOR ACTION?</small>

                <h3>Train Hard.</h3>
                <h3>Stay Ready.</h3>
              </div>

              <Link href="/training">
                <Play size={18} fill="currentColor" />
              </Link>
            </div>
          </section>
        </div>

        {/* ASSESSMENTS */}
        <section className="dashboard-card assessments-card">
          <CardHeader
            title="Latest Assessments"
            subtitle="Your recent assessment results"
          />

          <div className="assessment-table">
            {assessments.map((assessment) => (
              <div
                className="assessment-row"
                key={assessment.id}
              >
                <div>
                  <strong>{assessment.title}</strong>
                  <span>{assessment.subject}</span>
                </div>

                <div className="assessment-score">
                  <strong>{assessment.score}%</strong>
                  <span>{assessment.status}</span>
                </div>

                <ChevronRight size={18} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  text,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  text: string;
}) {
  return (
    <div className="dashboard-stat-card">
      <div className="dashboard-stat-icon">{icon}</div>

      <div className="dashboard-stat-info">
        <span>{label}</span>
        <strong>{value}</strong>
        <small>{text}</small>
      </div>
    </div>
  );
}

function CardHeader({
  title,
  subtitle,
  link,
}: {
  title: string;
  subtitle: string;
  link?: string;
}) {
  return (
    <div className="dashboard-card-header">
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      {link && (
        <Link href={link}>
          View All
          <ChevronRight size={15} />
        </Link>
      )}
    </div>
  );
}
