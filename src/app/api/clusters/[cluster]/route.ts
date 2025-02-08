import { NextRequest } from "next/server";
import data from "../db.json" with { type: "json" };

type RouteParams = { params: Promise<{ cluster: string }> };

export const GET = async (request: NextRequest, { params }: RouteParams) => {
    const { cluster } = await params;

    if (!cluster) {
        return Response.json("No cluster name provided.");
    }

    const clusterData = data.find((item) =>
        item.name.toLowerCase() === cluster.toLowerCase()
    );

    return Response.json(clusterData ? clusterData : "No cluster found.");
};
