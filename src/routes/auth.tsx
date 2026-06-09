import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Lock, User, Phone, KeyRound, ArrowRight, ShieldCheck } from "lucide-react";
import { AppShell } from "@/components/app-shell";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Login / Register — Youth Publication Learning Hub" },
      { name: "description", content: "Sign in or create your student account to access courses, notes, MCQs and CBT tests." },
    ],
  }),
  component: AuthPage,
});

type Mode = "login" | "signup" | "otp" | "forgot";

function AuthPage() {
  const [mode, setMode] = useState<Mode>("login");

  return (
    <AppShell title="Account" showBack={true}>
      <section className="glass-panel animate-pop-in p-5 text-center">
        <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-700 text-white shadow-lg">
          <ShieldCheck className="size-6" />
        </div>
        <h2 className="mt-3 text-lg font-bold">Welcome to Youth Publication</h2>
        <p className="text-xs text-muted-foreground">Polytechnic Learning Hub for Diploma Engineers</p>
      </section>

      <div className="glass-panel mt-4 flex gap-1 p-1 text-xs font-semibold">
        {(["login", "signup"] as const).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`flex-1 rounded-xl px-3 py-2 transition ${
              mode === m
                ? "bg-gradient-to-r from-[var(--neon-soft)] to-[var(--neon)] text-white shadow-lg"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {m === "login" ? "Login" : "Register"}
          </button>
        ))}
      </div>

      <section className="glass-panel animate-pop-in mt-4 space-y-3 p-5">
        {mode === "login" && <LoginForm onForgot={() => setMode("forgot")} onOtp={() => setMode("otp")} />}
        {mode === "signup" && <SignupForm onOtp={() => setMode("otp")} />}
        {mode === "otp" && <OtpForm onDone={() => setMode("login")} />}
        {mode === "forgot" && <ForgotForm onBack={() => setMode("login")} />}
      </section>

      {(mode === "login" || mode === "signup") && (
        <>
          <div className="my-4 flex items-center gap-3 text-[11px] text-muted-foreground">
            <span className="h-px flex-1 bg-white/10" /> OR CONTINUE WITH <span className="h-px flex-1 bg-white/10" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <SocialButton label="Google" />
            <SocialButton label="Mobile OTP" onClick={() => setMode("otp")} />
          </div>
        </>
      )}

      <p className="mt-4 text-center text-[11px] text-muted-foreground">
        By continuing you agree to our <Link to="/" className="underline">Terms</Link> &{" "}
        <Link to="/" className="underline">Privacy Policy</Link>
      </p>
    </AppShell>
  );
}

function Field({ icon: Icon, ...props }: { icon: any } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative">
      <Icon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      <input
        {...props}
        className="w-full rounded-full bg-white/5 py-3 pl-10 pr-4 text-sm placeholder:text-muted-foreground outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-[var(--neon)]"
      />
    </div>
  );
}

function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="submit"
      className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--neon-soft)] to-[var(--neon)] px-4 py-3 text-sm font-semibold text-white shadow-lg transition active:scale-95"
    >
      {children} <ArrowRight className="size-4" />
    </button>
  );
}

function SocialButton({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-white/5 px-4 py-3 text-sm font-semibold ring-1 ring-white/10 transition hover:bg-white/10 active:scale-95"
    >
      {label}
    </button>
  );
}

function LoginForm({ onForgot, onOtp }: { onForgot: () => void; onOtp: () => void }) {
  return (
    <form onSubmit={(e) => { e.preventDefault(); onOtp(); }} className="space-y-3">
      <Field icon={Mail} type="email" placeholder="Email or mobile number" required />
      <Field icon={Lock} type="password" placeholder="Password" required />
      <div className="flex items-center justify-between text-xs">
        <label className="flex items-center gap-2 text-muted-foreground">
          <input type="checkbox" className="accent-[var(--neon)]" /> Remember me
        </label>
        <button type="button" onClick={onForgot} className="font-semibold text-[var(--neon)]">Forgot password?</button>
      </div>
      <PrimaryButton>Login</PrimaryButton>
    </form>
  );
}

function SignupForm({ onOtp }: { onOtp: () => void }) {
  return (
    <form onSubmit={(e) => { e.preventDefault(); onOtp(); }} className="space-y-3">
      <Field icon={User} placeholder="Full name" required />
      <Field icon={Phone} type="tel" placeholder="Mobile number (10 digits)" pattern="[0-9]{10}" required />
      <Field icon={Mail} type="email" placeholder="Email address" required />
      <Field icon={Lock} type="password" placeholder="Create password (8+ chars)" minLength={8} required />
      <PrimaryButton>Send OTP</PrimaryButton>
    </form>
  );
}

function OtpForm({ onDone }: { onDone: () => void }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  return (
    <form onSubmit={(e) => { e.preventDefault(); onDone(); }} className="space-y-4">
      <div className="text-center">
        <p className="text-sm font-semibold">Verify your number</p>
        <p className="text-xs text-muted-foreground">Enter the 6-digit code sent to your mobile</p>
      </div>
      <div className="flex justify-between gap-2">
        {otp.map((v, i) => (
          <input
            key={i}
            value={v}
            onChange={(e) => {
              const next = [...otp];
              next[i] = e.target.value.slice(-1);
              setOtp(next);
              if (e.target.value && i < 5) {
                const el = document.getElementById(`otp-${i + 1}`);
                el?.focus();
              }
            }}
            id={`otp-${i}`}
            inputMode="numeric"
            maxLength={1}
            className="size-12 flex-1 rounded-xl bg-white/5 text-center text-lg font-bold ring-1 ring-white/10 outline-none focus:ring-2 focus:ring-[var(--neon)]"
          />
        ))}
      </div>
      <p className="text-center text-xs text-muted-foreground">Resend code in <span className="font-semibold text-[var(--neon)]">00:42</span></p>
      <PrimaryButton>Verify & Continue</PrimaryButton>
    </form>
  );
}

function ForgotForm({ onBack }: { onBack: () => void }) {
  return (
    <form onSubmit={(e) => { e.preventDefault(); onBack(); }} className="space-y-3">
      <div className="text-center">
        <KeyRound className="mx-auto size-8 text-[var(--neon)]" />
        <p className="mt-2 text-sm font-semibold">Reset your password</p>
        <p className="text-xs text-muted-foreground">We'll email you a reset link</p>
      </div>
      <Field icon={Mail} type="email" placeholder="Registered email" required />
      <PrimaryButton>Send reset link</PrimaryButton>
      <button type="button" onClick={onBack} className="w-full text-center text-xs text-muted-foreground">Back to login</button>
    </form>
  );
}
