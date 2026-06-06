import { createFileRoute } from "@tanstack/react-router";
import { Clock, ListChecks, Repeat, Trophy, Play, BookOpen, GraduationCap, Target, Briefcase, Award } from "lucide-react";
import { AppShell } from "@/components/app-shell";

export const Route = createFileRoute("/cbt")({
  head: () => ({
    meta: [
      { title: "CBT Test — Engineering Study Hub" },
      { name: "description", content: "Subject, semester, AE, JE and full length mock tests with timer, attempts and best score tracking." },
    ],
  }),
  component: CBTPage,
});

const tests = [
  { name: "Subject Test", icon: BookOpen, tone: "from-blue-500 to-blue-700", time: 30, q: 30, attempts: 4, best: 88 },
  { name: "Semester Test", icon: GraduationCap, tone: "from-violet-500 to-purple-700", time: 60, q: 60, attempts: 2, best: 75 },
  { name: "AE Mock Test", icon: Briefcase, tone: "from-rose-500 to-pink-700", time: 120, q: 100, attempts: 1, best: 64 },
  { name: "JE Mock Test", icon: Award, tone: "from-amber-500 to-orange-600", time: 120, q: 100, attempts: 3, best: 82 },
  { name: "Full Length Test", icon: Target, tone: "from-emerald-500 to-green-700", time: 180, q: 150, attempts: 0, best: 0 },
];

function CBTPage() {
  return (
    <AppShell title="CBT Test">
      <div className="space-y-3">
        {tests.map((t) => (
          <div key={t.name} className="glass-panel animate-pop-in p-4">
            <div className="flex items-center gap-3">
              <div className={`grid size-12 place-items-center rounded-2xl bg-gradient-to-br ${t.tone} text-white shadow-lg`}>
                <t.icon className="size-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold">{t.name}</p>
                <p className="text-[11px] text-muted-foreground">Computer-based mock</p>
              </div>
              <Trophy className="size-4 text-amber-300" />
            </div>
            <div className="mt-3 grid grid-cols-4 gap-2 text-center">
              <Metric icon={<Clock className="size-3" />} value={`${t.time}m`} label="Timer" />
              <Metric icon={<ListChecks className="size-3" />} value={`${t.q}`} label="Questions" />
              <Metric icon={<Repeat className="size-3" />} value={`${t.attempts}`} label="Attempts" />
              <Metric icon={<Trophy className="size-3" />} value={`${t.best}%`} label="Best" />
            </div>
            <button className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[var(--neon-soft)] to-[var(--neon)] px-4 py-2 text-xs font-semibold text-white shadow-md transition active:scale-95">
              <Play className="size-3 fill-current" /> Start Test
            </button>
          </div>
        ))}
      </div>
    </AppShell>
  );
}

function Metric({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="rounded-lg bg-white/5 p-2 ring-1 ring-white/10">
      <div className="flex items-center justify-center gap-1 text-[10px] text-muted-foreground">{icon}{label}</div>
      <div className="mt-0.5 text-sm font-bold text-[var(--neon)]">{value}</div>
    </div>
  );
}
