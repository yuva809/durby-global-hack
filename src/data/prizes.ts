export interface Prize {
  place: string;
  label: string;
  // Placeholder — replace with the final confirmed amount before launch.
  amount: string;
  currency: string;
  perks: string[];
  featured?: boolean;
}

export interface SpecialAward {
  title: string;
  description: string;
}

// Placeholder prize pool. Amounts are intentionally generic (X,XXX) —
// swap in real, confirmed figures before this goes live.
export const PRIZES: Prize[] = [
  {
    place: "01",
    label: "1st Place",
    amount: "X,XXX",
    currency: "EUR",
    perks: ["Grand prize purse", "Winner's trophy", "Global recognition", "Certificate of achievement"],
    featured: true,
  },
  {
    place: "02",
    label: "2nd Place",
    amount: "X,XXX",
    currency: "EUR",
    perks: ["Runner-up prize purse", "Trophy", "Certificate of achievement"],
  },
  {
    place: "03",
    label: "3rd Place",
    amount: "X,XXX",
    currency: "EUR",
    perks: ["Prize purse", "Trophy", "Certificate of achievement"],
  },
];

export const SPECIAL_AWARDS: SpecialAward[] = [
  { title: "Best AI Innovation", description: "For the team pushing the most technically ambitious use of AI." },
  { title: "Best Design", description: "For the sharpest, most considered product and interface design." },
  { title: "Best Social Impact", description: "For the idea that best addresses a real social or community challenge." },
  { title: "People's Choice", description: "Voted by the entire hackathon community." },
];
