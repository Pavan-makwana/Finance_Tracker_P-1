export default function manifest() {
  return {
    name: "Finora - Finance for Real Humans",
    short_name: "Finora",
    description: "Finance made simple. 1-tap tracking, daily safe limits, 'Can I Afford It?' calculator, and automated bank statements.",
    start_url: "/dashboard",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#06b6d4",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
