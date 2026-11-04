/**
 * Inlined in <head> so the first paint already has image boxes.
 * The main stylesheet arrives a moment later in dev; without this, photos
 * render at their file size (1200px) and then snap down.
 * Kept in @layer base so Tailwind utilities still win once they load.
 */
export const criticalCss = `
@layer base {
  html { background: #f7f9fb; }
  body {
    margin: 0;
    background: #f7f9fb;
    color: #14212d;
    font-family: "DM Sans", ui-sans-serif, system-ui, sans-serif;
  }
  img, video {
    max-width: 100%;
    height: auto;
    display: block;
  }
  .mark {
    width: 2.5rem;
    height: 2.5rem;
    max-width: 2.5rem;
    object-fit: contain;
    flex-shrink: 0;
  }
  @media (min-width: 768px) {
    .mark-lg { width: 2.75rem; height: 2.75rem; max-width: 2.75rem; }
  }
  .mark-footer {
    width: 3rem;
    height: 3rem;
    max-width: 3rem;
    object-fit: contain;
    border-radius: 9999px;
    background: #fff;
    padding: 0.25rem;
  }
  .hero { position: relative; overflow: hidden; }
  .fill-frame { position: absolute; inset: 0; }
  .fill-cover {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    max-width: none;
    object-fit: cover;
  }
  .shot-45 {
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    height: auto;
  }
  .shot-wide {
    width: 100%;
    aspect-ratio: 16 / 11;
    object-fit: cover;
    height: auto;
  }
  .shot-owner {
    width: 100%;
    height: 20rem;
    max-height: 20rem;
    object-fit: cover;
    object-position: top;
  }
  @media (min-width: 768px) {
    .shot-owner { max-height: none; height: 100%; }
  }
  .frame-video {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    background: #0f1c28;
  }
  .frame-video iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
}
`;
