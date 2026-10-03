export const stats = {
  exercises: 24,
  activeTrainees: 12,
  completed: 18,
  scenarios: 8
};

export const trainees = [
  {
    id: 1,
    name: "Alpha Team",
    members: 4,
    status: "Active",
    progress: 72
  },
  {
    id: 2,
    name: "Bravo Team",
    members: 4,
    status: "Active",
    progress: 58
  },
  {
    id: 3,
    name: "Charlie Team",
    members: 4,
    status: "Standby",
    progress: 31
  }
];

export const scenarios = [
  {
    id: "SC-001",
    name: "Silent Network",
    difficulty: "Medium",
    domain: "Communication",
    duration: "15 min"
  },
  {
    id: "SC-002",
    name: "Conflicting Reports",
    difficulty: "Hard",
    domain: "Information",
    duration: "20 min"
  },
  {
    id: "SC-003",
    name: "Signal Loss",
    difficulty: "Easy",
    domain: "Communication",
    duration: "10 min"
  }
];

export const intelligence = [
  {
    id: 1,
    title: "Report Alpha",
    text: "Communication delay detected.",
    reliability: "High",
    time: "10:42"
  },
  {
    id: 2,
    title: "Report Bravo",
    text: "Conflicting information received.",
    reliability: "Medium",
    time: "10:45"
  },
  {
    id: 3,
    title: "Report Charlie",
    text: "Signal unavailable in selected area.",
    reliability: "Low",
    time: "10:47"
  }
];
