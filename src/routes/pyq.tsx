import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { FileText, FileDown } from "lucide-react";
import { AppShell, TabBar } from "@/components/app-shell";

export const Route = createFileRoute("/pyq")({
  head: () => ({
    meta: [
      { title: "Previous Year Papers — Engineering Study Hub" },
      { name: "description", content: "Year-wise and unit-wise PYQs with objective, short, long questions and solved PDFs." },
    ],
  }),
  component: PYQPage,
});

const years = [2025, 2024, 2023, 2022, 2021];

function PYQPage() {
  const [tab, setTab] = useState("Year Wise");
  return (
    <AppShell title="Previous Year Papers">
      <TabBar tabs={["Year Wise", "Unit Wise"]} active={tab} onChange={setTab} />
      <div className="mt-4 space-y-3">
        {years.map((y) => (
          <div key={y} className="glass-panel animate-pop-in p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-extrabold">{y}</p>
                <p className="text-xs text-muted-foreground">Electrical Circuit and Networks</p>
              </div>
              <button className="rounded-full bg-gradient-to-r from-[var(--neon-soft)] to-[var(--neon)] px-4 py-1.5 text-xs font-semibold text-white shadow-md transition active:scale-95">
                View
              </button>
            </div>
            <div className="mt-3 grid grid-cols-4 gap-1.5">
              {["Objective", "Short Q", "Long Q", "Solved PDF"].map((c) => (
                <button key={c} className="flex flex-col items-center gap-1 rounded-lg bg-white/5 p-2 ring-1 ring-white/10 transition active:scale-95 hover:bg-white/10">
                  <FileText className="size-4 text-[var(--neon)]" />
                  <span className="text-[9px] text-center leading-tight text-muted-foreground">{c}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition active:scale-95">
        <FileDown className="size-4" /> Download All PYQ
      </button>
    </AppShell>
  );
}
