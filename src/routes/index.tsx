import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Search, ChevronDown, FileText, FileDown, ExternalLink, Sparkles, Shield, NotebookPen, ListChecks, Trophy, Users, Video, Target, TrendingUp, Crown, LogIn } from "lucide-react";
import { AppShell, StatPill } from "@/components/app-shell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Youth Publication Learning Hub — Polytechnic & Diploma EdTech" },
      { name: "description", content: "Premium learning hub for Polytechnic & SBTE Bihar diploma engineers: video lectures, notes, MCQs, CBT tests, PYQ & e-books." },
    ],
  }),
  component: Index,
});

type SemKey = "s3" | "s4" | "s5" | "s6";
type VolKey = "v1" | "v2";

const semesters: { key: SemKey; label: string; icon: string; gradient: string; subjects: string[] }[] = [
  { key: "s3", label: "Semester 3", icon: "💡", gradient: "from-blue-500 to-blue-700",
    subjects: ["I. Electrical Circuit and Networks (2420301)","II. Electrical Measurements and Instrumentation (2420302)","III. DC Machines and Transformers (2420303)","IV. Electrical Power Generation, Transmission and Distribution (2420304)","V. Python Programming (2418305)"] },
  { key: "s4", label: "Semester 4", icon: "⚙️", gradient: "from-teal-500 to-cyan-700",
    subjects: ["I. Power Electronics (2420401)","II. Microprocessor and Microcontrollers (2420402)","III. A.C. Machines (2420403)","IV. Control System and PLC (2420404)","V. Electrical Software Lab (2420405)"] },
  { key: "s5", label: "Semester 5", icon: "⚡", gradient: "from-orange-500 to-amber-600",
    subjects: ["I. Switchgear and Protection (2420501)","II. Solar & Wind Power Technology (2420502)","III. Energy Conservation and Audit (2420503)","IV. Open Elective / COE (2400504)","V. Entrepreneurship Development & Startups (2400505)"] },
  { key: "s6", label: "Semester 6", icon: "🚀", gradient: "from-violet-500 to-purple-700",
    subjects: ["Coming soon — subjects will be added shortly. Stay tuned!"] },
];

const volumes: { key: VolKey; label: string; icon: string; gradient: string }[] = [
  { key: "v1", label: "Volume - 1", icon: "📕", gradient: "from-rose-500 to-pink-700" },
  { key: "v2", label: "Volume - 2", icon: "📗", gradient: "from-emerald-500 to-green-700" },
];

function Index() {
  const [openSem, setOpenSem] = useState<SemKey | null>("s3");
  const [openVol, setOpenVol] = useState<VolKey | null>(null);

  return (
    <AppShell title="" showBack={false}>
      {/* HEADER */}
      <header className="glass-panel animate-pop-in p-4 -mt-4">
        <div className="flex items-center justify-center gap-2">
          <span className="text-2xl animate-float">📘</span>
          <h1 className="text-center text-xl font-bold tracking-tight sm:text-2xl">Youth Publication</h1>
          <span className="text-2xl animate-float [animation-delay:.6s]">🎓</span>
        </div>
        <p className="mt-1 text-center text-[11px] text-muted-foreground sm:text-xs">Learning Hub · Polytechnic · SBTE Bihar · AE / JE Prep</p>
        <div className="mt-4 relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            placeholder="Search subject, lecture or topic..."
            className="w-full rounded-full bg-white/95 py-3 pl-10 pr-4 text-sm text-slate-800 placeholder:text-slate-400 outline-none ring-1 ring-white/20 focus:ring-2 focus:ring-[var(--neon)]"
          />
        </div>
      </header>

      {/* HERO BANNER */}
      <section className="animate-pop-in mt-4 overflow-hidden rounded-2xl p-5 ring-1 ring-white/15"
        style={{ background: "linear-gradient(120deg, #1e3a8a 0%, #3b2e9a 50%, #5b21b6 100%)" }}>
        <div className="text-center">
          <h2 className="text-xl font-bold text-white sm:text-2xl">India's #1 Polytechnic Learning App</h2>
          <p className="mt-1 text-sm text-white/85">Learn Today, Lead Tomorrow 🚀</p>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 text-center">
          <HeroStat icon={<Users className="size-3.5" />} value="10,000+" label="Students" />
          <HeroStat icon={<Video className="size-3.5" />} value="500+" label="Video Lectures" />
          <HeroStat icon={<Target className="size-3.5" />} value="100+" label="Mock Tests" />
          <HeroStat icon={<TrendingUp className="size-3.5" />} value="95%" label="Success Rate" />
        </div>
        <div className="mt-4 flex gap-2">
          <Link to="/auth" className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-white px-4 py-2.5 text-xs font-bold text-slate-900 shadow-lg transition active:scale-95">
            <LogIn className="size-3.5" /> Start Learning
          </Link>
          <Link to="/membership" className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-amber-400 px-4 py-2.5 text-xs font-bold text-slate-900 shadow-lg transition active:scale-95">
            <Crown className="size-3.5" /> Explore Plans
          </Link>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Link to="/notes"><StatPill icon={<NotebookPen className="size-4" />} value="120" label="Notes Read" tone="blue" /></Link>
        <Link to="/mcq"><StatPill icon={<ListChecks className="size-4" />} value="350" label="MCQ Attempted" tone="pink" /></Link>
        <Link to="/pyq"><StatPill icon={<FileText className="size-4" />} value="45" label="PYQ Solved" tone="orange" /></Link>
        <Link to="/cbt"><StatPill icon={<Trophy className="size-4" />} value="#25" label="CBT Rank" tone="green" /></Link>
      </section>

      {/* DIPLOMA STUDY */}
      <section className="glass-panel animate-pop-in mt-4 p-4">
        <SectionHeader emoji="🎓" title="Diploma Study" subtitle="All Semester" />
        <div className="mt-4 space-y-3">
          {semesters.map((s) => (
            <Accordion key={s.key} open={openSem === s.key} onToggle={() => setOpenSem(openSem === s.key ? null : s.key)}
              gradient={s.gradient} icon={s.icon} title={s.label}>
              <ul className="space-y-2 text-sm text-foreground/90">
                {s.subjects.map((sub) => (
                  <li key={sub}>
                    <Link to="/subject/$id" params={{ id: "electrical-circuits" }} className="block rounded-lg bg-white/5 px-3 py-2 ring-1 ring-white/10 hover:bg-white/10 transition">
                      {sub}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--neon-soft)] to-[var(--neon)] px-4 py-2 text-sm font-semibold text-white shadow-lg transition active:scale-95">
                  <Sparkles className="size-4" /> Explore
                </button>
                <button className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15 active:scale-95">
                  <FileDown className="size-4" /> Syllabus PDF
                </button>
              </div>
            </Accordion>
          ))}
        </div>
      </section>

      {/* AE / JE PREP */}
      <section className="glass-panel animate-pop-in mt-4 p-4">
        <SectionHeader emoji="🚀" title="AE / JE Prep" subtitle="Youth Publication" />
        <div className="mt-4 space-y-3">
          {volumes.map((v) => (
            <Accordion key={v.key} open={openVol === v.key} onToggle={() => setOpenVol(openVol === v.key ? null : v.key)}
              gradient={v.gradient} icon={v.icon} title={v.label}>
              <div className="space-y-2 text-sm text-foreground/90">
                <p className="font-semibold">Youth Competition Times</p>
                <p>English Medium · All India JE, Engineering Services and PSU Examinations</p>
                <p>Electrical Engineering {v.label}</p>
              </div>
              <div className="mt-4">
                <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--neon-soft)] to-[var(--neon)] px-4 py-2 text-sm font-semibold text-white shadow-lg transition active:scale-95">
                  <ExternalLink className="size-4" /> Explore E-Book
                </button>
              </div>
            </Accordion>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="glass-panel animate-pop-in mt-4 p-5 text-center">
        <p className="flex items-center justify-center gap-2 font-semibold">
          <Shield className="size-4 text-amber-400" /> Youth Publication Learning Hub
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Stay Consistent, Stay Focused, Be an <span className="font-semibold text-amber-400">Engineer!</span>
        </p>
        <p className="mt-3 text-xs text-muted-foreground">© 2026 Youth Publication. All Rights Reserved.</p>
      </footer>
    </AppShell>
  );
}

function HeroStat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="rounded-xl bg-white/10 p-2 backdrop-blur ring-1 ring-white/15">
      <div className="flex items-center justify-center gap-1 text-[10px] text-white/70">{icon}{label}</div>
      <div className="mt-0.5 text-sm font-extrabold text-white">{value}</div>
    </div>
  );
}

function SectionHeader({ emoji, title, subtitle }: { emoji: string; title: string; subtitle: string }) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-3">
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--neon)]/60" />
        <h3 className="flex items-center gap-2 text-xl font-bold"><span>{emoji}</span> {title}</h3>
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--neon)]/60" />
      </div>
      <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
    </div>
  );
}

function Accordion({ open, onToggle, gradient, icon, title, children }: { open: boolean; onToggle: () => void; gradient: string; icon: string; title: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
      <button onClick={onToggle} className={`flex w-full items-center justify-between bg-gradient-to-r ${gradient} px-4 py-3.5 text-left text-white shadow-lg transition active:scale-[0.99]`}>
        <span className="flex items-center gap-3 text-base font-semibold"><span className="text-xl">{icon}</span>{title}</span>
        <ChevronDown className={`size-5 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className="grid transition-all duration-300 ease-out" style={{ gridTemplateRows: open ? "1fr" : "0fr" }}>
        <div className="overflow-hidden"><div className="bg-black/30 p-4 backdrop-blur">{children}</div></div>
      </div>
    </div>
  );
}
