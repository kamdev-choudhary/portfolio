import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Social card, styled as a terminal window to match the site. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#131a16",
          fontFamily: "monospace",
          padding: 56,
        }}
      >
        {/* window chrome */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 15, height: 15, borderRadius: 99, background: "#e06c62" }} />
          <div style={{ width: 15, height: 15, borderRadius: 99, background: "#dcb063" }} />
          <div style={{ width: 15, height: 15, borderRadius: 99, background: "#5ce68d" }} />
          <div style={{ marginLeft: 20, fontSize: 22, color: "#7d8a83" }}>
            kd@portfolio: ~
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", marginTop: 70 }}>
          <div style={{ fontSize: 28, color: "#7d8a83", display: "flex", gap: 14 }}>
            <span style={{ color: "#5ce68d" }}>$</span>
            <span>whoami</span>
          </div>

          <div
            style={{
              fontSize: 88,
              fontWeight: 700,
              color: "#eaf2ed",
              marginTop: 22,
              letterSpacing: -2,
            }}
          >
            {profile.name}
          </div>

          <div style={{ fontSize: 36, color: "#5ce68d", marginTop: 18 }}>
            {profile.title}
          </div>

          <div
            style={{
              fontSize: 26,
              color: "#9aa8a1",
              marginTop: 30,
              maxWidth: 940,
              lineHeight: 1.45,
            }}
          >
            Building AI-powered web and mobile products at BharatAI Innovations.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "auto",
            fontSize: 24,
            color: "#7d8a83",
            gap: 26,
          }}
        >
          <span>kamdevchoudhary.vercel.app</span>
          <span style={{ color: "#3c4a43" }}>|</span>
          <span>github.com/kamdev-choudhary</span>
        </div>
      </div>
    ),
    size,
  );
}
