export const stats = {
  exercises: 24, 
  activeTrainees: 12,
  completed: 18,
  scenarios: 8,
};
 
export const trainees = [
  {
    id: 1,
    name: "Alpha Team",
    members: 4,
    status: "Active",
    progress: 72,
  },
  {
    id: 2,
    name: "Bravo Team",
    members: 4,
    status: "Active",
    progress: 58,
  },
  {
    id: 3,
    name: "Charlie Team",
    members: 4,
    status: "Standby",
    progress: 31,
  },
];

export const scenarios = [
  {
    id: "SC-001",
    name: "Silent Network",
    difficulty: "Medium",
    domain: "Communication",
    duration: "15 min",
  },
  {
    id: "SC-002",
    name: "Conflicting Reports",
    difficulty: "Hard",
    domain: "Information",
    duration: "20 min",
  },
  {
    id: "SC-003",
    name: "Signal Loss",
    difficulty: "Easy",
    domain: "Communication",
    duration: "10 min",
  },
];

export const intelligence = [
  {
    id: 1,
    title: "Report Alpha",
    text: "Communication delay detected.",
    reliability: "High",
    time: "10:42",
  },
  {
    id: 2,
    title: "Report Bravo",
    text: "Conflicting information received.",
    reliability: "Medium",
    time: "10:45",
  },
  {
    id: 3,
    title: "Report Charlie",
    text: "Signal unavailable in selected area.",
    reliability: "Low",
    time: "10:47",
  },
];

export const dashboardCourses = [
  {
    id: 1,
    title: "Situational Awareness",
    category: "Core Training",
    progress: 82,
    lessons: 12,
    completed: 10,
    icon: "◈",
  },
  {
    id: 2,
    title: "Threat Response",
    category: "Advanced Training",
    progress: 64,
    lessons: 10,
    completed: 6,
    icon: "⬢",
  },
  {
    id: 3,
    title: "Decision Making",
    category: "Leadership",
    progress: 48,
    lessons: 8,
    completed: 4,
    icon: "◎",
  },
];

export const recentActivity = [
  {
    id: 1,
    title: "Completed Situational Awareness",
    description: "Module 8 completed successfully",
    time: "12 min ago",
    type: "success",
  },
  {
    id: 2,
    title: "Assessment submitted",
    description: "Threat Response Assessment",
    time: "1 hour ago",
    type: "info",
  },
  {
    id: 3,
    title: "Training session started",
    description: "Decision Making — Scenario SC-002",
    time: "3 hours ago",
    type: "training",
  },
  {
    id: 4,
    title: "New training module available",
    description: "Advanced Threat Recognition",
    time: "Yesterday",
    type: "new",
  },
];

export const assessments = [
  {
    id: 1,
    title: "Threat Response Assessment",
    subject: "Threat Response",
    score: 86,
    status: "Passed",
  },
  {
    id: 2,
    title: "Decision Making Assessment",
    subject: "Decision Making",
    score: 78,
    status: "Passed",
  },
  {
    id: 3,
    title: "Situational Awareness",
    subject: "Situational Awareness",
    score: 92,
    status: "Passed",
  },
];

export const dashboardModules = [
  {
    id: 1,
    number: "01",
    title: "Situational Awareness",
    description:
      "Identify risks, analyse surroundings and maintain operational awareness.",
    progress: 82,
    lessons: "10 / 12 lessons",
  },
  {
    id: 2,
    number: "02",
    title: "Threat Response",
    description:
      "Learn structured response procedures for changing threat conditions.",
    progress: 64,
    lessons: "6 / 10 lessons",
  },
  {
    id: 3,
    number: "03",
    title: "Decision Making",
    description:
      "Improve decision quality under pressure and limited information.",
    progress: 48,
    lessons: "4 / 8 lessons",
  },
];
