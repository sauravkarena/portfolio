import { ImageResponse } from "next/og";
import { SITE } from "@/lib/constants";

export const runtime = "edge";
export const alt = SITE.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(135deg, #09090B 0%, #1a1a2e 50%, #09090B 100%)",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#3B82F6",
            marginBottom: 16,
            fontWeight: 600,
          }}
        >
          Full-Stack Developer
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          {SITE.name}
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#A1A1AA",
            maxWidth: 700,
          }}
        >
          {SITE.description}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 60,
            right: 80,
            fontSize: 24,
            color: "#7C3AED",
            fontWeight: 600,
          }}
        >
          sauravkarena.dev
        </div>
      </div>
    ),
    { ...size },
  );
}
