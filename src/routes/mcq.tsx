import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Play, BarChart3, FileText, Activity, RotateCcw, Zap } from "lucide-react";
import { AppShell, TabBar } from "@/components/app-shell";

export const Route = createFileRoute("/mcq")({
  head: () => ({
    meta: [
      { title: "MCQ Practice — Engineering Study Hub" },
      { name: "description", content: "Chapter-wise, unit-wise and mock test MCQs with difficulty filters and performance analytics." },
    ],
  }),
  component: MCQPage,
});

const chapters = [
  { n: 1, name: "Basic Electrical Quantities", q: 50, score: 85 },
  { n: 2, name: "Circuit Laws", q: 60, score: 70 },
  { n: 3, name: "Network Theorems", q: 55, score: 40 },
  { n: 4, name: "AC Circuits", q: 60, score: 0 },
  { n: 5, name: "Resonance", q: 45, score: 0 },
];

function MCQPage() {
  const [tab, setTab] = useState("Chapter Wise");
  const [diff, setDiff] = useState("Easy");

  const diffColors: Record<string, string> = {
    Easy: "from-emerald-500 to-green-600",
    Medium: "from-amber-500 to-orange-600",
    Hard: "from-rose-500 to-red-600",
  };

  return (
    <AppShell title="MCQ Practice">
      <TabBar tabs={["Unit Wise", "Chapter Wise", "Mock Test"]} active={tab} onChange={setTab} />
      <div className="glass-panel mt-3 flex gap-2 p-2">
        {["Easy", "Medium", "Hard"].map((d) => (
          <button
            key={d}
            onClick={() => setDiff(d)}
            className={`flex-1 rounded-xl px-3 py-2 text-xs font-semibold transition ${
              diff === d ? `bg-gradient-to-r ${diffColors[d]} text-white shadow-lg` : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      <div className="mt-4 space-y-3">
        {chapters.map((c) => (
          <div key={c.n} className="glass-panel animate-pop-in p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Chapter {c.n}</p>
                <p className="text-sm font-semibold">{c.name}</p>
              </div>
              <div className="relative grid size-12 place-items-center rounded-full bg-white/5 ring-1 ring-white/10">
                <span className="text-xs font-bold text-emerald-300">{c.score}%</span>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between gap-2">
              <span className="text-xs text-muted-foreground">{c.q} Questions</span>
              <button className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 px-4 py-1.5 text-xs font-semibold text-white shadow-md transition active:scale-95">
                <Play className="size-3 fill-current" /> Start Quiz
              </button>
            </div>
          </div>
        ))}
      </div>

      <section className="glass-panel mt-4 p-3">
        <p className="mb-2 text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground">Performance Analytics</p>
        <div className="grid grid-cols-4 gap-2">
          {[
            { icon: Zap, label: "Instant Result" },
            { icon: FileText, label: "Detailed Solution" },
            { icon: Activity, label: "Performance" },
            { icon: RotateCcw, label: "Retry Quiz" },
          ].map((f) => (
            <button key={f.label} className="flex flex-col items-center gap-1 rounded-xl bg-white/5 p-2 ring-1 ring-white/10 transition active:scale-95 hover:bg-white/10">
              <f.icon className="size-4 text-[var(--neon)]" />
              <span className="text-center text-[9px] leading-tight">{f.label}</span>
            </button>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
