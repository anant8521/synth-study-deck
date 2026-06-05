import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Search, Moon, Sun, ChevronDown, GraduationCap, BookOpen, FileText, Target, Home, NotebookPen, ListChecks, User, FileDown, ExternalLink, Sparkles, Shield } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Engineering Study Hub — SBTE Bihar Notes, MCQ, CBT" },
      { name: "description", content: "Premium study hub for SBTE Bihar diploma engineering: notes, MCQs, CBT tests, syllabus & e-books." },
      { property: "og:title", content: "Engineering Study Hub" },
      { property: "og:description", content: "Notes, MCQs, CBT tests and e-books for diploma engineering students." },
    ],
  }),
  component: Index,
});

type SemKey = "s3" | "s4" | "s5" | "s6";
type VolKey = "v1" | "v2";

const semesters: { key: SemKey; label: string; icon: string; gradient: string; subjects: string[] }[] = [
  {
    key: "s3", label: "Semester 3", icon: "💡",
    gradient: "from-blue-500 to-blue-700",
    subjects: [
      "I. Electrical Circuit and Networks (2420301)",
      "II. Electrical Measurements and Instrumentation (2420302)",
      "III. DC Machines and Transformers (2420303)",
      "IV. Electrical Power Generation, Transmission and Distribution (2420304)",
      "V. Python Programming (2418305)",
    ],
  },
  {
    key: "s4", label: "Semester 4", icon: "⚙️",
    gradient: "from-teal-500 to-cyan-700",
    subjects: [
      "I. Power Electronics (2420401)",
      "II. Microprocessor and Microcontrollers (2420402)",
      "III. A.C. Machines (2420403)",
      "IV. Control System and PLC (2420404)",
      "V. Electrical Software Lab (2420405)",
    ],
  },
  {
    key: "s5", label: "Semester 5", icon: "⚡",
    gradient: "from-orange-500 to-amber-600",
    subjects: [
      "I. Switchgear and Protection (2420501)",
      "II. Solar & Wind Power Technology (2420502)",
      "III. Energy Conservation and Audit (2420503)",
      "IV. Open Elective / COE (2400504)",
      "V. Entrepreneurship Development & Startups (2400505)",
    ],
  },
  {
    key: "s6", label: "Semester 6", icon: "🚀",
    gradient: "from-violet-500 to-purple-700",
    subjects: ["Coming soon — subjects will be added shortly. Stay tuned!"],
  },
];

const volumes: { key: VolKey; label: string; icon: string; gradient: string }[] = [
  { key: "v1", label: "Volume - 1", icon: "📕", gradient: "from-rose-500 to-pink-700" },
  { key: "v2", label: "Volume - 2", icon: "📗", gradient: "from-emerald-500 to-green-700" },
];

function Index() {
  const [openSem, setOpenSem] = useState<SemKey | null>("s3");
  const [openVol, setOpenVol] = useState<VolKey | null>(null);
  const [light, setLight] = useState(false);
  const [tab, setTab] = useState("home");

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);

  return (
    <div className="mx-auto max-w-md px-4 pb-28 pt-4 sm:max-w-xl md:max-w-3xl lg:max-w-4xl">
      {/* HEADER */}
      <header className="glass-panel animate-pop-in p-4">
        <div className="flex items-center justify-center gap-2">
          <span className="text-2xl animate-float">👷</span>
          <h1 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
            Engineering Study Hub
          </h1>
          <span className="text-2xl animate-float [animation-delay:.6s]">👷‍♀️</span>
        </div>
        <p className="mt-1 text-center text-xs text-muted-foreground sm:text-sm">
          SBTE Bihar | Notes | MCQ | CBT Tests | E-Books
        </p>
        <div className="mt-4 flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              placeholder="Search Subject or Topic..."
              className="w-full rounded-full bg-white/95 py-3 pl-10 pr-4 text-sm text-slate-800 placeholder:text-slate-400 outline-none ring-1 ring-white/20 focus:ring-2 focus:ring-[var(--neon)]"
            />
          </div>
          <button
            onClick={() => setLight((v) => !v)}
            aria-label="Toggle theme"
            className="grid size-11 place-items-center rounded-full bg-amber-300 text-slate-900 shadow-lg transition active:scale-95"
          >
            {light ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </button>
        </div>
      </header>

      {/* WELCOME BANNER */}
      <section
        className="animate-pop-in mt-4 overflow-hidden rounded-2xl p-5 ring-1 ring-white/15"
        style={{
          background:
            "linear-gradient(120deg, #1e3a8a 0%, #3b2e9a 50%, #5b21b6 100%)",
        }}
      >
        <div className="flex items-center justify-between gap-3">
          <span className="text-4xl animate-float">📚</span>
          <div className="text-center">
            <h2 className="text-lg font-bold text-white sm:text-xl">
              Welcome back engineer
            </h2>
            <p className="text-sm text-white/85">Learn Today, Lead Tomorrow</p>
            <div className="mt-2 flex items-center justify-center gap-2 text-white/80">
              <span className="h-px w-10 bg-white/40" />
              <span>⭐</span>
              <span className="h-px w-10 bg-white/40" />
            </div>
          </div>
          <span className="text-4xl animate-float [animation-delay:.8s]">📖</span>
        </div>
      </section>

      {/* STATS */}
      <section className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatCard icon={<GraduationCap className="size-6" />} value="4" label="Semesters" tone="blue" />
        <StatCard icon={<BookOpen className="size-6" />} value="2" label="Volumes" tone="pink" />
        <StatCard icon={<FileText className="size-6" />} value="1000+" label="MCQs" tone="orange" />
        <StatCard icon={<Target className="size-6" />} value="50+" label="CBT Tests" tone="green" />
      </section>

      {/* DIPLOMA STUDY */}
      <section className="glass-panel animate-pop-in mt-4 p-4">
        <SectionHeader emoji="🎓" title="Diploma Study" subtitle="All Semester" />
        <div className="mt-4 space-y-3">
          {semesters.map((s) => (
            <Accordion
              key={s.key}
              open={openSem === s.key}
              onToggle={() => setOpenSem(openSem === s.key ? null : s.key)}
              gradient={s.gradient}
              icon={s.icon}
              title={s.label}
            >
              <ul className="space-y-2 text-sm text-foreground/90">
                {s.subjects.map((sub) => (
                  <li key={sub} className="rounded-lg bg-white/5 px-3 py-2 ring-1 ring-white/10">
                    {sub}
                  </li>
                ))}
              </ul>
              <ActionButtons />
            </Accordion>
          ))}
        </div>
      </section>

      {/* AE / JE PREP */}
      <section className="glass-panel animate-pop-in mt-4 p-4">
        <SectionHeader emoji="🚀" title="AE / JE Prep" subtitle="Youth Publication" />
        <div className="mt-4 space-y-3">
          {volumes.map((v) => (
            <Accordion
              key={v.key}
              open={openVol === v.key}
              onToggle={() => setOpenVol(openVol === v.key ? null : v.key)}
              gradient={v.gradient}
              icon={v.icon}
              title={v.label}
            >
              <div className="space-y-2 text-sm text-foreground/90">
                <p className="font-semibold">Youth Competition Times</p>
                <p>English Medium</p>
                <p>All India JE, Engineering Services and PSU Examinations</p>
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
        <div className="flex items-center justify-between">
          <span className="text-2xl opacity-70">🌿</span>
          <div>
            <p className="flex items-center justify-center gap-2 font-semibold">
              <Shield className="size-4 text-amber-400" /> Engineering Study Hub
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Stay Consistent, Stay Focused, Be an{" "}
              <span className="font-semibold text-amber-400">Engineer!</span>
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm">
              {["Notes", "MCQ", "PYQ", "CBT Tests", "E-Books"].map((l, i, a) => (
                <span key={l} className="flex items-center gap-3">
                  <a href="#" className="text-[var(--neon)] hover:underline">{l}</a>
                  {i < a.length - 1 && <span className="text-muted-foreground">•</span>}
                </span>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              © 2026 Engineering Study Hub. All Rights Reserved.
            </p>
          </div>
          <span className="text-2xl opacity-70">🌿</span>
        </div>
      </footer>

      {/* BOTTOM NAV */}
      <nav className="fixed inset-x-0 bottom-0 z-40 mx-auto max-w-md px-3 pb-3 sm:max-w-xl md:max-w-3xl lg:max-w-4xl">
        <div className="glass-panel flex items-center justify-around px-2 py-2">
          <NavItem id="home" active={tab} setActive={setTab} icon={<Home className="size-5" />} label="Home" />
          <NavItem id="notes" active={tab} setActive={setTab} icon={<NotebookPen className="size-5" />} label="Notes" />
          <NavItem id="mcq" active={tab} setActive={setTab} icon={<ListChecks className="size-5" />} label="MCQ" />
          <NavItem id="cbt" active={tab} setActive={setTab} icon={<Target className="size-5" />} label="CBT Tests" />
          <NavItem id="profile" active={tab} setActive={setTab} icon={<User className="size-5" />} label="Profile" />
        </div>
      </nav>
    </div>
  );
}

function SectionHeader({ emoji, title, subtitle }: { emoji: string; title: string; subtitle: string }) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-3">
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--neon)]/60" />
        <h3 className="flex items-center gap-2 text-xl font-bold">
          <span>{emoji}</span> {title}
        </h3>
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--neon)]/60" />
      </div>
      <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
    </div>
  );
}

function StatCard({ icon, value, label, tone }: { icon: React.ReactNode; value: string; label: string; tone: "blue" | "pink" | "orange" | "green" }) {
  const tones: Record<string, { ring: string; chip: string; text: string }> = {
    blue: { ring: "ring-blue-500/40 shadow-[0_0_30px_-8px_rgba(59,130,246,0.6)]", chip: "bg-blue-500/15 text-blue-300", text: "text-blue-300" },
    pink: { ring: "ring-pink-500/40 shadow-[0_0_30px_-8px_rgba(236,72,153,0.55)]", chip: "bg-pink-500/15 text-pink-300", text: "text-pink-300" },
    orange: { ring: "ring-orange-500/40 shadow-[0_0_30px_-8px_rgba(249,115,22,0.55)]", chip: "bg-orange-500/15 text-orange-300", text: "text-orange-300" },
    green: { ring: "ring-emerald-500/40 shadow-[0_0_30px_-8px_rgba(16,185,129,0.55)]", chip: "bg-emerald-500/15 text-emerald-300", text: "text-emerald-300" },
  };
  const t = tones[tone];
  return (
    <div className={`animate-pop-in glass-panel flex flex-col items-center justify-center gap-2 p-4 ring-1 transition active:scale-[0.98] hover:-translate-y-0.5 ${t.ring}`}>
      <div className={`grid size-11 place-items-center rounded-full ${t.chip}`}>{icon}</div>
      <div className={`text-2xl font-extrabold ${t.text}`}>{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

function Accordion({ open, onToggle, gradient, icon, title, children }: { open: boolean; onToggle: () => void; gradient: string; icon: string; title: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
      <button
        onClick={onToggle}
        className={`flex w-full items-center justify-between bg-gradient-to-r ${gradient} px-4 py-3.5 text-left text-white shadow-lg transition active:scale-[0.99]`}
      >
        <span className="flex items-center gap-3 text-base font-semibold">
          <span className="text-xl">{icon}</span>
          {title}
        </span>
        <ChevronDown className={`size-5 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="bg-black/30 p-4 backdrop-blur">{children}</div>
        </div>
      </div>
    </div>
  );
}

function ActionButtons() {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--neon-soft)] to-[var(--neon)] px-4 py-2 text-sm font-semibold text-white shadow-lg transition active:scale-95">
        <Sparkles className="size-4" /> Explore
      </button>
      <button className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15 active:scale-95">
        <FileDown className="size-4" /> Syllabus PDF
      </button>
    </div>
  );
}

function NavItem({ id, active, setActive, icon, label }: { id: string; active: string; setActive: (v: string) => void; icon: React.ReactNode; label: string }) {
  const isActive = active === id;
  return (
    <button
      onClick={() => setActive(id)}
      className={`flex flex-1 flex-col items-center gap-1 rounded-xl px-2 py-1.5 text-xs transition ${
        isActive ? "text-[var(--neon)]" : "text-muted-foreground"
      }`}
    >
      <span className={isActive ? "drop-shadow-[0_0_8px_var(--neon)]" : ""}>{icon}</span>
      <span className="text-[11px] font-medium">{label}</span>
    </button>
  );
}
