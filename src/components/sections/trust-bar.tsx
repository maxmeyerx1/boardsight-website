import { trust } from "@/content/trust";

function LogoPlaceholder({ name }: { name: string }) {
  return (
    <li className="flex h-14 min-w-44 shrink-0 items-center justify-center rounded-lg border border-dashed border-neutral-300 bg-white px-6 text-sm font-semibold text-neutral-600">
      {name}
    </li>
  );
}

export function TrustBar() {
  return (
    <section aria-labelledby="trust-title" className="border-b border-border bg-white py-12">
      <div className="container">
        <h2 id="trust-title" className="text-center text-sm font-semibold uppercase tracking-[0.14em] text-neutral-600">
          {trust.label}
        </h2>
      </div>
      <div className="group relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max motion-safe:animate-marquee group-hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:px-4">
          <ul className="flex shrink-0 gap-6 pr-6 motion-reduce:flex-wrap motion-reduce:w-full motion-reduce:shrink motion-reduce:justify-center motion-reduce:pr-0">
            {trust.logos.map((logo, index) => (
              <LogoPlaceholder key={index} name={logo.name} />
            ))}
          </ul>
          {/* Duplikat für die nahtlose Endlosschleife, für Screenreader ausgeblendet */}
          <ul aria-hidden="true" className="flex shrink-0 gap-6 pr-6 motion-reduce:hidden">
            {trust.logos.map((logo, index) => (
              <LogoPlaceholder key={index} name={logo.name} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
