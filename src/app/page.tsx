"use client";

import { useEffect, useState } from "react";
import { Cluster } from "./types";
import Link from "next/link";

export default function Home() {
  const [clusters, setClusters] = useState<Cluster[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/clusters`);
      const allClusters = await response.json() as Cluster[];
      setClusters(allClusters);
    })();
  }, []);

  return (
    <main>
      <h1>Welcome to the Cluster app</h1>
      <p>Click on a cluster below to learn more.</p>
      <ul>
        {clusters.map((cluster: Cluster) => {
          return (
            <li key={cluster.name}>
              <Link href={`/${cluster.name.toLowerCase()}`}>
                {cluster.name} - {cluster.version}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
