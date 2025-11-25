export type Project = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
  body: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "signal-graph",
    title: "Signal Graph",
    summary: "Patchable audio playground with real-time visuals and presets for rapid sketching.",
    date: "2024",
    tags: ["audio", "react", "web"],
    body: [
      "Designed as a sandbox for prototyping synth ideas without leaving the browser.",
      "Built around modular nodes (oscillators, filters, envelopes) with draggable cables and immediate visual feedback.",
      "Ships with a lightweight preset format so ideas can be shared as links or JSON snippets."
    ],
    links: [
      { label: "Open playground", href: "https://example.com/signal-graph" },
      { label: "Source", href: "https://github.com/yourname/signal-graph" }
    ]
  },
  {
    slug: "atlas-ui",
    title: "Atlas UI System",
    summary: "Composable UI kit for dashboards with theme tokens and motion baked in.",
    date: "2023",
    tags: ["design system", "typescript", "motion"],
    body: [
      "Built to keep client dashboards visually consistent across teams while still allowing expression.",
      "Token-driven styling (color, spacing, typography) combined with purposeful entrance and hover animations.",
      "Published as a reusable package with Storybook docs and accessibility linting."
    ],
    links: [
      { label: "Component docs", href: "https://example.com/atlas" }
    ]
  },
  {
    slug: "sketchbook",
    title: "Sketchbook",
    summary: "A growing set of small experiments: shaders, interactive essays, and UI ideas.",
    date: "2022",
    tags: ["experiments", "webgl", "writing"],
    body: [
      "Short writeups accompany each sketch so future you remembers how it worked.",
      "Covers WebGL fragment studies, data visualizations, and micro-interactions for apps.",
      "Acts as the sandbox that feeds larger projects in the Library."
    ],
    links: [
      { label: "View the sketches", href: "https://example.com/sketchbook" }
    ]
  }
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
