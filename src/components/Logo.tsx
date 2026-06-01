export function Logo({ className = "h-7 w-auto", variant = "dark" }: { className?: string; variant?: "dark" | "light" }) {
  const text = variant === "light" ? "text-white" : "text-primary";
  return (
    <div className={`flex items-center gap-2 ${text}`}>
      <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <rect x="2" y="2" width="28" height="28" rx="7" fill="currentColor" />
        <path d="M10 22V10h2.4l3.6 5.6L19.6 10H22v12h-2.2v-7.6L16 19.6l-3.8-5.2V22H10Z" fill="var(--color-accent)" />
        <circle cx="24" cy="9" r="2.5" fill="var(--color-accent)" />
      </svg>
      <span className="font-bold text-lg tracking-tight">MediPass</span>
    </div>
  );
}
