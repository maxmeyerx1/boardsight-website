import { trust } from "@/content/trust";
import { icons, type IconName } from "@/lib/icons";

function Item({ icon, text }: { icon: IconName; text: string }) {
  const Icon = icons[icon];
  return (
    <li className="flex h-12 shrink-0 items-center gap-2.5 rounded-full border border-border bg-neutral-50 px-5 text-sm font-semibold text-neutral-900">
      <Icon className="size-4 shrink-0 text-brand-500" aria-hidden="true" />
      {text}
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
      <div className="group relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] motion-reduce:[mask-image:none]">
        <div className="flex w-max motion-safe:animate-marquee group-hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:px-4">
          <ul className="flex shrink-0 gap-4 pr-4 motion-reduce:w-full motion-reduce:shrink motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:pr-0">
            {trust.items.map((item) => (
              <Item key={item.text} icon={item.icon} text={item.text} />
            ))}
          </ul>
          {/* Duplikat für die nahtlose Endlosschleife, für Screenreader ausgeblendet */}
          <ul aria-hidden="true" className="flex shrink-0 gap-4 pr-4 motion-reduce:hidden">
            {trust.items.map((item) => (
              <Item key={item.text} icon={item.icon} text={item.text} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
