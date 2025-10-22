import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import AboutCard from "@/app/component/custom/AboutCard";

const about = [
  {
    id: 1,
    name: "Andrei Nico A. Samonte",
    role: "Front End Developer",
    image: "/dp.jpg",
    motto: "- Challenge the Expected.",
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
    role: "UI/UX Designer",
    image: "/ayban.jpg",
    motto: "- The Power of Many. The Spark of New.",
    link: "https://www.youtube.com/watch?v=izGwDsrQ1eQ&list=RDizGwDsrQ1eQ&start_radio=1",
  },
  {
    id: 4,
    name: "Jover P. Daracan",
    role: "Front End Developer",
    image: "/joverdaracan.jpg",
    motto: "- No Limits. Just Lunch.",
    link: "https://www.youtube.com/watch?v=I4PmuLWXQr4&list=RDI4PmuLWXQr4&start_radio=1"
  },
  {
    id: 5,
    name: "Jep Eric Andrei DC. Cocjin",
    role: "UI/UX Designer",
    image: "/jep.jpg",
    motto: "- Who Dares Wins.",
    link: "https://www.youtube.com/watch?v=TuLWhf7vx-I&list=RDTuLWhf7vx-I&start_radio=1"
  },
  {
    id: 6,
    name: "Ken M. Garcia",
    role: "Tester",
    image: "/jover.jpg",
    motto: "- Building the Future, Story by Story.",
    link: "https://www.youtube.com/watch?v=tGv7CUutzqU&list=RDtGv7CUutzqU&start_radio=1"
  },
];

export default function About() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-b from-[#E3F2F4] to-[#A0D9C9] py-20 px-8">
      <section className="text-center mb-16 max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1a6e6b] mb-4">
          Meet the Team Behind{" "}
          <span className="text-[#3A5A66]">PapaLaundry</span>
        </h1>
        <p className="text-lg text-[#3A5A66]/80 leading-relaxed">
          Our team brings together creative designers, skilled developers, and
          passionate innovators, all dedicated to redefining the way you
          experience laundry services.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {about.map((person)=>(
                            <AboutCard key={person.id} link={person.link} image={person.image}
                                       name={person.name} motto={person.motto} goTo={person.link}
                                       role={person.role}/>
        ))}

        {/* {about.map((person) => (

        ))} */}
      </section>
    </main>
  );
}
