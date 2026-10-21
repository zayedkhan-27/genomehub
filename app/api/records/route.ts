import { getDb } from "@/db";
import { researchRecords } from "@/db/schema";
import { desc } from "drizzle-orm";

const categories = new Set(["datasets", "pipelines", "projects", "reports"]);

export async function GET() {
  return Response.json(await getDb().select().from(researchRecords).orderBy(desc(researchRecords.createdAt)));
}

export async function POST(request: Request) {
  const body = await request.json() as Record<string, unknown>;
  if (!categories.has(String(body.category)) || !String(body.name ?? "").trim() || !String(body.owner ?? "").trim())
    return Response.json({ error: "Category, name and owner are required." }, { status: 400 });
  const record = { id: crypto.randomUUID(), category: String(body.category), name: String(body.name).trim().slice(0,120), status: String(body.status ?? "Active").slice(0,40), owner: String(body.owner).trim().slice(0,100), detail: String(body.detail ?? "").trim().slice(0,500), meta: String(body.meta ?? "Created in GenomeHub").slice(0,160), progress: Math.max(0,Math.min(100,Number(body.progress ?? 0))), createdAt: new Date().toISOString() };
  await getDb().insert(researchRecords).values(record);
  return Response.json(record,{status:201});
}
