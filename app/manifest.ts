import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DevProdigee eCommerce",
    short_name: "DevProdigee",
    description: "Marketplace management, storefront development and eCommerce growth services.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#166CD2",
    icons: [
      { src: "/favicon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
