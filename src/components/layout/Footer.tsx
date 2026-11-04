import { Link } from "@tanstack/react-router";
import { Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { SiteImage } from "@/components/SiteImage";
import { navLinks, site } from "@/data/site";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.992 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-[var(--color-border)] bg-[var(--color-bg-ink)] text-[var(--color-fg-on-ink)]">
      <div className="container-page grid gap-10 py-12 md:grid-cols-12 md:gap-8 md:py-16">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <SiteImage
              src="/logo-transparent.png"
              alt=""
              width={48}
              height={48}
              className="mark-footer h-12 w-12 rounded-full bg-[var(--color-bg-elevated)] object-contain p-1"
            />
            <div>
              <div className="font-display text-lg font-semibold tracking-tight">
                {site.name}
              </div>
              <div className="text-sm text-[var(--color-fg-on-ink-muted)]">
                {site.brand} · Neurofeedback Rentals
              </div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--color-fg-on-ink-muted)]">
            Non-clinical brain training you can use at home. Monthly system
            rentals with unlimited sessions — accessible, available, and
            affordable.
          </p>
          <div className="mt-5 flex gap-2">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] border border-white/10 bg-white/5 text-[var(--color-fg-on-ink)] transition-colors hover:bg-white/10 focus-ring"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] border border-white/10 bg-white/5 text-[var(--color-fg-on-ink)] transition-colors hover:bg-white/10 focus-ring"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={site.social.twitter}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] border border-white/10 bg-white/5 text-[var(--color-fg-on-ink)] transition-colors hover:bg-white/10 focus-ring"
              aria-label="X (Twitter)"
            >
              <XIcon className="h-4 w-4" />
            </a>
            <a
              href={site.social.email}
              className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] border border-white/10 bg-white/5 text-[var(--color-fg-on-ink)] transition-colors hover:bg-white/10 focus-ring"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <h2 className="text-sm font-semibold tracking-wide text-[var(--color-fg-on-ink)] uppercase">
            Explore
          </h2>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-[var(--color-fg-on-ink-muted)] transition-colors hover:text-[var(--color-fg-on-ink)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h2 className="text-sm font-semibold tracking-wide text-[var(--color-fg-on-ink)] uppercase">
            Contact
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-[var(--color-fg-on-ink-muted)]">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" />
              <a
                href={site.address.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[var(--color-fg-on-ink)]"
              >
                {site.address.line1}
                <br />
                {site.address.city}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" />
              <div>
                <a href={site.phoneHref} className="hover:text-[var(--color-fg-on-ink)]">
                  {site.phone}
                </a>
                <span className="mt-0.5 block text-xs">
                  Inquire about {site.inquireAbout}
                </span>
              </div>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" />
              <div>
                <a href={site.emailHref} className="hover:text-[var(--color-fg-on-ink)]">
                  {site.email}
                </a>
                <span className="mt-0.5 block text-xs">
                  Inquire about {site.inquireAbout}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-[var(--color-fg-on-ink-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}® · {site.brand}. All rights reserved.
          </p>
          <p>Vancouver, Washington · Home neurofeedback rentals</p>
        </div>
      </div>
    </footer>
  );
}
