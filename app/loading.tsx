export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-primary px-6">
      <div className="animate-pulse text-center">
        <div className="inline-flex items-center gap-2">
          <span className="font-display text-4xl italic text-cream/90">Hopecrest</span>
          <span className="h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
