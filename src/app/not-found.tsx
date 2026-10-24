import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-500">Fehler 404</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight">Seite nicht gefunden</h1>
      <p className="mt-4 max-w-md text-neutral-600">Die gesuchte Seite existiert nicht oder wurde verschoben.</p>
      <Button asChild className="mt-8">
        <Link href="/">Zur Startseite</Link>
      </Button>
    </div>
  );
}
