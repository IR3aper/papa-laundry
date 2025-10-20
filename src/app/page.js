import Image from "next/image";
import { HowItWorks } from "./component/HowItWorks";
import { Button } from "@/components/ui/button";

import Header from "./component/layout/Header";
import { Footer } from "./component/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex flex-col items-center justify-center w-full min-h-screen">
        <section className="text-center w-200 min-h-screen flex flex-col gap-10 justify-center">
          <h1 className="font-bold text-6xl text-slate-700">
            Laundry made simple, fresh, and effortless
          </h1>
          <p className="text-slate-500 text-lg">
            Professional laundry and dry cleaning services delivered to your
            door. Spend less time on chores and more time on what matters.
          </p>
        </section>

        <section className="w-full bg-zinc-100 flex justify-center ">
          <HowItWorks />
        </section>
      </main>
      <Footer />
    </>
  );
}
