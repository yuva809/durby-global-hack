import type { LucideIcon } from "lucide-react";
import { Hammer, Trophy, Mic, Users, Handshake, Eye, GraduationCap, Award } from "lucide-react";

export interface ValueProp {
  title: string;
  description: string;
  icon: LucideIcon;
}

// What paid entry actually gets you. Items tied to something outside our
// direct control (university/partner attendance, prizes, certificates)
// are phrased as planned/possible, never guaranteed — see the two
// hedged entries at the end.
export const VALUE_PROPS: ValueProp[] = [
  { title: "Build a Real Project", description: "Ship something real over the course of the event — not a mockup.", icon: Hammer },
  { title: "Compete Internationally", description: "Go up against builders from around the world.", icon: Trophy },
  { title: "Present to Judges", description: "Pitch your work to an experienced judging panel.", icon: Mic },
  { title: "Connect with Mentors", description: "Get hands-on guidance from mentors while you build.", icon: Users },
  { title: "Meet Global Builders", description: "Build a network of builders from around the world.", icon: Handshake },
  { title: "Gain Visibility", description: "Showcase your work to mentors, judges and partner organizations.", icon: Eye },
  { title: "University & Industry Exposure", description: "Planned visibility with university and industry partners in attendance.", icon: GraduationCap },
  { title: "Prizes & Recognition", description: "Prizes, certificates and awards — confirmed and announced closer to the event.", icon: Award },
];
