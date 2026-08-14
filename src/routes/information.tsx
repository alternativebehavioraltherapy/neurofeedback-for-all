import { Link, createFileRoute } from "@tanstack/react-router";
import { ExternalLink, PlayCircle } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";
import { videos } from "@/data/site";

export const Route = createFileRoute("/information")({
  component: InformationPage,
});

function InformationPage() {
  return (
    <>
      <Seo
        title="Information"
        description="Learn how neurofeedback and NeurOptimal home rentals work at Neuro Balance NW / Neurofeedback For All in Vancouver, WA."
      />
      <PageHero
        eyebrow="Information"
        title="How neurofeedback works"
        description="Neurofeedback is brain training that uses real-time feedback so your nervous system can notice — and reorganize around — its own activity. Our rentals bring that training into your home."
      >
        <Button asChild>
          <Link to="/contact">Inquire about rentals</Link>
        </Button>
      </PageHero>

      <section className="container-page py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h2 className="font-display text-2xl md:text-3xl">Discovery</h2>
            <div className="mt-4 space-y-4 text-[var(--color-fg-muted)] leading-relaxed">
              <p>
                Neurofeedback is a form of biofeedback that involves training
                mental states and/or brain waves. An electroencephalograph (EEG)
                monitors brain function and feeds that behavior back to the
                individual through visual, audio, or tactile stimulation.
              </p>
              <p>
                Neurofeedback was discovered by Barry Sterman while doing a
                study on seizures for NASA — published as
                “Electroencephalographic and Behavioral Studies of Monomethyl
                Hydrazine Toxicity in the Cat” (Sterman, LoPresti, Fairchild;
                Aerospace Medical Research Laboratory).
              </p>
              <p>
                There are many successful ways of practicing neurofeedback. As we
                learn more about the brain and technology improves, new ways of
                interacting with the brain emerge. Today neurofeedback is used in
                many settings and for many purposes — including convenient home
                rental programs like ours.
              </p>
            </div>
          </div>
          <aside className="lg:col-span-5">
            <div className="surface-card overflow-hidden">
              <img
                src="/session-4.jpg"
                alt="Neurofeedback sensors and home training setup"
                className="aspect-[16/11] w-full object-cover"
              />
              <div className="p-5 md:p-6">
                <h3 className="font-display text-xl">Our approach: NeurOptimal</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-fg-muted)]">
                  Neuro Balance NW rentals use NeurOptimal. This approach trains
                  the brain’s awareness of electrical shifts. Training is
                  non-directive — it does not push the brain toward a target
                  pattern. Raising awareness of those shifts can support
                  meaningful improvements across many areas of life.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
        <div className="container-page py-12 md:py-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.14em] text-[var(--color-primary)] uppercase">
                Watch & learn
              </p>
              <h2 className="mt-2 font-display text-3xl">Videos & stories</h2>
              <p className="mt-2 max-w-xl text-[var(--color-fg-muted)]">
                Short introductions, trainer interviews, and client experiences
                with NeurOptimal.
              </p>
            </div>
            <a
              href="https://isnr.org/isnr-comprehensive-bibliography"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] hover:underline"
            >
              Bibliography for general neurofeedback
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {videos.map((video) => (
              <article key={video.id} className="surface-card overflow-hidden">
                <div className="relative aspect-video bg-[var(--color-bg-ink)]">
                  <iframe
                    title={video.title}
                    src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0&modestbranding=1`}
                    className="absolute inset-0 h-full w-full"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="p-4 md:p-5">
                  <div className="flex items-start gap-2">
                    <PlayCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" />
                    <div>
                      <h3 className="font-display text-lg leading-snug">
                        {video.title}
                      </h3>
                      <p className="mt-1 text-sm text-[var(--color-fg-muted)]">
                        {video.description}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-12 md:py-16">
        <div className="surface-card grid gap-6 p-6 md:grid-cols-2 md:items-center md:p-8 lg:p-10">
          <div>
            <h2 className="font-display text-2xl md:text-3xl">
              Ready to rent?
            </h2>
            <p className="mt-3 text-[var(--color-fg-muted)] leading-relaxed">
              Explore the research above, then contact us about a monthly
              unlimited home rental. We ship systems and help you get set up for
              training on your own schedule.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <Button asChild>
              <Link to="/contact">Ask about rentals</Link>
            </Button>
            <Button asChild variant="outline">
              <a href="tel:+13602092140">Call us</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
