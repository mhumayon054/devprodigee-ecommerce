import { ImageResponse } from "next/og";

export const alt = "DevProdigee eCommerce marketplace growth agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, #f7fbff 0%, #eaf4ff 58%, #dff7fb 100%)",
          color: "#2B3543",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "64px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <div style={{ alignItems: "center", display: "flex", gap: "18px" }}>
            <div style={{ alignItems: "center", background: "#166CD2", borderRadius: "18px", color: "white", display: "flex", fontSize: "28px", fontWeight: 700, height: "68px", justifyContent: "center", width: "68px" }}>DP</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "34px", fontWeight: 700 }}>DEVPRODIGEE</span>
              <span style={{ color: "#64809f", fontSize: "15px", fontWeight: 700, letterSpacing: "6px" }}>ECOMMERCE</span>
            </div>
          </div>
          <div style={{ background: "#166CD2", height: "5px", marginTop: "44px", width: "90px" }} />
          <div style={{ display: "flex", fontSize: "64px", fontWeight: 700, letterSpacing: "-3px", lineHeight: 1.05, marginTop: "28px", maxWidth: "980px" }}>
            Marketplace management, storefronts and growth.
          </div>
          <div style={{ color: "#58708c", display: "flex", fontSize: "25px", marginTop: "28px" }}>
            Amazon • eBay • Walmart • Shopify • Etsy • TikTok Shop • WooCommerce
          </div>
        </div>
      </div>
    ),
    size,
  );
}
