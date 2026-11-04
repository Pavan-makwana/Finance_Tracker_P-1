//app/api/seed/route.js
import { seedTransactions } from "@/actions/seed";

export async function GET(request) {
  if (process.env.NODE_ENV === "production") {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get("secret");
    if (!process.env.SEED_SECRET || secret !== process.env.SEED_SECRET) {
      return Response.json(
        { error: "Seed route is disabled in production." },
        { status: 403 }
      );
    }
  }

  const result = await seedTransactions();
  return Response.json(result);
}

