import { Inter } from "next/font/google";
import dynamic from 'next/dynamic'
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const NavComponent = dynamic(()=> import("app1/nav"))
const FooterComponent = dynamic(()=> import("app1/footer"))

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
      <NavComponent/>
      <p>hello</p>
      <FooterComponent/>
    </main>
  );
}
