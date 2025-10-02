import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Evan Livelo";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "#dcd5c9",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "serif",
        }}
      >
        <div style={{
          fontSize: 72,
          color: "#000000",
          marginBottom: 20,
        }}>
          Hi! I'm <span style={{ color: "#eb5e28" }}>Evan Livelo</span>.
        </div>
        <div style={{
          fontSize: 32,
          color: "#000000",
        }}>
          evanlivelo.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
