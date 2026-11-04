import { Link, createFileRoute } from "@tanstack/react-router";
import {
  Brain,
  Clock3,
  HandHeart,
  Headphones,
  Home,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";
import { site } from "@/data/site";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const highlights = [
  {
    icon: Home,
    title: "Train at home",
    body: "Rent a neurofeedback system and run unlimited sessions on your schedule — no office appointments to book.",
  },
  {
    icon: ShieldCheck,
    title: "Non-clinical & gentle",
    body: "NeurOptimal training raises awareness without directing the brain. Relaxing and non-invasive.",
  },
  {
    icon: Clock3,
    title: "Unlimited sessions",
    body: "Monthly rental includes unlimited use so you can train as often as fits your life.",
  },
  {
    icon: HandHeart,
    title: "Low-income rates",
    body: "Accessibility means affordability. Ask us about reduced rental rates and community options.",
  },
];

function HomePage() {
  return (
    <>
      <Seo title="Home" description={site.description} />

      <section className="relative overflow-hidden border-b border-[var(--color-border)]">
        <div className="absolute inset-0">
          <img
            src="/session-1.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgb(15_28_40_/_0.88)_0%,rgb(15_28_40_/_0.72)_48%,rgb(15_28_40_/_0.45)_100%)]" />
        </div>
        <div className="container-page relative grid gap-10 py-16 md:py-24 lg:grid-cols-12 lg:items-end lg:py-28">
          <div className="lg:col-span-7">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-[0.12em] text-[var(--color-fg-on-ink)] uppercase backdrop-blur-sm">
              <Brain className="h-3.5 w-3.5" aria-hidden />
              Vancouver, WA · NeurOptimal® rentals
            </p>
            <h1 className="font-display text-4xl leading-[1.08] text-balance text-[var(--color-fg-on-ink)] sm:text-5xl lg:text-6xl">
              Neurofeedback rentals for home training
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--color-fg-on-ink-muted)] md:text-lg">
              {site.tagline}. Rent a non-clinical neurofeedback system to
              support stress, focus, and general wellness — train at home with
              unlimited monthly sessions.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link to="/contact">Inquire about rentals</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="w-full border-white/20 bg-white/10 text-[var(--color-fg-on-ink)] hover:bg-white/15 sm:w-auto"
              >
                <Link to="/information">How it works</Link>
              </Button>
            </div>
            <p className="mt-5 text-sm text-[var(--color-fg-on-ink-muted)]">
              Call{" "}
              <a
                href={site.phoneHref}
                className="font-medium text-[var(--color-fg-on-ink)] underline-offset-2 hover:underline"
              >
                {site.phone}
              </a>{" "}
              · {site.askAbout}
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-[var(--radius-2xl)] border border-white/15 bg-[color-mix(in_oklab,var(--color-bg-ink)_55%,transparent)] p-5 shadow-[var(--shadow-lg)] backdrop-blur-md sm:p-6">
              <p className="text-xs font-semibold tracking-[0.14em] text-[var(--color-fg-on-ink-muted)] uppercase">
                Our offer
              </p>
              <h2 className="mt-2 font-display text-2xl text-[var(--color-fg-on-ink)]">
                Unlimited sessions rental
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-fg-on-ink-muted)]">
                Best rental pricing for ongoing training at home — flexible,
                scalable access without scheduling appointments.
              </p>
              <div className="mt-5 flex items-end gap-2">
                <span className="font-display text-4xl font-semibold text-[var(--color-fg-on-ink)]">
                  $500
                </span>
                <span className="mb-1 text-sm text-[var(--color-fg-on-ink-muted)]">
                  / month + shipping
                </span>
              </div>
              <Button asChild className="mt-5 w-full" variant="secondary">
                <Link to="/contact">Ask about rentals</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-14 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.14em] text-[var(--color-primary)] uppercase">
            Why people rent with us
          </p>
          <h2 className="mt-3 font-display text-3xl text-balance md:text-4xl">
            Accessibility means training on your terms
          </h2>
          <p className="mt-4 text-[var(--color-fg-muted)]">
            Affordable monthly rentals, unlimited sessions, and a path that
            scales with your life — that is the mission of {site.name}.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="surface-card flex h-full flex-col p-5 md:p-6"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
                <item.icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="mt-4 font-display text-xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-fg-muted)]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
        <div className="container-page grid gap-8 py-14 md:grid-cols-2 md:items-center md:gap-12 md:py-20">
          <div className="grid grid-cols-2 gap-3">
            <img
              src="/session-2.jpg"
              alt="Neurofeedback system ready for home training"
              className="aspect-[4/5] rounded-[var(--radius-xl)] object-cover shadow-[var(--shadow-md)]"
            />
            <img
              src="/session-3.jpg"
              alt="Person using a neurofeedback rental system"
              className="mt-8 aspect-[4/5] rounded-[var(--radius-xl)] object-cover shadow-[var(--shadow-md)]"
            />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-[var(--color-primary)] uppercase">
              What is neurofeedback?
            </p>
            <h2 className="mt-3 font-display text-3xl text-balance md:text-4xl">
              Train your brain's awareness — gently
            </h2>
            <p className="mt-4 text-[var(--color-fg-muted)] leading-relaxed">
              Neurofeedback is a form of biofeedback. Sensors monitor brain
              activity with EEG and feed that information back through visual,
              audio, or tactile cues. Our rentals use{" "}
              <strong className="font-semibold text-[var(--color-fg)]">
                NeurOptimal
              </strong>
              , a non-directive approach that invites the brain to notice its own
              electrical shifts.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Non-invasive sensors — nothing enters the body",
                "Sessions feel like relaxing with music or a movie",
                "Used to support stress, focus, sleep, and general wellness",
              ].map((line) => (
                <li
                  key={line}
                  className="flex gap-3 text-sm text-[var(--color-fg)]"
                >
                  <Headphones className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" />
                  {line}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8" variant="outline">
              <Link to="/information">Read the full information page</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container-page py-14 md:py-20">
        <div className="surface-card overflow-hidden md:grid md:grid-cols-12">
          <div className="md:col-span-4">
            <img
              src={site.owner.photo}
              alt={site.owner.name}
              className="h-full max-h-80 w-full object-cover object-top md:max-h-none"
            />
          </div>
          <div className="flex flex-col justify-center p-6 md:col-span-8 md:p-10 lg:p-12">
            <p className="text-xs font-semibold tracking-[0.14em] text-[var(--color-primary)] uppercase">
              Our mission
            </p>
            <blockquote className="mt-3 font-display text-2xl leading-snug text-balance md:text-3xl">
              Provide brain training that is non-clinical and can be used by
              everyone to help with stress and general wellness.
            </blockquote>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[var(--color-fg-muted)] md:text-base">
              We bring accessible neurofeedback into homes through rentals —
              so more people can train without clinic schedules or high per-session
              costs. We are accessible, available, affordable, and scalable.
            </p>
            <div className="mt-6 border-t border-[var(--color-border)] pt-5">
              <p className="font-semibold text-[var(--color-fg)]">
                {site.owner.name}
              </p>
              <p className="text-sm text-[var(--color-fg-muted)]">
                {site.owner.title} · Providing biofeedback & neurofeedback since
                2011
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] bg-[var(--color-bg-ink)]">
        <div className="container-page flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center md:py-16">
          <div>
            <h2 className="font-display text-3xl text-[var(--color-fg-on-ink)] md:text-4xl">
              Ready to rent a system?
            </h2>
            <p className="mt-2 max-w-xl text-[var(--color-fg-on-ink-muted)]">
              Reach out by phone or email. {site.askAbout} We will help you
              get started with a monthly unlimited rental plan.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link to="/contact">Ask about rentals</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="w-full border-white/15 bg-white/10 text-[var(--color-fg-on-ink)] hover:bg-white/15 sm:w-auto"
            >
              <a href={site.phoneHref}>Call {site.phone}</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
