import db from "@/db";
import { advocates } from "@/db/schema";

/** Get all cities that have a solace advocate */
export async function GET() {
  const data = await db
    .selectDistinct({ city: advocates.city })
    .from(advocates)
    .orderBy(advocates.city);

  return Response.json({ data });
}
