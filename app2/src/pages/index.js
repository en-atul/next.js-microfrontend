import { Inter } from "next/font/google";
import { lazy,  } from "react";
import Card from "@/components/Card";

const inter = Inter({ subsets: ["latin"] });


const NavComponent = lazy(() => import('app1/nav'));
const FooterComponent = lazy(() => import('app1/footer'));


export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <NavComponent/>
      <p className="text-6xl font-bold">App 2</p>
      <Card/>
      <FooterComponent/>
    </main>
  );
}
