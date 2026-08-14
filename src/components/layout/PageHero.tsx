import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "border-b border-[var(--color-border)] bg-[linear-gradient(180deg,var(--color-bg-subtle)_0%,var(--color-bg)_100%)]",
        className,
      )}
    >
      <div className="container-page py-12 md:py-16 lg:py-20">
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-[var(--color-primary)] uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-3xl font-display text-4xl text-balance text-[var(--color-fg)] md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-fg-muted)] md:text-lg">
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-7">{children}</div> : null}
      </div>
    </section>
  );
}
