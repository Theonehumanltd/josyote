import { ImageResponse } from "next/og";

export const alt = "Josy Ote — Mixed Media Artist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
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
          backgroundColor: "#0E0D0B",
          color: "#F2EBDD",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: "18px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              opacity: 0.5,
            }}
          >
            Mixed Media Artist
          </div>
          <div
            style={{
              fontSize: "80px",
              fontWeight: 400,
              letterSpacing: "0.05em",
            }}
          >
            Josy Ote
          </div>
          <div
            style={{
              fontSize: "22px",
              opacity: 0.6,
              maxWidth: "600px",
              textAlign: "center",
              lineHeight: 1.6,
            }}
          >
            Acrylic, oil pastel, ink and modelling paste
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
