"use client";

import { useEffect, useState } from "react";
import { Cluster } from "../types";
import Link from "next/link";
import React from "react";

type RouteParams = { params: Promise<{ cluster: string }> };

export default function ClusterList({ params }: RouteParams) {
    const selectedCluster = params.then((params) => params.cluster);
    const [cluster, setCluster] = useState<Cluster>({ name: "", version: "" });

    useEffect(() => {
        (async () => {
            const resp = await fetch(`/api/clusters/${await selectedCluster}`);
            const cluster = await resp.json() as Cluster;
            setCluster(cluster);
        })();
    }, []);

    return (
        <main>
            <h1>{cluster.name}</h1>
            <p>{cluster.version}</p>
            <Link href="/">🠠 Back to all dinosaurs</Link>
        </main>
    );

}
