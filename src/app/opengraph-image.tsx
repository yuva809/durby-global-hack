import { ImageResponse } from "next/og";
import { EVENT } from "@/lib/config";

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
          background: "#faf9f6",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, background: "#1677ff" }} />
          <div style={{ fontSize: 24, color: "#6b6a64", letterSpacing: 4, textTransform: "uppercase" }}>Durby</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 72, fontWeight: 700, color: "#0a0a0a", letterSpacing: -2, lineHeight: 1.05 }}>
            {EVENT.name}
          </div>
          <div style={{ fontSize: 34, color: "#54534d", fontWeight: 500 }}>{EVENT.tagline}</div>
        </div>
        <div style={{ display: "flex", gap: 32, fontSize: 22, color: "#1677ff", letterSpacing: 2, textTransform: "uppercase", fontWeight: 600 }}>
          <span>Global</span>
          <span>AI × Innovation</span>
          <span>Open to Builders Worldwide</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
