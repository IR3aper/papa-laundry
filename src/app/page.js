import Image from "next/image";
import { HowItWorks } from "./component/HowItWorks";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import Header from "./component/layout/Header";
import { Footer } from "./component/layout/Footer";

export default function Home() {
     const homeNavBtns = [
    { id: "nav_services", text: "Services", link: "/home/laundry-services" },
    { id: "nav_order", text: "Book Now", link: "/home/order" },
    { id: "nav_tutorial", text: "About Us", link: "/home/about-us" },
  ];

  return (
    <>
      <Header navigationData={homeNavBtns}/>

      <main className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-b from-[#E3F2F4] to-[#A0D9C9]">
        <section className="w-[90%] max-w-6xl min-h-screen flex flex-col md:flex-row items-center justify-between gap-12 py-12">
          {/* Left side - text */}
          <div className="flex flex-col md:w-1/2 gap-6 text-left">
            <h1 className="font-extrabold text-5xl md:text-6xl text-[#242933] leading-tight">
              Laundry made <br /> simple, fresh, <br /> and effortless
            </h1>

            <p className="text-[#3A5A66] text-lg leading-relaxed max-w-md">
              Professional laundry and dry cleaning services delivered to your door.
              Spend less time on chores and more time on what matters most.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">

              <Link href="/login">
                <button className="bg-[#2C4650] hover:bg-[#1F333B] text-white px-8 py-3 rounded-full text-lg font-medium transition">
                  Schedule Pickup
                </button>
              </Link>
              <Link href="/home/laundry-services">
                <button className="bg-[#2C4650] hover:bg-[#1F333B] text-white px-8 py-3 rounded-full text-lg font-medium transition">
                  What Services?
                </button>
              </Link>



            </div>
          </div>

          <div className="flex justify-center md:justify-end md:w-1/2">
            <div className="flex items-center justify-center rounded-full shadow-xl w-[260px] h-[260px] md:w-[340px] md:h-[340px] relative overflow-hidden bg-transparent">
              <Image
                src="/logo.png" // path to your uploaded image
                alt="Laundry Service Logo"
                fill
                className="object-cover scale-100"
              />
            </div>
          </div>
        </section>

        <section className="w-full  flex justify-center py-16">
          <HowItWorks />
        </section>
      </main>

      <Footer />
    </>
  );
}
