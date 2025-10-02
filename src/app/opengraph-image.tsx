import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Evan Livelo";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const dmSerifFont = fetch(
    new URL("../../public/fonts/DMSerifText-Regular.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const robotoFont = fetch(
    new URL("../../public/fonts/Roboto-Regular.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          background: "#ece5d9",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 60,
        }}
      >
        <div
          style={{
            background: "#fffcf2",
            borderRadius: 16,
            padding: 80,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div style={{
            fontSize: 96,
            color: "#293241",
            marginBottom: 20,
            display: "flex",
            fontWeight: 400,
            fontFamily: "DM Serif Text",
          }}>
            <span>Hi! I&apos;m&nbsp;</span>
            <span style={{ color: "#1982c4" }}>Evan Livelo</span>
            <span>.</span>
          </div>
          <div style={{
            fontSize: 32,
            color: "#293241",
            display: "flex",
            fontWeight: 400,
            fontFamily: "Roboto",
          }}>
            ML, Data, GenAI, Engineering
          </div>
        </div>
        <div style={{
          fontSize: 32,
          color: "#293241",
          marginTop: 30,
          display: "flex",
          fontWeight: 400,
          fontFamily: "Roboto",
          textDecoration: "underline",
        }}>
          evanlivelo.com
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "DM Serif Text",
          data: await dmSerifFont,
          style: "normal",
          weight: 400,
        },
        {
          name: "Roboto",
          data: await robotoFont,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
