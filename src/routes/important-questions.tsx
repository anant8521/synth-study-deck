import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Star, ArrowRight } from "lucide-react";
import { AppShell, TabBar } from "@/components/app-shell";

export const Route = createFileRoute("/important-questions")({
  head: () => ({
    meta: [
      { title: "Important Questions — Engineering Study Hub" },
      { name: "description", content: "Long answer, short answer, most repeated and expected questions for diploma engineering." },
    ],
  }),
  component: ImpQ,
});

const units = [
  { n: 1, name: "Basic Electrical Quantities", q: 20 },
  { n: 2, name: "Circuit Laws", q: 15 },
  { n: 3, name: "Network Theorems", q: 25 },
  { n: 4, name: "AC Circuits", q: 20 },
  { n: 5, name: "Resonance", q: 15 },
];

function ImpQ() {
  const [tab, setTab] = useState("Long Answer");
  return (
    <AppShell title="Important Questions">
      <TabBar tabs={["Long Answer", "Short Answer", "Most Repeated", "Expected"]} active={tab} onChange={setTab} />
      <div className="mt-4 space-y-3">
        {units.map((u) => (
          <div key={u.n} className="glass-panel animate-pop-in flex items-center gap-3 p-4">
            <div className="grid size-11 place-items-center rounded-xl bg-amber-400/15 text-amber-300">
              <Star className="size-5 fill-current" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-muted-foreground">Unit {u.n}</p>
              <p className="text-sm font-semibold">{u.name}</p>
            </div>
            <span className="text-xs font-bold text-[var(--neon)]">{u.q} Q</span>
            <button className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-[var(--neon-soft)] to-[var(--neon)] text-white shadow-md transition active:scale-95">
              <ArrowRight className="size-4" />
            </button>
          </div>
        ))}
      </div>
      <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition active:scale-95">
        View All Important Questions <ArrowRight className="size-4" />
      </button>
    </AppShell>
  );
}
