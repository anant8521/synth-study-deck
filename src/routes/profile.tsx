import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Bookmark, Download, Settings, HelpCircle, LogOut, ChevronRight, NotebookPen, ListChecks, FileText, Target, Sun, Moon, Crown, LogIn } from "lucide-react";
import { AppShell, StatPill } from "@/components/app-shell";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Profile — Engineering Study Hub" },
      { name: "description", content: "Your learning stats, bookmarks, downloads and account settings." },
    ],
  }),
  component: ProfilePage,
});

function ProfilePage() {
  const [light, setLight] = useState(false);
  useEffect(() => { document.documentElement.classList.toggle("light", light); }, [light]);

  const menu = [
    { icon: Crown, label: "Membership: Gold", to: "/membership" as const },
    { icon: Bookmark, label: "Bookmarks" },
    { icon: Download, label: "Downloads" },
    { icon: Settings, label: "Settings" },
    { icon: HelpCircle, label: "Help & Support" },
    { icon: LogIn, label: "Sign in / Register", to: "/auth" as const },
    { icon: LogOut, label: "Logout", danger: true },
  ];

  return (
    <AppShell title="Profile" right={
      <button onClick={() => setLight((v) => !v)} aria-label="Toggle theme"
        className="grid size-9 place-items-center rounded-full bg-amber-300 text-slate-900 shadow-lg transition active:scale-95">
        {light ? <Sun className="size-4" /> : <Moon className="size-4" />}
      </button>
    }>
      {/* Profile card */}
      <section className="glass-panel animate-pop-in p-5 text-center">
        <div className="mx-auto grid size-20 place-items-center rounded-full bg-gradient-to-br from-blue-500 to-purple-700 text-3xl font-bold text-white shadow-lg ring-4 ring-white/10">
          AK
        </div>
        <h2 className="mt-3 text-lg font-bold">Aman Kumar</h2>
        <p className="text-xs text-muted-foreground">Electrical Engineering · Semester 3</p>
      </section>

      {/* Stats */}
      <section className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatPill icon={<NotebookPen className="size-4" />} value="120" label="Notes Read" tone="blue" />
        <StatPill icon={<ListChecks className="size-4" />} value="350" label="MCQ Solved" tone="pink" />
        <StatPill icon={<FileText className="size-4" />} value="45" label="PYQ Solved" tone="orange" />
        <StatPill icon={<Target className="size-4" />} value="12" label="CBT Tests" tone="green" />
      </section>

      {/* Menu */}
      <section className="glass-panel animate-pop-in mt-4 divide-y divide-white/5 p-2">
        {menu.map((m) => {
          const inner = (
            <>
              <div className={`grid size-9 place-items-center rounded-xl ${m.danger ? "bg-rose-500/15 text-rose-300" : "bg-white/5 text-[var(--neon)]"}`}>
                <m.icon className="size-4" />
              </div>
              <span className={`flex-1 text-sm font-medium ${m.danger ? "text-rose-300" : ""}`}>{m.label}</span>
              <ChevronRight className="size-4 text-muted-foreground" />
            </>
          );
          return m.to ? (
            <Link key={m.label} to={m.to} className="flex w-full items-center gap-3 px-3 py-3 text-left transition hover:bg-white/5">{inner}</Link>
          ) : (
            <button key={m.label} className="flex w-full items-center gap-3 px-3 py-3 text-left transition hover:bg-white/5">{inner}</button>
          );
        })}
      </section>
    </AppShell>
  );
}
