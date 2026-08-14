import { useEffect } from "react";
import { site } from "@/data/site";

export function Seo({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${site.brand}`
      : `${site.name} | ${site.brand}`;
    document.title = fullTitle;

    const desc = description ?? site.description;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, [title, description]);

  return null;
}
