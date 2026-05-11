"use client";

import { useState, type FormEvent } from "react";
import { Send, Check, Loader2 } from "lucide-react";
import { tourPackages } from "@/data/packages";
import { whatsappLink } from "@/lib/config";
import { cn } from "@/lib/utils";

/**
 * Booking / inquiry form.
 * On submit, the form opens WhatsApp with a pre-filled, formatted message
 * — a simple, no-backend approach perfect for small travel agencies.
 *
 * To wire to a real backend (Resend / Formspree / API route), replace
 * `handleSubmit` with a fetch to your /api/contact route.
 */
type Status = "idle" | "submitting" | "success";

export function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const country = formData.get("country") as string;
    const pkg = formData.get("package") as string;
    const date = formData.get("date") as string;
    const travellers = formData.get("travellers") as string;
    const message = formData.get("message") as string;

    const text = [
      "*New Tour Inquiry — April Tour Website*",
      "",
      `*Name:* ${name}`,
      `*Email:* ${email}`,
      country && `*Country:* ${country}`,
      `*Package:* ${pkg}`,
      `*Preferred date:* ${date || "Flexible"}`,
      `*Travellers:* ${travellers}`,
      "",
      "*Message:*",
      message || "(No additional message)",
    ]
      .filter(Boolean)
      .join("\n");

    // Fake brief loading state for UX
    setTimeout(() => {
      window.open(whatsappLink(text), "_blank");
      setStatus("success");
      // Reset back to idle after a few seconds so the user can submit again if needed
      setTimeout(() => setStatus("idle"), 4000);
    }, 600);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
      aria-label="Tour inquiry form"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Full name *" name="name" type="text" required placeholder="Jane Doe" />
        <Field label="Email *" name="email" type="email" required placeholder="jane@example.com" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Country" name="country" type="text" placeholder="USA, France, Indonesia…" />
        <Field
          label="Number of travellers *"
          name="travellers"
          type="number"
          min={1}
          max={20}
          defaultValue={2}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <Label>Tour package *</Label>
          <select
            name="package"
            required
            defaultValue=""
            className="w-full h-12 px-4 rounded-xl border border-navy-200 bg-cream-50 text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
          >
            <option value="" disabled>Select a package</option>
            {tourPackages.map((pkg) => (
              <option key={pkg.slug} value={pkg.title}>
                {pkg.title} ({pkg.duration})
              </option>
            ))}
            <option value="Custom Tour">Custom Tour — let's design it together</option>
            <option value="Airport Transfer">Airport Transfer</option>
            <option value="Car Rental">Car Rental</option>
          </select>
        </div>
        <Field label="Preferred date" name="date" type="date" />
      </div>

      <div>
        <Label>Tell us about your dream trip</Label>
        <textarea
          name="message"
          rows={4}
          placeholder="Anything we should know? Special interests, dietary needs, mobility considerations, hotels you'd like…"
          className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-cream-50 text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all resize-none"
        />
      </div>

      <p className="text-xs text-navy-600/80">
        Submitting opens WhatsApp with a pre-filled message — easy and fast. We
        normally reply within an hour during the day.
      </p>

      <button
        type="submit"
        disabled={status !== "idle"}
        className={cn(
          "btn-primary w-full md:w-auto group",
          status === "success" && "bg-emerald-600 hover:bg-emerald-700"
        )}
      >
        {status === "submitting" && (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Preparing message…
          </>
        )}
        {status === "success" && (
          <>
            <Check className="h-4 w-4" />
            Opened WhatsApp ✓
          </>
        )}
        {status === "idle" && (
          <>
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            Send via WhatsApp
          </>
        )}
      </button>
    </form>
  );
}

/* ---------- Subcomponents ---------- */

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-navy-700">
      {children}
    </label>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  min?: number;
  max?: number;
  defaultValue?: string | number;
}

function Field({ label, name, type, required, placeholder, min, max, defaultValue }: FieldProps) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        min={min}
        max={max}
        defaultValue={defaultValue}
        className="w-full h-12 px-4 rounded-xl border border-navy-200 bg-cream-50 text-navy-900 text-sm placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
      />
    </div>
  );
}
