import { PRICING_NOTE } from "@/lib/config";

export interface JoinStep {
  number: string;
  title: string;
  description: string;
}

export const JOIN_STEPS: JoinStep[] = [
  { number: "01", title: "Register", description: "Reserve your place and complete your registration." },
  { number: "02", title: "Build Your Team", description: "Join with teammates, or participate independently." },
  { number: "03", title: "Build", description: "Turn your idea into a working AI-powered solution." },
  { number: "04", title: "Submit & Pitch", description: "Submit your project and present it to the judging panel." },
];

export interface EligibilityFact {
  label: string;
  value: string;
}

// "Team size" stays a placeholder range until the final format is locked;
// "Entry" and "Format" deliberately avoid asserting logistics (pricing,
// venue, hybrid structure) that haven't been decided yet.
export const ELIGIBILITY: EligibilityFact[] = [
  { label: "Who can join", value: "Students, developers, designers, founders, AI builders and innovators from around the world." },
  { label: "Team size", value: "1–4 people per team. Solo entries welcome." },
  { label: "Entry", value: PRICING_NOTE },
  { label: "Format", value: "International / Germany × India. Final format and event locations to be announced." },
  { label: "Experience", value: "Open to different skill levels." },
];
