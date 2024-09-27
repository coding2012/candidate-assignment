import { NextRequest } from "next/server";
import db from "../../../db";
import { sql, eq, and } from "drizzle-orm";
import { advocates } from "../../../db/schema";
import { SearchParams } from "@/app/search/types";

export async function POST(request: NextRequest) {
  try {
    const advocateQuery = db.select().from(advocates);
    const req = (await request.json()) as SearchParams;
    const conditions = [];
    if (req.specialty1) {
      conditions.push(
        sql`${req.specialty1} = ANY( ${advocates.specialties} ) `
      );
    }
    if (req.city != "Search all Cities") {
      conditions.push(eq(advocates.city, req.city));
    }

    const data = await advocateQuery.where(and(...conditions));

    return Response.json({ data });
  } catch (err) {
    return Response.json(err);
  }
}
