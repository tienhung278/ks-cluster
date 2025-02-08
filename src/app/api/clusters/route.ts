import data from "./db.json" with { type: "json" };

export async function GET() {
    return Response.json(data);
}
