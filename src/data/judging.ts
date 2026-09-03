export interface JudgingCriterion {
  label: string;
  weight: number;
  description: string;
}

// Weights should sum to 100 — the section doesn't enforce it, so keep it
// honest by hand when editing.
export const JUDGING_CRITERIA: JudgingCriterion[] = [
  { label: "Technical Execution", weight: 25, description: "Does it work, and is it built well?" },
  { label: "Innovation", weight: 25, description: "How original is the approach or idea?" },
  { label: "Impact", weight: 20, description: "Would this actually solve the problem it sets out to solve?" },
  { label: "User Experience", weight: 15, description: "Is it usable, considered, and well designed?" },
  { label: "Presentation", weight: 15, description: "How clearly is the idea communicated in the pitch?" },
];
