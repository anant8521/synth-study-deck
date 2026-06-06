import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Play, Eye, Clock, FileDown } from "lucide-react";
import { AppShell, TabBar } from "@/components/app-shell";

export const Route = createFileRoute("/lectures")({
  head: () => ({
    meta: [
      { title: "Video Lectures — Engineering Study Hub" },
      { name: "description", content: "Unit-wise video lectures with progress tracking and downloadable notes." },
    ],
  }),
  component: LecturesPage,
});

const lectures = [
  { n: 1, name: "Basic Electrical Quantities", videos: 12, progress: 80, duration: "2h 15m", views: "12.4k" },
  { n: 2, name: "Circuit Laws", videos: 10, progress: 100, duration: "1h 50m", views: "9.8k" },
  { n: 3, name: "Network Theorems", videos: 8, progress: 40, duration: "1h 30m", views: "7.1k" },
  { n: 4, name: "AC Circuits", videos: 9, progress: 0, duration: "2h 05m", views: "5.6k" },
  { n: 5, name: "Resonance", videos: 7, progress: 0, duration: "1h 20m", views: "4.2k" },
];

function LecturesPage() {
  const [tab, setTab] = useState("Unit Wise");
  return (
    <AppShell title="Lectures">
      <TabBar tabs={["Unit Wise", "Bookmarks"]} active={tab} onChange={setTab} />
      <div className="mt-4 space-y-3">
        {lectures.map((l) => (
          <div key={l.n} className="glass-panel animate-pop-in overflow-hidden p-3">
            <div className="flex gap-3">
              <div className="relative grid h-24 w-32 shrink-0 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 ring-1 ring-white/10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.3),transparent)]" />
                <button className="relative grid size-10 place-items-center rounded-full bg-white/95 text-slate-900 shadow-lg transition active:scale-95">
                  <Play className="size-4 fill-current" />
                </button>
              </div>
              <div className="flex flex-1 flex-col">
                <p className="text-xs text-muted-foreground">Unit {l.n}</p>
                <p className="text-sm font-semibold leading-tight">{l.name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{l.videos} Videos</p>
                <div className="mt-1 flex items-center gap-3 text-[10px] text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Clock className="size-3" />{l.duration}</span>
                  <span className="inline-flex items-center gap-1"><Eye className="size-3" />{l.views}</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                    <div className={`h-full rounded-full ${l.progress === 100 ? "bg-emerald-400" : "bg-[var(--neon)]"}`} style={{ width: `${l.progress}%` }} />
                  </div>
                  <span className={`text-[10px] font-bold ${l.progress === 100 ? "text-emerald-300" : "text-[var(--neon)]"}`}>{l.progress}%</span>
                </div>
              </div>
            </div>
            <div className="mt-3 flex gap-2">
              <button className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[var(--neon-soft)] to-[var(--neon)] px-3 py-1.5 text-xs font-semibold text-white shadow-md transition active:scale-95">
                <Play className="size-3" /> Watch Now
              </button>
              <button className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white ring-1 ring-white/15 transition active:scale-95 hover:bg-white/15">
                <FileDown className="size-3" /> Notes
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition active:scale-95">
        <FileDown className="size-4" /> Download All Lectures
      </button>
    </AppShell>
  );
}
