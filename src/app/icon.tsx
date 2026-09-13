import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Terminal-style favicon: a green prompt caret on the dark theme ground. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#131a16",
          color: "#5ce68d",
          fontSize: 21,
          fontWeight: 700,
          fontFamily: "monospace",
          borderRadius: 6,
        }}
      >
        kd
      </div>
    ),
    size,
  );
}
