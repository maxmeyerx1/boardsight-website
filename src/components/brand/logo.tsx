import { cn } from "@/lib/utils";
import { WORDMARK_PATH, WORDMARK_WIDTH } from "./wordmark";

// Symbol: zwei Gipfel (steigende Entwicklung) auf einer Grundlinie,
// oben rechts das Fadenkreuz als „Sight“. Koordinaten: Grundlinie y = 0.
const SYMBOL_WIDTH = 62;
const WORDMARK_OFFSET = 78;
const LOCKUP_WIDTH = WORDMARK_OFFSET + WORDMARK_WIDTH;

const reticle = [
  { x: 45.5, y: -41.5, width: 5.5, height: 3 },
  { x: 57, y: -41.5, width: 5.5, height: 3 },
  { x: 52.5, y: -48.5, width: 3, height: 5.5 },
  { x: 52.5, y: -37, width: 3, height: 5.5 },
];

function SymbolShapes({ accentClassName, showReticle = true }: { accentClassName: string; showReticle?: boolean }) {
  return (
    <>
      <polygon points="26,-6.5 44,-34 62,-6.5" fill="currentColor" className={accentClassName} />
      <polygon points="0,-6.5 19,-46.6 38,-6.5" fill="currentColor" />
      <rect x="0" y="-3.5" width={SYMBOL_WIDTH} height="3.5" fill="currentColor" />
      {showReticle && (
        <g fill="currentColor" className={accentClassName}>
          {reticle.map((bar) => (
            <rect key={`${bar.x}-${bar.y}`} {...bar} />
          ))}
        </g>
      )}
    </>
  );
}

type BrandProps = {
  className?: string;
  /** Akzentfarbe für Gipfel und Fadenkreuz (Tailwind-Textfarbe). */
  accentClassName?: string;
  /** Zugänglicher Name; leer = dekorativ. */
  title?: string;
};

/** Vollständiges Logo (Symbol + Wortmarke). Hauptfarbe = currentColor. */
export function BrandLogo({ className, accentClassName = "text-accent-400", title = "BoardSight" }: BrandProps) {
  return (
    <svg
      viewBox={`0 -52 ${LOCKUP_WIDTH} 66`}
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-8 w-auto", className)}
      role={title ? "img" : undefined}
      aria-label={title || undefined}
      aria-hidden={title ? undefined : true}
    >
      <SymbolShapes accentClassName={accentClassName} />
      <path transform={`translate(${WORDMARK_OFFSET} 0)`} d={WORDMARK_PATH} fill="currentColor" />
    </svg>
  );
}

/** Nur das Symbol, z. B. für kleine Flächen. */
export function BrandSymbol({ className, accentClassName = "text-accent-400", title = "" }: BrandProps) {
  return (
    <svg
      viewBox={`0 -52 ${SYMBOL_WIDTH} 52`}
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-8 w-auto", className)}
      role={title ? "img" : undefined}
      aria-label={title || undefined}
      aria-hidden={title ? undefined : true}
    >
      <SymbolShapes accentClassName={accentClassName} />
    </svg>
  );
}
