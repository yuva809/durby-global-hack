export interface TimelineStep {
  label: string;
  title: string;
  window: string;
  description: string;
}

// Placeholder dates — update per phase once the schedule is locked.
export const TIMELINE: TimelineStep[] = [
  {
    label: "Phase 1",
    title: "Registration",
    window: "Sep XX – Oct XX",
    description: "Applications open worldwide. Register solo or with a team.",
  },
  {
    label: "Phase 2",
    title: "Team Formation",
    window: "Oct XX",
    description: "Solo builders match up. Team channels open on Discord.",
  },
  {
    label: "Phase 3",
    title: "Preparation",
    window: "Oct XX",
    description: "Kickoff livestream, resource walkthroughs, mentor office hours.",
  },
  {
    label: "Phase 4",
    title: "Hackathon",
    window: "Duration TBA",
    description: "Build your project. Exact duration and format confirmed with registration.",
  },
  {
    label: "Phase 5",
    title: "Submission",
    window: "Final Day",
    description: "Projects, repos and demo videos due at the closing bell.",
  },
  {
    label: "Phase 6",
    title: "Judging",
    window: "Following Week",
    description: "Judges review every submission against the published criteria.",
  },
  {
    label: "Phase 7",
    title: "Winners",
    window: "Announcement",
    description: "Results announced live, prizes awarded, awards ceremony streamed globally.",
  },
];
