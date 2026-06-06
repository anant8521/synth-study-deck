import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BookOpen, FileText, Zap, BarChart3, Calculator, FileDown } from "lucide-react";
import { AppShell, TabBar } from "@/components/app-shell";

export const Route = createFileRoute("/notes")({
  head: () => ({
    meta: [
      { title: "Notes — Engineering Study Hub" },
      { name: "description", content: "Unit-wise theory notes, PDFs, short notes, diagrams and formula sheets." },
    ],
  }),
  component: NotesPage,
});

const units = [
  { n: 1, name: "Basic Electrical Quantities", pages: 12 },
  { n: 2, name: "Circuit Laws", pages: 15 },
  { n: 3, name: "Network Theorems", pages: 18 },
  { n: 4, name: "AC Circuits", pages: 20 },
  { n: 5, name: "Resonance", pages: 14 },
];

const chips = [
  { icon: BookOpen, label: "Theory Notes", color: "text-blue-300" },
  { icon: FileText, label: "PDF Notes", color: "text-rose-300" },
  { icon: Zap, label: "Short Notes", color: "text-amber-300" },
  { icon: BarChart3, label: "Important Diagrams", color: "text-emerald-300" },
  { icon: Calculator, label: "Formula Sheet", color: "text-violet-300" },
];

function NotesPage() {
  const [tab, setTab] = useState("All Units");
  return (
    <AppShell title="Notes">
      <TabBar tabs={["All Units", "Bookmarks"]} active={tab} onChange={setTab} />
      <div className="mt-4 space-y-3">
        {units.map((u) => (
          <div key={u.n} className="glass-panel animate-pop-in p-4">
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-xl bg-blue-500/20 text-blue-300">
                <BookOpen className="size-5" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">Unit {u.n}</p>
                <p className="text-sm font-semibold">{u.name}</p>
              </div>
              <span className="text-xs font-medium text-muted-foreground">{u.pages} Pages</span>
            </div>
            <div className="mt-3 grid grid-cols-5 gap-1.5">
              {chips.map((c) => (
                <button key={c.label} className="flex flex-col items-center gap-1 rounded-lg bg-white/5 p-2 ring-1 ring-white/10 transition active:scale-95 hover:bg-white/10">
                  <c.icon className={`size-4 ${c.color}`} />
                  <span className="text-[9px] text-center leading-tight text-muted-foreground">{c.label.split(" ")[0]}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition active:scale-95">
        <FileDown className="size-4" /> Download All Notes
      </button>
    </AppShell>
  );
}
