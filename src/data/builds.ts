export interface BuildIdea {
  title: string;
  description: string;
}

// Deliberately broad and technology-agnostic — any AI model, framework
// or platform is fair game. These are prompts, not a fixed problem set.
export const BUILD_IDEAS: BuildIdea[] = [
  { title: "AI Education Platform", description: "Personalized learning that adapts to the student, not the other way around." },
  { title: "AI Business Assistant", description: "An agent that handles the operational work nobody has time for." },
  { title: "AI Productivity Tool", description: "Cut the busywork out of a workflow that shouldn't need a human in the loop." },
  { title: "AI Healthcare Concept", description: "A tool that makes care more accessible, accurate or timely." },
  { title: "AI Sustainability Solution", description: "Use data and models to make a real dent in a real resource problem." },
  { title: "AI Creative Platform", description: "New tools for design, media or content that extend what one person can make." },
  { title: "AI Agent", description: "Something that plans, acts and follows through — not just answers questions." },
  { title: "AI-Powered Application", description: "A full product with AI as the core, not a bolted-on feature." },
  { title: "AI Research Prototype", description: "A proof of concept for an idea that hasn't been built properly yet." },
  { title: "Something Else Entirely", description: "Anything that solves a meaningful real-world problem. Surprise us." },
];
