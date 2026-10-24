import type { ReactNode } from "react";
import { RefreshCw, Sparkles, ShieldCheck } from "lucide-react";

import { dashboardMockup, type BoardlensFeatureId } from "@/content/boardlens";
import { formatCHFCompact, formatPercent } from "@/lib/format";
import { cn } from "@/lib/utils";

type Kpi = (typeof dashboardMockup.kpis)[number];

function formatKpi(kpi: Kpi): string {
  return kpi.kind === "percent" ? formatPercent(kpi.value) : formatCHFCompact(kpi.value);
}

/** Bereich des Mockups, der zum aktiven Feature-Tab gehört, wird hervorgehoben. */
function Region({
  id,
  active,
  className,
  children,
}: {
  id: BoardlensFeatureId;
  active: BoardlensFeatureId;
  className?: string;
  children: ReactNode;
}) {
  const isActive = id === active;
  return (
    <div
      className={cn(
        "rounded-xl transition-all duration-300",
        isActive ? "opacity-100 ring-2 ring-accent-400 ring-offset-2 ring-offset-brand-900" : "opacity-55",
        className,
      )}
    >
      {children}
    </div>
  );
}

/**
 * Screenshot-Ersatz: Dashboard aus CSS-Karten mit Beispielzahlen.
 * Durch einen echten Screenshot ersetzen, sobald verfügbar.
 */
export function DashboardMockup({ active }: { active: BoardlensFeatureId }) {
  const maxBar = Math.max(...dashboardMockup.revenueBars);

  return (
    <figure className="relative">
      <div
        aria-hidden="true"
        className="relative overflow-hidden rounded-2xl border border-brand-700 bg-brand-900 p-3 text-white shadow-2xl sm:p-5"
      >
        <div className="absolute right-3 top-3 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-900 sm:right-5 sm:top-5">
          Platzhalter
        </div>

        {/* Kopfzeile mit Sync-Status */}
        <Region id="sync" active={active} className="flex flex-wrap items-center gap-x-3 gap-y-2 bg-white/5 p-3 pr-24">
          <span className="text-sm font-bold">BoardLens</span>
          <span className="text-xs text-white/70">{dashboardMockup.companyName}</span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-400/15 px-2 py-0.5 text-[11px] font-semibold text-accent-400">
            <RefreshCw className="size-3" />
            bexio verbunden
          </span>
        </Region>

        {/* KPI-Karten */}
        <Region id="kpis" active={active} className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {dashboardMockup.kpis.map((kpi) => (
            <div key={kpi.label} className="rounded-lg bg-white/[0.07] p-2.5 sm:p-3">
              <p className="truncate text-[11px] text-white/70">{kpi.label}</p>
              <p className="mt-1 truncate text-sm font-bold tabular-nums sm:text-base">
                {formatKpi(kpi)}
                {"suffix" in kpi && <span className="block text-[10px] font-medium text-white/70">{kpi.suffix}</span>}
              </p>
            </div>
          ))}
          <div className="flex items-center justify-center rounded-lg border border-dashed border-white/15 p-2.5 text-[11px] text-white/60">
            {dashboardMockup.period}
          </div>
        </Region>

        <div className="mt-3 grid gap-3 sm:grid-cols-5">
          {/* Board-Ansicht: Verlauf */}
          <Region id="board" active={active} className="bg-white/5 p-3 sm:col-span-3">
            <p className="text-[11px] font-semibold text-white/80">Umsatzverlauf · Board-Ansicht</p>
            <div className="mt-3 flex h-28 items-end gap-2">
              {dashboardMockup.revenueBars.map((value, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex-1 rounded-t",
                    index === dashboardMockup.revenueBars.length - 1 ? "bg-accent-400" : "bg-brand-500",
                  )}
                  style={{ height: `${(value / maxBar) * 100}%` }}
                />
              ))}
            </div>
          </Region>

          {/* AI-Zusammenfassung mit CFO-Freigabe */}
          <Region id="summaries" active={active} className="bg-white/5 p-3 sm:col-span-2">
            <p className="flex items-center gap-1.5 text-[11px] font-semibold text-white/80">
              <Sparkles className="size-3.5 text-accent-400" />
              AI-Zusammenfassung
            </p>
            <p className="mt-2 text-xs leading-relaxed text-white/80">{dashboardMockup.summary}</p>
            <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-accent-400 px-2 py-0.5 text-[11px] font-semibold text-brand-900">
              <ShieldCheck className="size-3" />
              Vom CFO freigegeben
            </p>
          </Region>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-sm text-neutral-600">{dashboardMockup.placeholderLabel}</figcaption>
    </figure>
  );
}
