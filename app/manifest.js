export default function manifest() {
  return {
    name: "Vaultix - Smart Wealth & Expense Operating System",
    short_name: "Vaultix",
    description: "Intelligent personal finance and wealth management system to track expenses, set budgets, and build compounding wealth.",
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
