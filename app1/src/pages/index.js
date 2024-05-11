import { Inter } from "next/font/google";
import dynamic from 'next/dynamic'
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const CardComponent = dynamic(()=> import("app2/card"))

export default function Home() {
  const [hydrated, setHydrated] = useState(false);
    useEffect(() => {
        setHydrated(true);
    }, []);
    if (!hydrated) {
        // Returns null on first render, so the client and server match
        return null;
    }
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <CardComponent/>
    </main>
  );
}
