import type { LucideIcon } from "lucide-react";
import { BrainCircuit, Code2, Github, Package, ScrollText, Palette } from "lucide-react";

export interface Resource {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

// Technology-agnostic on purpose — there is no Durby API or platform
// participants are required (or expected) to build against.
export const RESOURCES: Resource[] = [
  { title: "AI Resources", description: "Curated model APIs, embeddings and inference credits for participants.", href: "#", icon: BrainCircuit },
  { title: "Starter Kits", description: "Boilerplate repos to get from zero to a running app in minutes.", href: "#", icon: Package },
  { title: "Design Resources", description: "UI kit, icon set and brand assets for building polished submissions.", href: "#", icon: Palette },
  { title: "GitHub", description: "Official hackathon org — templates, issues and example integrations.", href: "https://github.com/durby", icon: Github },
  { title: "Example Projects", description: "Reference builds and example submissions to learn from.", href: "#", icon: Code2 },
  { title: "Hackathon Rules", description: "Eligibility, submission requirements and code of conduct.", href: "#", icon: ScrollText },
];
