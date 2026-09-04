import { PRICING_NOTE } from "@/lib/config";

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ: FaqItem[] = [
  {
    question: "Who can participate?",
    answer: "The event is open worldwide to students, developers, designers, founders and AI builders — with active outreach to student communities in markets like India.",
  },
  {
    question: "Is the hackathon free to enter?",
    answer: `No — entry is paid. ${PRICING_NOTE}`,
  },
  {
    question: "Can I participate individually?",
    answer: "Yes. You can register solo and either build alone or match with a team during team formation.",
  },
  {
    question: "How large can teams be?",
    answer: "Teams can have up to 4 people. Smaller teams and solo builders are equally welcome.",
  },
  {
    question: "Is it online or in person?",
    answer: "Format and locations are still being finalized — Durby Global Hack is an international event, so in-person, hybrid and fully remote options are all on the table. Details are announced closer to the date.",
  },
  {
    question: "What technologies can we use?",
    answer: "Any AI models, frameworks or tools you like — OpenAI, Claude, Gemini, open-source models, your own models, or anything else. There is no required stack.",
  },
  {
    question: "Do I need to use Durby's technology?",
    answer: "No. Durby organizes the event, but it's fully technology-agnostic — there's no Durby API or platform requirement for participants.",
  },
  {
    question: "How are projects judged?",
    answer: "Against five published criteria — technical execution, innovation, impact, user experience and presentation. See the Judging section for the full breakdown.",
  },
  {
    question: "What do I need to submit?",
    answer: "A public code repository, a short demo video, and a live pitch to the judging panel.",
  },
  {
    question: "Who owns the project?",
    answer: "You do. Teams retain full ownership and IP rights to everything they build.",
  },
  {
    question: "When will winners be announced?",
    answer: "Live, during the closing ceremony after judging concludes — see the Timeline section for the shape of the schedule.",
  },
];
