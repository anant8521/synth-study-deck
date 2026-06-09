import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Crown, Sparkles, Zap, Gem } from "lucide-react";
import { AppShell } from "@/components/app-shell";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Membership Plans — Youth Publication Learning Hub" },
      { name: "description", content: "Choose Free, Silver, Gold or Platinum membership for unlimited courses, notes, MCQs, CBT tests and e-books." },
    ],
  }),
  component: MembershipPage,
});

const plans = [
  {
    key: "free",
    name: "Free",
    price: "₹0",
    period: "forever",
    icon: Sparkles,
    tone: "from-slate-500 to-slate-700",
    badge: null,
    features: ["3 free video lectures / month", "Sample notes (5 PDFs)", "10 MCQs per subject", "Community access"],
    cta: "Current plan",
  },
  {
    key: "silver",
    name: "Silver",
    price: "₹199",
    period: "/ month",
    icon: Zap,
    tone: "from-blue-500 to-cyan-700",
    badge: null,
    features: ["Unlimited video lectures", "All PDF & handwritten notes", "Unlimited MCQ practice", "Basic CBT mock tests"],
    cta: "Choose Silver",
  },
  {
    key: "gold",
    name: "Gold",
    price: "₹499",
    period: "/ month",
    icon: Crown,
    tone: "from-amber-500 to-orange-600",
    badge: "MOST POPULAR",
    features: ["Everything in Silver", "Full E-Book library", "Year-wise PYQ with solutions", "All CBT tests + rank list", "Doubt support (48h reply)"],
    cta: "Choose Gold",
  },
  {
    key: "platinum",
    name: "Platinum",
    price: "₹999",
    period: "/ month",
    icon: Gem,
    tone: "from-violet-500 to-fuchsia-700",
    badge: "BEST VALUE",
    features: ["Everything in Gold", "1-on-1 faculty doubts (24h)", "AI study assistant", "Course completion certificate", "Priority new content access"],
    cta: "Choose Platinum",
  },
];

function MembershipPage() {
  return (
    <AppShell title="Membership Plans" subtitle="Unlock your full potential">
      <section className="glass-panel animate-pop-in p-5 text-center">
        <Crown className="mx-auto size-8 text-amber-400" />
        <h2 className="mt-2 text-lg font-bold">Premium Learning Plans</h2>
        <p className="text-xs text-muted-foreground">Cancel anytime · Instant access · UPI / Cards / Net Banking</p>
      </section>

      <div className="mt-4 space-y-3">
        {plans.map((p) => (
          <article
            key={p.key}
            className={`glass-panel animate-pop-in relative p-5 ${
              p.badge ? "ring-2 ring-amber-400/40 shadow-[0_0_40px_-10px_rgba(251,191,36,0.45)]" : ""
            }`}
          >
            {p.badge && (
              <span className="absolute -top-2 right-4 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-3 py-0.5 text-[10px] font-bold text-slate-900 shadow-lg">
                {p.badge}
              </span>
            )}
            <div className="flex items-center gap-3">
              <div className={`grid size-12 place-items-center rounded-2xl bg-gradient-to-br ${p.tone} text-white shadow-lg`}>
                <p.icon className="size-5" />
              </div>
              <div className="flex-1">
                <p className="text-base font-bold">{p.name}</p>
                <p className="text-xs text-muted-foreground">For serious learners</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-extrabold text-[var(--neon)]">{p.price}</p>
                <p className="text-[10px] text-muted-foreground">{p.period}</p>
              </div>
            </div>

            <ul className="mt-4 space-y-2">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-xs">
                  <Check className="mt-0.5 size-3.5 shrink-0 text-emerald-400" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <button
              disabled={p.key === "free"}
              className={`mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition active:scale-95 ${
                p.key === "free"
                  ? "bg-white/5 text-muted-foreground ring-1 ring-white/10"
                  : p.badge
                  ? "bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 shadow-lg"
                  : "bg-gradient-to-r from-[var(--neon-soft)] to-[var(--neon)] text-white shadow-lg"
              }`}
            >
              {p.cta}
            </button>
          </article>
        ))}
      </div>

      <section className="glass-panel mt-4 p-4 text-center">
        <p className="text-xs text-muted-foreground">
          Secure payments via <span className="font-semibold text-foreground">Razorpay</span> · UPI · PhonePe · GPay · Paytm · Cards
        </p>
        <Link to="/auth" className="mt-3 inline-block text-xs font-semibold text-[var(--neon)] underline">
          Need an account? Sign in or register →
        </Link>
      </section>
    </AppShell>
  );
}
