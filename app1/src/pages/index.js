import { Inter } from "next/font/google";
import { lazy } from "react";

const inter = Inter({ subsets: ["latin"] });

const CardComponent = lazy(() => import('app2/card'));

export default function Home() {

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <CardComponent/>
    </main>
  );
}
