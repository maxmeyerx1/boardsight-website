import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";
import { WORDMARK_PATH, WORDMARK_WIDTH } from "@/components/brand/wordmark";

const LOGO_WIDTH = 78 + WORDMARK_WIDTH;

// OG-Bild. Kann durch ein statisches Bild (app/opengraph-image.png) ersetzt werden.
export const alt = `${siteConfig.name} – Board-Reporting aus der Schweiz`;
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
        <svg width={560} height={(560 / LOGO_WIDTH) * 66} viewBox={`0 -52 ${LOGO_WIDTH} 66`}>
          <polygon points="26,-6.5 44,-34 62,-6.5" fill="#4FB287" />
          <polygon points="0,-6.5 19,-46.6 38,-6.5" fill="#FFFFFF" />
          <rect x="0" y="-3.5" width="62" height="3.5" fill="#FFFFFF" />
          <rect x="45.5" y="-41.5" width="5.5" height="3" fill="#4FB287" />
          <rect x="57" y="-41.5" width="5.5" height="3" fill="#4FB287" />
          <rect x="52.5" y="-48.5" width="3" height="5.5" fill="#4FB287" />
          <rect x="52.5" y="-37" width="3" height="5.5" fill="#4FB287" />
          <path transform="translate(78 0)" d={WORDMARK_PATH} fill="#FFFFFF" />
        </svg>
        <div style={{ display: "flex", fontSize: 60, fontWeight: 700, lineHeight: 1.15, maxWidth: 950 }}>
          Ihr Board-Reporting. Automatisch, aktuell, aus der Schweiz.
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#4FB287" }}>BoardLens · Entwickelt in Zürich · Gehostet in der Schweiz</div>
      </div>
    ),
    size,
  );
}
