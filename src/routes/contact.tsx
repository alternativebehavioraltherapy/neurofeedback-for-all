import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";
import { site } from "@/data/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Contact Neurofeedback For All about home neurofeedback system rentals in Vancouver, WA."
      />
      <PageHero
        eyebrow="Contact us"
        title="Inquire about a rental"
        description="Tell us about your needs — monthly unlimited rentals, shipping, or low-income rates. We will get back to you promptly."
      />

      <section className="container-page py-12 md:py-16">
        <div className="mx-auto flex max-w-xl flex-col gap-4">
          <div className="surface-card p-6 md:p-8">
            <h2 className="font-display text-2xl text-center">
              Reach us directly
            </h2>
            <p className="mt-2 text-center text-sm text-[var(--color-fg-muted)]">
              Call or email and inquire about {site.inquireAbout}. We respond
              promptly to rental inquiries.
            </p>
            <ul className="mt-8 space-y-5 text-sm">
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" />
                <div>
                  <p className="font-medium text-[var(--color-fg)]">Main line</p>
                  <a
                    href={site.phoneHref}
                    className="text-[var(--color-fg-muted)] hover:text-[var(--color-primary)]"
                  >
                    {site.phone}
                  </a>
                  <p className="mt-1 text-xs text-[var(--color-fg-subtle)]">
                    When you call, inquire about {site.inquireAbout}.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" />
                <div>
                  <p className="font-medium text-[var(--color-fg)]">Email</p>
                  <a
                    href={site.emailHref}
                    className="break-all text-[var(--color-fg-muted)] hover:text-[var(--color-primary)]"
                  >
                    {site.email}
                  </a>
                  <p className="mt-1 text-xs text-[var(--color-fg-subtle)]">
                    When you email, inquire about {site.inquireAbout}.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" />
                <div>
                  <p className="font-medium text-[var(--color-fg)]">
                    Mailing address
                  </p>
                  <a
                    href={site.address.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[var(--color-fg-muted)] hover:text-[var(--color-primary)]"
                  >
                    {site.address.line1}
                    <br />
                    {site.address.city}
                  </a>
                  <p className="mt-1 text-xs text-[var(--color-fg-subtle)]">
                    Home rental systems ship nationwide (shipping extra)
                  </p>
                </div>
              </li>
            </ul>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="flex-1">
                <a href={site.phoneHref}>Call {site.phone}</a>
              </Button>
              <Button asChild variant="outline" className="flex-1">
                <a href={site.emailHref}>Email us</a>
              </Button>
            </div>
            <Button asChild variant="ghost" className="mt-3 w-full">
              <a href={site.address.mapsUrl} target="_blank" rel="noreferrer">
                Get directions
              </a>
            </Button>
          </div>

          <div className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-primary-soft)] p-5 text-center md:p-6">
            <h3 className="font-display text-lg text-[var(--color-fg)]">
              Unlimited sessions rental
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-fg-muted)]">
              <strong className="font-semibold text-[var(--color-fg)]">
                $500 / month + shipping
              </strong>
              . Train at home on your schedule. Ask about low-income rates.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
