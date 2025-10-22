import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const about = [
  {
    id: 1,
    name: "Andrei Nico A. Samonte",
    role: "UI/Web Developer",
    image: "/dp.jpg",
    motto: "- Challenging the Expected. Designing the Future.",
    link: "https://www.youtube.com/watch?v=1w7OgIMMRc4&list=RD1w7OgIMMRc4&start_radio=1"
  },
  {
    id: 2,
    name: "Jhibriel B. Ferrer",
    role: "Full Stack Developer",
    image: "/jhib.png",
    motto: "- Inventive Minds. Engineered Results.",
    link: "https://www.youtube.com/watch?v=kXYiU_JCYtU&list=RDkXYiU_JCYtU&start_radio=1"
  },
  {
    id: 3,
    name: "Ivan Reiner P. Panelo",
    role: "UI/Web Developer",
    image: "/ayban.jpg",
    motto: "- The Power of Many. The Spark of New.",
    link: "https://www.youtube.com/watch?v=izGwDsrQ1eQ&list=RDizGwDsrQ1eQ&start_radio=1",
  },
  {
    id: 4,
    name: "Jover P. Daracan",
    role: "UI/Web Developer",
    image: "/joverdaracan.jpg",
    motto: "- No Limits. Just Lunch.",
    link: "https://www.youtube.com/watch?v=I4PmuLWXQr4&list=RDI4PmuLWXQr4&start_radio=1"
  },
  {
    id: 5,
    name: "Jep Eric Andrei DC. Cocjin",
    role: "UI/Web Developer",
    image: "/jep.jpg",
    motto: "- Who Dares Wins.",
   link: "https://www.youtube.com/watch?v=TuLWhf7vx-I&list=RDTuLWhf7vx-I&start_radio=1"
  },
  {
    id: 6,
    name: "Ken M. Garcia",
    role: "UI/Web Developer",
    image: "/jover.jpg",
    motto: "- Building the Future, Story by Story.",
    link: "https://www.youtube.com/watch?v=tGv7CUutzqU&list=RDtGv7CUutzqU&start_radio=1"
  },
];

export default function About() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-b from-[#E3F2F4] to-[#c7f1f0] py-20 px-8">
      <section className="text-center mb-16 max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1a6e6b] mb-4">
          Meet the Team Behind{" "}
          <span className="text-[#3A5A66]">Papa Laundry</span>
        </h1>
        <p className="text-lg text-[#3A5A66]/80 leading-relaxed">
          Our team brings together creative designers, skilled developers, and
          passionate innovators — all dedicated to redefining the way you
          experience laundry services.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {about.map((person) => (
          <Card
            key={person.id}
            className="bg-white border border-[#BFE7E0]/50 rounded-2xl shadow-md hover:shadow-lg hover:border-[#3A5A66]/40 hover:scale-[1.02] transition-all duration-500 flex flex-col justify-between"
          >
            <CardHeader>
              <div className="flex flex-col justify-center items-center gap-4">
                <div className="relative">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-50 h-50 rounded-full object-cover border-4 border-[#BFE7E0] shadow-md"
                  />
                </div>
                <h2 className="text-xl font-semibold text-[#1a6e6b]">
                  {person.name}
                </h2>
                <p className="text-sm text-[#3A5A66] font-medium">
                  {person.role}
                </p>
              </div>
            </CardHeader>

            <CardContent className="flex flex-col flex-grow justify-between text-center px-6 pb-6">
             
                <p className="text-[#BFA87F] font-semibold italic mb-5">
                  {person.motto}
                </p>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
