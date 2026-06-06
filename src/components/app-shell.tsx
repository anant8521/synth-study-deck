import { Link, useRouter } from "@tanstack/react-router";
import { ArrowLeft, Search, Home, NotebookPen, ListChecks, Target, User } from "lucide-react";
import type { ReactNode } from "react";

export function AppShell({
  title,
  subtitle,
  showBack = true,
  right,
  children,
}: {
  title?: string;
  subtitle?: string;
  showBack?: boolean;
  right?: ReactNode;
  children: ReactNode;
}) {
  const router = useRouter();
  return (
    <div className="mx-auto max-w-md px-4 pb-28 pt-4 sm:max-w-xl md:max-w-3xl lg:max-w-4xl">
      {title && (
        <header className="glass-panel animate-pop-in flex items-center gap-3 px-4 py-3">
          {showBack ? (
            <button
              onClick={() => router.history.back()}
              aria-label="Back"
              className="grid size-9 place-items-center rounded-full bg-white/10 ring-1 ring-white/15 transition active:scale-95"
            >
              <ArrowLeft className="size-4" />
            </button>
          ) : (
            <div className="size-9" />
          )}
          <div className="flex-1 text-center">
            <h1 className="text-base font-bold leading-tight sm:text-lg">{title}</h1>
            {subtitle && <p className="text-[11px] text-muted-foreground">{subtitle}</p>}
          </div>
          {right ?? (
            <button
              aria-label="Search"
              className="grid size-9 place-items-center rounded-full bg-white/10 ring-1 ring-white/15 transition active:scale-95"
            >
              <Search className="size-4" />
            </button>
          )}
        </header>
      )}
      <div className="mt-4">{children}</div>
      <BottomNav />
    </div>
  );
}

export function BottomNav() {
  const items = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/notes", icon: NotebookPen, label: "Notes" },
    { to: "/mcq", icon: ListChecks, label: "MCQ" },
    { to: "/cbt", icon: Target, label: "CBT Test" },
    { to: "/profile", icon: User, label: "Profile" },
  ] as const;
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 mx-auto max-w-md px-3 pb-3 sm:max-w-xl md:max-w-3xl lg:max-w-4xl">
      <div className="glass-panel flex items-center justify-around px-2 py-2">
        {items.map(({ to, icon: Icon, label }) => (
          <Link
            key={to}
            to={to}
            activeOptions={{ exact: to === "/" }}
            className="flex flex-1 flex-col items-center gap-1 rounded-xl px-2 py-1.5 text-xs text-muted-foreground"
            activeProps={{ className: "flex flex-1 flex-col items-center gap-1 rounded-xl px-2 py-1.5 text-xs text-[var(--neon)] drop-shadow-[0_0_8px_var(--neon)]" }}
          >
            <Icon className="size-5" />
            <span className="text-[11px] font-medium">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export function TabBar({ tabs, active, onChange }: { tabs: string[]; active: string; onChange: (t: string) => void }) {
  return (
    <div className="glass-panel flex items-center gap-1 p-1">
      {tabs.map((t) => {
        const isActive = active === t;
        return (
          <button
            key={t}
            onClick={() => onChange(t)}
            className={`flex-1 rounded-xl px-3 py-2 text-xs font-semibold transition ${
              isActive
                ? "bg-gradient-to-r from-[var(--neon-soft)] to-[var(--neon)] text-white shadow-lg"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t}
          </button>
        );
      })}
    </div>
  );
}

export function StatPill({
  icon,
  value,
  label,
  tone = "blue",
}: {
  icon: ReactNode;
  value: string;
  label: string;
  tone?: "blue" | "pink" | "orange" | "green" | "violet";
}) {
  const tones: Record<string, string> = {
    blue: "ring-blue-500/40 shadow-[0_0_30px_-8px_rgba(59,130,246,0.6)] text-blue-300 bg-blue-500/15",
    pink: "ring-pink-500/40 shadow-[0_0_30px_-8px_rgba(236,72,153,0.55)] text-pink-300 bg-pink-500/15",
    orange: "ring-orange-500/40 shadow-[0_0_30px_-8px_rgba(249,115,22,0.55)] text-orange-300 bg-orange-500/15",
    green: "ring-emerald-500/40 shadow-[0_0_30px_-8px_rgba(16,185,129,0.55)] text-emerald-300 bg-emerald-500/15",
    violet: "ring-violet-500/40 shadow-[0_0_30px_-8px_rgba(139,92,246,0.55)] text-violet-300 bg-violet-500/15",
  };
  return (
    <div className={`animate-pop-in glass-panel flex flex-col items-center gap-1.5 p-3 ring-1 ${tones[tone]}`}>
      <div className={`grid size-9 place-items-center rounded-full ${tones[tone]}`}>{icon}</div>
      <div className="text-lg font-extrabold leading-none">{value}</div>
      <div className="text-[10px] text-muted-foreground">{label}</div>
    </div>
  );
}
