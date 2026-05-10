import { Check } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import ProgramDonationCard from "@/components/programs/ProgramDonationCard";
import ProgramCard from "@/components/ui/ProgramCard";
import { programs } from "@/lib/programs";

type ProgramDetailPageProps = {
  params: {
    slug: string;
  };
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

export function generateStaticParams() {
  return programs.map((program) => ({
    slug: program.slug,
  }));
}

export default function ProgramDetailPage({ params }: ProgramDetailPageProps) {
  const program = programs.find((entry) => entry.slug === params.slug);

  if (!program) {
    notFound();
  }

  const relatedPrograms = programs.filter((entry) => entry.slug !== program.slug).slice(0, 2);

  return (
    <main className="bg-primary pb-20">
      <section className="relative min-h-[55vh] overflow-hidden">
        <Image src={program.image} alt={program.title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40" />

        <div className="relative mx-auto flex min-h-[55vh] w-full max-w-7xl flex-col justify-end px-6 pb-14 pt-28">
          <span className="w-fit rounded-full border border-accent/60 bg-primary/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent backdrop-blur-sm">
            {program.category}
          </span>
          <h1 className="mt-4 max-w-4xl font-display text-4xl italic leading-tight text-cream md:text-6xl">
            {program.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            {program.countryTags.map((country) => (
              <span
                key={country}
                className="rounded-full border border-cream/30 bg-primary/50 px-3 py-1 text-xs uppercase tracking-[0.12em] text-cream/80"
              >
                {country}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14 md:py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[7fr_3fr] lg:gap-14">
          <article className="space-y-12">
            <div>
              <h2 className="font-display text-3xl italic text-cream md:text-4xl">About this program</h2>
              <div className="mt-5 space-y-5 text-base leading-relaxed text-cream/80">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue justo vel justo
                  finibus, vitae ultricies risus commodo. Integer iaculis nisl id ante interdum, quis
                  sagittis augue finibus.
                </p>
                <p>
                  Nunc efficitur, tortor in facilisis tincidunt, nibh sem egestas lorem, at tempor est
                  risus nec nunc. Curabitur ac eros vel risus fermentum tincidunt non vel lectus.
                </p>
                <p>
                  Praesent malesuada, arcu in facilisis volutpat, urna quam condimentum lorem, eu
                  pellentesque velit dui in odio. Aenean at lacinia metus, vitae tristique nisl.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl italic text-cream md:text-4xl">
                How your donation helps
              </h2>
              <ul className="mt-5 space-y-4">
                <li className="flex items-start gap-3 text-cream/85">
                  <Check className="mt-1 h-5 w-5 flex-none text-accent" />
                  <span>Funds direct program delivery with vetted local partners and field teams.</span>
                </li>
                <li className="flex items-start gap-3 text-cream/85">
                  <Check className="mt-1 h-5 w-5 flex-none text-accent" />
                  <span>Supports training, tools, and infrastructure for long-term community ownership.</span>
                </li>
                <li className="flex items-start gap-3 text-cream/85">
                  <Check className="mt-1 h-5 w-5 flex-none text-accent" />
                  <span>Strengthens monitoring and evaluation to maximize measurable impact.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-3xl italic text-cream md:text-4xl">Impact to date</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-cream/15 bg-surface/60 p-5">
                  <p className="text-xs uppercase tracking-[0.14em] text-cream/65">Raised</p>
                  <p className="mt-2 text-2xl font-semibold text-accent">{formatCurrency(program.raised)}</p>
                </div>
                <div className="rounded-xl border border-cream/15 bg-surface/60 p-5">
                  <p className="text-xs uppercase tracking-[0.14em] text-cream/65">Goal</p>
                  <p className="mt-2 text-2xl font-semibold text-accent">{formatCurrency(program.goal)}</p>
                </div>
                <div className="rounded-xl border border-cream/15 bg-surface/60 p-5">
                  <p className="text-xs uppercase tracking-[0.14em] text-cream/65">Beneficiaries</p>
                  <p className="mt-2 text-2xl font-semibold text-accent">{program.beneficiaries}</p>
                </div>
              </div>
            </div>
          </article>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <ProgramDonationCard
              title={program.title}
              slug={program.slug}
              raised={program.raised}
              goal={program.goal}
              beneficiaries={program.beneficiaries}
            />
          </div>
        </div>
      </section>

      <section className="px-6 pt-6">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="font-display text-3xl italic text-cream md:text-4xl">Related Programs</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {relatedPrograms.map((related) => (
              <ProgramCard
                key={related.id}
                image={related.image}
                category={related.category}
                title={related.title}
                description={related.description}
                slug={`/programs/${related.slug}`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
