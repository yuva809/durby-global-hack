export interface Person {
  name: string;
  role: string;
  company: string;
  expertise: string;
  initials: string;
}

// Placeholder roster — add/remove entries freely, nothing else depends on
// a fixed count. Swap in real photos by rendering an <Image> instead of
// the initials avatar once headshots are available.
export const JUDGES: Person[] = [
  { name: "Alex Rivera", role: "Head of AI", company: "Durby", expertise: "Applied ML, AI systems", initials: "AR" },
  { name: "Sofia Bergström", role: "VP Product", company: "Independent", expertise: "Product strategy, UX", initials: "SB" },
  { name: "Daniel Osei", role: "Founder", company: "Independent", expertise: "Startups, product strategy", initials: "DO" },
  { name: "Mei Lin Tan", role: "Engineering Director", company: "Independent", expertise: "Platform, infrastructure", initials: "MT" },
];

export const MENTORS: Person[] = [
  { name: "Jonas Weber", role: "Senior Engineer", company: "Durby", expertise: "Backend systems, architecture", initials: "JW" },
  { name: "Priya Nair", role: "Design Lead", company: "Durby", expertise: "Product design, prototyping", initials: "PN" },
  { name: "Marco Ferrari", role: "AI Researcher", company: "Independent", expertise: "LLMs, agents", initials: "MF" },
  { name: "Lena Kowalski", role: "Growth Advisor", company: "Independent", expertise: "Go-to-market, pitching", initials: "LK" },
];
