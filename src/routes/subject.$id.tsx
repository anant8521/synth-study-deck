import { createFileRoute, Link } from "@tanstack/react-router";
import { NotebookPen, ListChecks, FileText, Trophy, BookOpen, Video, Star, FileDown, ArrowRight, CheckCircle2 } from "lucide-react";
import { AppShell, StatPill } from "@/components/app-shell";

export const Route = createFileRoute("/subject/$id")({
  head: () => ({
    meta: [
      { title: "Electrical Circuit and Networks — Engineering Study Hub" },
      { name: "description", content: "Subject dashboard: notes, lectures, MCQ, PYQ, CBT tests for diploma engineering." },
    ],
  }),
  component: SubjectPage,
});

const units = [
  { n: 1, name: "Basic Electrical Quantities", progress: 100 },
  { n: 2, name: "Circuit Laws", progress: 100 },
  { n: 3, name: "Network Theorems", progress: 50 },
  { n: 4, name: "AC Circuits", progress: 0 },
  { n: 5, name: "Resonance", progress: 0 },
];

const features = [
  { to: "/notes", icon: BookOpen, label: "Notes", tone: "from-blue-500 to-blue-700" },
  { to: "/lectures", icon: Video, label: "Lectures", tone: "from-violet-500 to-purple-700" },
  { to: "/important-questions", icon: Star, label: "Important Questions", tone: "from-amber-500 to-orange-600" },
  { to: "/mcq", icon: ListChecks, label: "MCQ Practice", tone: "from-emerald-500 to-green-700" },
  { to: "/pyq", icon: FileText, label: "PYQ", tone: "from-rose-500 to-pink-700" },
  { to: "/", icon: FileDown, label: "E-Book", tone: "from-cyan-500 to-teal-700" },
] as const;

function SubjectPage() {
  return (
    <AppShell title="Subject">
      {/* Banner */}
      <section className="glass-panel animate-pop-in p-5">
        <div className="flex items-center gap-3">
          <div className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-700 text-2xl shadow-lg">⚡</div>
          <div>
            <h2 className="text-xl font-bold leading-tight">Electrical Circuit<br />and Networks</h2>
            <p className="text-xs text-muted-foreground">Semester 3 (AE / JE)</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatPill icon={<NotebookPen className="size-4" />} value="120" label="Notes Read" tone="blue" />
        <StatPill icon={<ListChecks className="size-4" />} value="350" label="MCQ Attempted" tone="pink" />
        <StatPill icon={<FileText className="size-4" />} value="45" label="PYQ Solved" tone="orange" />
        <StatPill icon={<Trophy className="size-4" />} value="#25" label="CBT Rank" tone="green" />
      </section>

      {/* Features */}
      <section className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {features.map((f) => (
          <Link key={f.label} to={f.to} className={`animate-pop-in glass-panel flex flex-col items-center gap-2 p-4 transition active:scale-[0.98] hover:-translate-y-0.5`}>
            <div className={`grid size-12 place-items-center rounded-2xl bg-gradient-to-br ${f.tone} text-white shadow-lg`}>
              <f.icon className="size-5" />
            </div>
            <span className="text-center text-sm font-semibold">{f.label}</span>
          </Link>
        ))}
      </section>

      {/* Units */}
      <section className="glass-panel animate-pop-in mt-4 p-4">
        <h3 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">Units in this Subject</h3>
        <ul className="mt-3 space-y-2">
          {units.map((u) => (
            <li key={u.n} className="flex items-center gap-3 rounded-xl bg-white/5 px-3 py-2.5 ring-1 ring-white/10">
              <span className="grid size-8 place-items-center rounded-lg bg-[var(--neon)]/15 text-xs font-bold text-[var(--neon)]">U{u.n}</span>
              <span className="flex-1 text-sm">{u.name}</span>
              {u.progress === 100 ? (
                <CheckCircle2 className="size-5 text-emerald-400" />
              ) : (
                <span className={`text-xs font-bold ${u.progress > 0 ? "text-amber-300" : "text-rose-300"}`}>{u.progress}%</span>
              )}
            </li>
          ))}
        </ul>
        <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--neon-soft)] to-[var(--neon)] px-4 py-3 text-sm font-semibold text-white shadow-lg transition active:scale-95">
          Continue Learning <ArrowRight className="size-4" />
        </button>
      </section>
    </AppShell>
  );
}
