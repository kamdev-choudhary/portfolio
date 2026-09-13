import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#131a16",
          color: "#5ce68d",
          fontFamily: "monospace",
          fontWeight: 700,
        }}
      >
        <div style={{ fontSize: 86, lineHeight: 1 }}>kd</div>
        <div style={{ fontSize: 22, color: "#7d8a83", marginTop: 8 }}>:~$</div>
      </div>
    ),
    size,
  );
}
