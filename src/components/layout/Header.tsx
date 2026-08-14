import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-bg)_88%,transparent)] backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-[4.25rem]">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-2.5 focus-ring rounded-[var(--radius-sm)]"
          onClick={() => setOpen(false)}
        >
          <img
            src="/logo-transparent.png"
            alt={`${site.name} logo`}
            className="h-10 w-10 shrink-0 object-contain md:h-11 md:w-11"
          />
          <div className="min-w-0 leading-tight">
            <div className="truncate font-display text-[0.95rem] font-semibold tracking-tight text-[var(--color-fg)] md:text-base">
              {site.name}
            </div>
            <div className="truncate text-xs text-[var(--color-fg-muted)]">
              {site.brand}
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navLinks.map((link) => {
            const active =
              link.to === "/"
                ? pathname === "/"
                : pathname.startsWith(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "rounded-[var(--radius-sm)] px-3.5 py-2 text-sm font-medium transition-colors focus-ring",
                  active
                    ? "bg-[var(--color-primary-soft)] text-[var(--color-primary)]"
                    : "text-[var(--color-fg-muted)] hover:bg-[var(--color-bg-subtle)] hover:text-[var(--color-fg)]",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
            <a href={site.phoneHref} className="gap-2">
              <Phone className="h-4 w-4" aria-hidden />
              {site.phone}
            </a>
          </Button>
          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link to="/contact">Rent a system</Link>
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] lg:hidden"
        >
          <nav className="container-page flex flex-col gap-1 py-3" aria-label="Mobile">
            {navLinks.map((link) => {
              const active =
                link.to === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-[var(--radius-md)] px-3.5 py-3 text-base font-medium transition-colors",
                    active
                      ? "bg-[var(--color-primary-soft)] text-[var(--color-primary)]"
                      : "text-[var(--color-fg)] hover:bg-[var(--color-bg-subtle)]",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={site.phoneHref}
              className="rounded-[var(--radius-md)] px-3.5 py-3 text-base font-medium text-[var(--color-fg-muted)]"
              onClick={() => setOpen(false)}
            >
              Call {site.phone}
            </a>
            <div className="px-1 pt-1 pb-2">
              <Button asChild className="w-full">
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Rent a system
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
