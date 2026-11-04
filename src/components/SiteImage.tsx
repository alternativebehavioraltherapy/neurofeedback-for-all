import type { ImgHTMLAttributes } from "react";

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  width: number;
  height: number;
  /** Above-the-fold image. Default is lazy. */
  priority?: boolean;
};

/** Reserves the layout box before the file arrives. */
export function SiteImage({
  priority = false,
  alt = "",
  decoding = "async",
  ...props
}: Props) {
  return (
    <img
      alt={alt}
      decoding={decoding}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      {...props}
    />
  );
}
