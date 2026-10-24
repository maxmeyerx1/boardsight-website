import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

// OG-Bild-Platzhalter. Kann durch ein statisches Bild (app/opengraph-image.png) ersetzt werden.
export const alt = `${siteConfig.name} – Platzhalter für das Social-Media-Vorschaubild`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #072A1F 0%, #0B3B2C 60%, #1F6B4F 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#4FB287",
              color: "#072A1F",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            Logo
          </div>
          <div style={{ fontSize: 36, fontWeight: 700 }}>{siteConfig.name}</div>
        </div>
        <div style={{ display: "flex", fontSize: 60, fontWeight: 700, lineHeight: 1.15, maxWidth: 950 }}>
          [TODO: Kernaussage zur Firma]
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#4FB287" }}>Platzhalter – OG-Bild</div>
      </div>
    ),
    size,
  );
}
