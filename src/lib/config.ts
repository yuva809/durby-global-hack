// Single source of truth for every value that will need to change between
// now and launch — registration link, event date, contact/social links.
// Nothing in components should hardcode these; import from here instead.

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3010").replace(/\/$/, "");
export const DURBY_URL = (process.env.NEXT_PUBLIC_DURBY_URL ?? "https://durby.tech").replace(/\/$/, "");

// Swap this one value once the real registration platform (Luma, Devpost,
// Typeform...) is live. Every "Register" CTA in the app reads this.
export const REGISTRATION_URL = process.env.NEXT_PUBLIC_REGISTRATION_URL ?? "https://forms.durby.tech/global-hack";

// Event dates (and duration) are not decided yet. EVENT_START/EVENT_END
// below are placeholder values only — EVENT_DATE_CONFIRMED gates whether
// the site is allowed to act on them. The Hero renders a live countdown
// only when this is "true"; until then it shows a "dates announced soon"
// placeholder instead of counting down to a made-up date. Flip it once a
// real date is set, in the same env var pass that sets EVENT_START.
export const EVENT_DATE_CONFIRMED = process.env.NEXT_PUBLIC_EVENT_DATE_CONFIRMED === "true";
export const EVENT_START = process.env.NEXT_PUBLIC_EVENT_START ?? "2026-11-13T09:00:00+00:00";
export const EVENT_END = process.env.NEXT_PUBLIC_EVENT_END ?? "2026-11-15T18:00:00+00:00";

export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hack@durby.tech";
export const DISCORD_URL = process.env.NEXT_PUBLIC_DISCORD_URL ?? "https://discord.gg/durby-hack";
export const GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/durby";
export const LINKEDIN_URL = process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://www.linkedin.com/company/durby";

// Entry is paid — this is a business-model decision, not a placeholder to
// silently ship as "free". Final pricing (base / early-bird / student
// tiers) isn't set yet, so every mention of cost on the site reads
// PRICING_NOTE instead of a number until PRICING_ANNOUNCED flips true.
export const PRICING_ANNOUNCED = process.env.NEXT_PUBLIC_PRICING_ANNOUNCED === "true";
export const PRICING_NOTE = "Paid registration — pricing announced soon.";

export const EVENT = {
  name: "Durby Global Hack",
  shortName: "Global Hack",
  edition: "2026 Edition",
  // Durby organizes the event; it is not a Durby product hackathon and
  // carries no requirement to build with Durby's own technology.
  tagline: "Build the future with AI.",
};
