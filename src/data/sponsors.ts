export interface SponsorCategory {
  title: string;
  description: string;
  // Placeholder slots. Add { name, href, logo } entries as sponsors sign
  // on — an empty array renders `placeholderCount` "open" placeholder
  // cards instead.
  slots: { name: string; href?: string }[];
  // How many open-slot placeholders to render while `slots` is empty.
  // Title Partner is deliberately 1 — it's a singular tier, not a wall of
  // logos like the others.
  placeholderCount?: number;
}

// University Partners is the primary sponsor category for this event —
// German private universities getting exposure to ambitious Indian
// students is a core part of why Durby is organizing it — so it's
// ordered right after Title Partner, not buried further down the list.
export const SPONSOR_CATEGORIES: SponsorCategory[] = [
  { title: "Title Partner", description: "Presenting partner of Durby Global Hack.", slots: [], placeholderCount: 1 },
  { title: "University Partners", description: "German universities connecting with ambitious students from India and beyond.", slots: [] },
  { title: "Technology Partners", description: "Platform, tooling and infrastructure partners.", slots: [] },
  { title: "Community Partners", description: "Communities helping us reach builders worldwide.", slots: [] },
  { title: "Media Partners", description: "Press and media covering the event.", slots: [] },
];
