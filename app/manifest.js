export default function manifest() {
  return {
    name: "Finora - Finance for Real Humans",
    short_name: "Finora",
    description: "Finance made simple. 1-tap tracking, daily safe limits, 'Can I Afford It?' calculator, and automated bank statements.",
    start_url: "/dashboard",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/Logos.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
