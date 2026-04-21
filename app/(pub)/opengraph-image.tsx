import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
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
          background:
            "linear-gradient(135deg, #0b1220 0%, #0f2d2c 45%, #2b3d5b 100%)",
          color: "white",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              letterSpacing: -1,
              lineHeight: 1.05,
            }}
          >
            Pieśń Poranka
          </div>
          <div style={{ fontSize: 34, opacity: 0.92, lineHeight: 1.2 }}>
            odpoczywam w górach
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 24,
          }}
        >
          <div style={{ fontSize: 26, opacity: 0.9, lineHeight: 1.25 }}>
            Łysina, Beskid Mały • Domek wypoczynkowy
          </div>
          <div style={{ fontSize: 22, opacity: 0.85 }}>piesnporanka.pl</div>
        </div>

        <svg
          width="1200"
          height="630"
          viewBox="0 0 1200 630"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            opacity: 0.28,
          }}
        >
          <defs>
            <linearGradient id="m1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#b8f1ff" stopOpacity="0.65" />
              <stop offset="1" stopColor="#a7ffcf" stopOpacity="0.22" />
            </linearGradient>
          </defs>
          <path
            d="M0 470 L190 330 L310 420 L470 250 L640 410 L760 310 L980 470 L1200 360 L1200 630 L0 630 Z"
            fill="url(#m1)"
          />
          <path
            d="M0 520 L170 420 L320 520 L520 360 L710 530 L880 430 L1040 520 L1200 460 L1200 630 L0 630 Z"
            fill="#0b1220"
            fillOpacity="0.35"
          />
        </svg>
      </div>
    ),
    size
  );
}

