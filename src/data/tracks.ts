export interface Track {
  number: string;
  title: string;
  description: string;
  detail: string;
}

// The challenge tracks. Broad and technology-agnostic on purpose — this
// is an AI hackathon Durby organizes, not a Durby product challenge:
// there is no Durby API/platform track and no requirement to build with
// Durby's own technology. Edit freely — order, count and copy are all
// safe to change; nothing else in the app depends on a fixed number of
// tracks.
export const TRACKS: Track[] = [
  {
    number: "01",
    title: "AI for Business",
    description: "Build AI solutions that solve meaningful business problems.",
    detail: "Operations, productivity, decision-making, automation — anything that makes a business run smarter, in any industry.",
  },
  {
    number: "02",
    title: "AI for Education",
    description: "Reimagine how people learn, teach and prepare for the future.",
    detail: "Personalized learning, accessibility, skills training, the tools teachers and students actually need.",
  },
  {
    number: "03",
    title: "AI for Society",
    description: "Build technology addressing meaningful real-world social challenges.",
    detail: "Public good, sustainability, accessibility, community impact — problems worth solving beyond the balance sheet.",
  },
  {
    number: "04",
    title: "AI for Creativity",
    description: "Use AI to transform design, media, content, entertainment and creative work.",
    detail: "New tools and formats for creators — not replacing creativity, extending what one person or team can make.",
  },
  {
    number: "05",
    title: "Open Innovation",
    description: "No restrictions. Build something genuinely new.",
    detail: "Any technology, any use of AI. If it doesn't fit the tracks above, it belongs here.",
  },
];
