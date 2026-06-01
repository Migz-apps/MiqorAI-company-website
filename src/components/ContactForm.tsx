import { useState } from "react";
import { toast } from "sonner";

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const data = new FormData(e.currentTarget);
    // No backend wired — placeholder: pretend success.
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thanks — we'll be in touch shortly.");
      console.log("contact_submit", Object.fromEntries(data.entries()));
    }, 600);
  }

  const inputCls =
    "w-full rounded-md border border-border bg-white px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent";

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-foreground/70 mb-1.5">Name</label>
          <input required name="name" maxLength={120} className={inputCls} placeholder="Jane Doe" />
        </div>
        <div>
          <label className="block text-xs font-medium text-foreground/70 mb-1.5">Organization</label>
          <input name="organization" maxLength={160} className={inputCls} placeholder="Eden Care" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-foreground/70 mb-1.5">Email</label>
          <input required type="email" name="email" maxLength={200} className={inputCls} placeholder="you@company.com" />
        </div>
        <div>
          <label className="block text-xs font-medium text-foreground/70 mb-1.5">I am a</label>
          <select name="role" className={inputCls} defaultValue="Insurer">
            <option>Insurer</option>
            <option>Hospital</option>
            <option>Investor</option>
            <option>Patient</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-foreground/70 mb-1.5">Message (optional)</label>
        <textarea name="message" maxLength={2000} rows={4} className={inputCls} placeholder="Tell us a bit about your goals." />
      </div>
      <button
        disabled={submitting}
        type="submit"
        className="justify-self-start inline-flex items-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:bg-primary/90 disabled:opacity-60 transition-colors"
      >
        {submitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
