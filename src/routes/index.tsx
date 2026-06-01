import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, QrCode, ScanLine, ShieldAlert, Check, Calendar, Cpu, Server, MapPin, Mail, Linkedin, Twitter, Smartphone, Repeat, Phone } from "lucide-react";
import { Toaster } from "sonner";
import { Nav } from "@/components/Nav";
import { Logo } from "@/components/Logo";
import { ContactForm } from "@/components/ContactForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MediPass — Stop duplicate tests before they happen" },
      { name: "description", content: "MediPass gives patients a free QR code carrying their medical history. AI detects duplicate tests before they happen — saving insurers money and protecting hospitals." },
      { property: "og:title", content: "MediPass — Stop duplicate tests before they happen" },
      { property: "og:description", content: "A free QR code that carries patient medical history. AI prevents duplicate tests in real time." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 md:py-28 px-6 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent mb-4">{children}</p>;
}

function Home() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Toaster position="top-right" richColors />
      <Nav />

      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 px-6 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-60" aria-hidden />
        <div className="absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full bg-accent/15 blur-3xl" aria-hidden />
        <div className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-5xl text-center fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/60 backdrop-blur px-3 py-1 text-xs text-foreground/70">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Pilot launching August 2026
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-primary leading-[1.05]">
            Stop paying for the <span className="text-accent">same test</span> twice.
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-foreground/70 leading-relaxed">
            MediPass gives patients a free QR code that carries their medical history. When a doctor scans it, they see only what the current symptoms require — and our AI detects duplicate tests before they happen. Insurance companies save money. Hospitals work smarter and are protected from medical lawsuits. Patients get better care.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href="#insurers" className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-5 py-3 text-sm font-medium hover:bg-primary/90 transition-colors">
              For Insurers <ArrowRight size={16} />
            </a>
            <a href="#how" className="inline-flex items-center gap-2 rounded-md border border-border bg-white px-5 py-3 text-sm font-medium text-primary hover:border-accent hover:text-accent transition-colors">
              Learn how it works <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* PROBLEM / STATS */}
      <Section className="bg-surface">
        <div className="max-w-3xl">
          <Eyebrow>The problem</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Duplicate medical tests cost insurance companies over $50 billion annually.
          </h2>
          <p className="mt-4 text-foreground/70 text-lg">
            15–30% of all laboratory tests in emerging markets are unnecessary repeats. Patients wait and suffer financial losses. Doctors miss critical information. Insurers pay twice.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { stat: "$50B+", label: "Global annual waste from duplicate tests" },
            { stat: "15–30%", label: "Of lab tests are unnecessary repeats" },
            { stat: "20%", label: "Average savings returned to insurers" },
          ].map(s => (
            <div key={s.stat} className="rounded-xl border border-border bg-white p-8">
              <div className="text-4xl md:text-5xl font-bold text-accent tracking-tight">{s.stat}</div>
              <div className="mt-3 text-sm text-foreground/70">{s.label}</div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">Source: Global healthcare waste studies.</p>
      </Section>

      {/* HOW IT WORKS */}
      <Section id="how">
        <div className="max-w-3xl">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">How MediPass works</h2>
          <p className="mt-4 text-foreground/70 text-lg">
            Simple for patients. Powerful for doctors. Profitable for insurers.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { icon: QrCode, title: "Patient gets QR code", body: "Patients download the free MediPass app or receive a QR card via USSD. Their medical history is securely stored and encrypted." },
            { icon: ScanLine, title: "Doctor scans code", body: "At any participating hospital, the doctor scans the QR. They instantly see a summary of allergies, current medications, and recent test results — filtered to the symptoms at hand." },
            { icon: ShieldAlert, title: "AI stops duplicates", body: "If a test was already done recently elsewhere, our AI warns the doctor before they order it again. The doctor cancels. The duplicate never happens." },
          ].map((s, i) => (
            <div key={s.title} className="relative rounded-xl border border-border bg-white p-8 hover:border-accent/40 transition-colors">
              <div className="absolute top-6 right-6 text-xs font-mono text-muted-foreground">0{i + 1}</div>
              <div className="h-11 w-11 rounded-lg bg-accent-soft text-accent flex items-center justify-center">
                <s.icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FOR INSURERS */}
      <Section id="insurers" className="bg-primary text-white">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent mb-4">For insurers</p>
            <h2 className="text-3xl md:text-4xl font-bold">For Insurance Companies</h2>
            <p className="mt-4 text-white/75 text-lg">
              We share a percentage of the profits. You pay nothing upfront — and only when we save you money.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Eliminate duplicate test payments",
                "Pay-for-savings model — a % of documented savings",
                "No setup fees, no subscription fees",
                "No upfront costs. No risk.",
                "Monthly reports showing exactly what we saved you",
              ].map(b => (
                <li key={b} className="flex items-start gap-3 text-white/90">
                  <Check size={18} className="mt-0.5 text-accent shrink-0" /> <span>{b}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="mt-10 inline-flex items-center gap-2 rounded-md bg-accent text-accent-foreground px-5 py-3 text-sm font-medium hover:opacity-90 transition">
              Request a pilot <ArrowRight size={16} />
            </a>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur p-8">
            <div className="text-sm text-accent font-semibold uppercase tracking-wider">How savings add up</div>
            <div className="mt-6 divide-y divide-white/10">
              {[
                ["Duplicate tests prevented / month", "100"],
                ["Average test cost", "$25"],
                ["Total monthly savings", "$2,500"],
                ["Insurance company keeps (80%)", "$2,000"],
                ["MediPass receives (20%)", "$500"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between items-center py-3">
                  <span className="text-white/75 text-sm">{k}</span>
                  <span className="font-semibold tabular-nums">{v}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-accent">If we save you nothing, you pay nothing.</p>
          </div>
        </div>
      </Section>

      {/* FOR HOSPITALS */}
      <Section id="hospitals" className="bg-surface">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-[5/4] rounded-2xl border border-border bg-white p-8 relative overflow-hidden">
              <div className="absolute inset-0 grid-pattern opacity-50" aria-hidden />
              <div className="relative h-full flex items-center justify-center">
                <svg viewBox="0 0 400 320" className="w-full max-w-md">
                  {/* Phone */}
                  <rect x="140" y="40" width="120" height="220" rx="16" fill="white" stroke="#1A2A3A" strokeWidth="2" />
                  <rect x="155" y="62" width="90" height="120" rx="6" fill="#F5F5F5" />
                  {/* QR */}
                  <g fill="#1A2A3A">
                    {Array.from({ length: 36 }).map((_, i) => {
                      const x = 165 + (i % 6) * 12;
                      const y = 72 + Math.floor(i / 6) * 12;
                      const on = [0,2,3,5,6,8,11,13,14,16,19,21,22,24,27,29,30,33,35].includes(i);
                      return on ? <rect key={i} x={x} y={y} width="9" height="9" rx="1" /> : null;
                    })}
                  </g>
                  <rect x="170" y="200" width="60" height="6" rx="3" fill="#1A2A3A" opacity="0.2" />
                  <rect x="180" y="214" width="40" height="6" rx="3" fill="#1A2A3A" opacity="0.15" />
                  {/* Scan beam */}
                  <line x1="60" y1="160" x2="140" y2="160" stroke="#008080" strokeWidth="2" strokeDasharray="4 4" />
                  <circle cx="60" cy="160" r="6" fill="#008080" />
                  {/* Doctor (faceless) */}
                  <circle cx="40" cy="130" r="18" fill="#1A2A3A" />
                  <rect x="20" y="148" width="40" height="48" rx="8" fill="#1A2A3A" />
                  <rect x="20" y="148" width="40" height="14" fill="white" />
                  <path d="M30 196 L20 240 M50 196 L60 240" stroke="#1A2A3A" strokeWidth="6" strokeLinecap="round" />
                  {/* Alert */}
                  <g transform="translate(290 70)">
                    <circle r="26" fill="#008080" />
                    <path d="M0 -10 L0 4" stroke="white" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="0" cy="12" r="2" fill="white" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Eyebrow>For hospitals</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">For Hospitals</h2>
            <p className="mt-4 text-foreground/70 text-lg">
              Better information. Faster decisions. Fewer errors. Lawsuit protection.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Access patient history instantly — no more asking patients to repeat their story",
                "AI warnings prevent duplicate test orders — saving lab time and resources",
                "Medication interaction alerts reduce malpractice risk",
                "Works offline — USSD and printed QR cards work everywhere",
                "Free for hospitals during pilot phase",
              ].map(b => (
                <li key={b} className="flex items-start gap-3">
                  <Check size={18} className="mt-0.5 text-accent shrink-0" /> <span className="text-foreground/80">{b}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="mt-10 inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-5 py-3 text-sm font-medium hover:bg-primary/90 transition">
              Join the network <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </Section>

      {/* FOR PATIENTS */}
      <Section id="patients">
        <div className="max-w-3xl">
          <Eyebrow>For patients</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">For Patients</h2>
          <p className="mt-4 text-foreground/70 text-lg">Your health. Your history. In your pocket.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { icon: Repeat, body: "No more repeating your story to every new doctor." },
            { icon: ShieldAlert, body: "No more unnecessary repeat tests and waiting." },
            { icon: Phone, body: "No smartphone? No problem. USSD code works too." },
          ].map((c, i) => (
            <div key={i} className="rounded-xl border border-border bg-white p-8">
              <div className="h-11 w-11 rounded-lg bg-accent-soft text-accent flex items-center justify-center">
                <c.icon size={22} />
              </div>
              <p className="mt-5 text-foreground/80">{c.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-5 py-3 text-sm font-medium hover:bg-primary/90 transition">
            Get your QR code <ArrowRight size={16} />
          </a>
          <span className="text-sm text-muted-foreground">MediPass is always free for patients.</span>
        </div>
      </Section>

      {/* PARTNERS */}
      <Section className="bg-surface">
        <div className="text-center max-w-2xl mx-auto">
          <Eyebrow>Partnering with</Eyebrow>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">Trusted by forward-thinking healthcare leaders</h2>
        </div>
        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          {["Eden Care Medical", "First pilot — August 2026", "More partners coming"].map(t => (
            <div key={t} className="rounded-xl border border-border bg-white px-6 py-8 text-center text-primary font-semibold">
              {t}
            </div>
          ))}
        </div>
        <figure className="mt-12 max-w-3xl mx-auto text-center">
          <blockquote className="text-xl md:text-2xl text-primary font-medium leading-snug">
            “The pilot program is exactly what we need to reduce wasteful spending.”
          </blockquote>
          <figcaption className="mt-4 text-sm text-muted-foreground">— Insurance Executive, East Africa</figcaption>
        </figure>
      </Section>

      {/* PROGRESS */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>Progress</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Progress so far</h2>
          <p className="mt-4 text-foreground/70 text-lg">Working prototype. Real traction. Ready to pilot.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Check, label: "Frontend complete", done: true },
            { icon: Cpu, label: "AI duplicate detection working in testing", done: true },
            { icon: Server, label: "Backend architecture designed", done: false },
            { icon: Calendar, label: "Scheduling pilot with Eden Care", done: false },
          ].map(c => (
            <div key={c.label} className="rounded-xl border border-border bg-white p-6">
              <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${c.done ? "bg-accent text-white" : "bg-accent-soft text-accent"}`}>
                <c.icon size={18} />
              </div>
              <div className="mt-4 text-sm font-medium text-primary">{c.label}</div>
              <div className="mt-1 text-xs text-muted-foreground">{c.done ? "Complete" : "In progress"}</div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          We are actively looking for pilot partners. <a href="#contact" className="text-accent hover:underline">Contact us</a> to learn more.
        </p>
      </Section>

      {/* CONTACT */}
      <Section id="contact" className="bg-primary text-white">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent mb-4">Contact</p>
            <h2 className="text-3xl md:text-4xl font-bold">Ready to stop paying for duplicate tests?</h2>
            <p className="mt-4 text-white/75 text-lg">
              Contact us to schedule a demo or join our pilot program.
            </p>
            <div className="mt-10 space-y-4 text-white/85">
              <div className="flex items-center gap-3"><Mail size={18} className="text-accent" /> miguel@medipass.com</div>
              <div className="flex items-center gap-3"><MapPin size={18} className="text-accent" /> Kigali, Rwanda</div>
              <div className="flex items-center gap-3"><Smartphone size={18} className="text-accent" /> Works on smartphones &amp; basic phones (USSD)</div>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-6 md:p-8 text-foreground">
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-primary text-white/70 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
          <Logo variant="light" />
          <nav className="flex flex-wrap gap-6 text-sm">
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#insurers" className="hover:text-white">For Insurers</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin size={18} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter size={18} /></a>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-white/50">
            © 2026 MediPass. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
