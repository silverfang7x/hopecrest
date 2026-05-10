import { ArrowRight } from "lucide-react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

type ProgramCardProps = {
  image: string;
  category: string;
  title: string;
  description: string;
  slug: string;
  className?: string;
  imageClassName?: string;
  onShare?: () => void;
};

export default function ProgramCard({
  image,
  category,
  title,
  description,
  slug,
  className,
  imageClassName,
  onShare,
}: ProgramCardProps) {
  return (
    <article
      className={clsx(
        "group overflow-hidden rounded-2xl border border-cream/10 bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_-30px_rgba(0,200,150,0.6)]",
        className,
      )}
    >
      <div className={clsx("relative aspect-[16/10]", imageClassName)}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full border border-accent/60 bg-primary/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-accent backdrop-blur-sm">
          {category}
        </span>
      </div>

      <div className="space-y-4 p-6">
        <h3 className="font-display text-2xl text-cream">{title}</h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-cream/75">{description}</p>
        <div className="flex items-center justify-between gap-3">
          <Link
            href={slug}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accentDark"
          >
            Learn more
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
          {onShare ? (
            <button
              type="button"
              onClick={onShare}
              className="rounded-full border border-accent/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent transition-colors hover:border-accent hover:bg-accent/10"
            >
              Share
            </button>
          ) : null}
        </div>
      </div>
    </article>
  );
}
