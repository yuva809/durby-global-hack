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

// University Partners is a priority sponsor category — the event is
// global, but private universities (German institutions in particular)
// get real value from reaching ambitious international students, including
// strong outreach markets like India — so it's ordered right after Title
// Partner, not buried further down the list.
export const SPONSOR_CATEGORIES: SponsorCategory[] = [
  { title: "Title Partner", description: "Presenting partner of Durby Global Hack.", slots: [], placeholderCount: 1 },
  { title: "University Partners", description: "Private universities — including in Germany — connecting with ambitious international students, particularly in markets like India.", slots: [] },
  { title: "Technology Partners", description: "Platform, tooling and infrastructure partners.", slots: [] },
  { title: "Community Partners", description: "Communities helping us reach builders worldwide.", slots: [] },
  { title: "Media Partners", description: "Press and media covering the event.", slots: [] },
];
