import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const about = [
  {
    id: 1,
    name: "Andrei Nico A. Samonte",
    role: "UI/Web Developer",
    description:
      "We don't just follow trends; we create them. Our team thrives at the intersection of radical creativity and technical possibility. We specialize in dissecting established norms and building innovative solutions that feel fresh, necessary, and often unexpected. If you're looking for work that truly breaks the mold, you've found your collaborators.",
    image: "/dp.jpg",
    motto: "- Challenging the Expected. Designing the Future.",
  },
  {
    id: 2,
    name: "Jhibriel B. Ferrer",
    role: "Full Stack Developer",
    description:
      "As full-stack Web Developers, our creativity ensures these complex layers integrate flawlessly, delivering modern, high-performance applications that look amazing and simply work. Our innovation flows from the powerful logic of the Backend.",
    image: "/jhib.png",
    motto: "- Inventive Minds. Engineered Results.",
  },
  {
    id: 3,
    name: "Ivan Reiner P. Panelo",
    role: "UI/Web Developer",
    description:
      "Our greatest strength lies in our collective imagination. We are a dynamic group of creative experimenters who value iteration, diverse perspectives, and fearless testing. We innovate through collaboration, ensuring every final product reflects true teamwork.",
    image: "/ayban.jpg",
    motto: "- The Power of Many. The Spark of New.",
  },
  {
    id: 4,
    name: "Jover P. Daracan",
    role: "UI/Web Developer",
    description:
      "We are the team for projects that feel impossible. We specialize in pushing creative and technological boundaries to achieve what hasn't been done before. Our passion transforms ambitious ideas into tangible, groundbreaking realities.",
    image: "/dp.jpg",
    motto: "- No Limits. Just Launch.",
  },
  {
    id: 5,
    name: "Jep Eric Andrei DC. Cocjin",
    role: "UI/Web Developer",
    description:
      "We achieve groundbreaking results through innovative simplicity — stripping away complexity to reveal powerful, elegant solutions. We design systems that are intuitive, beautiful, and smarter by design.",
    image: "/jep.jpg",
    motto: "- Who Dares Wins.",
  },
  {
    id: 6,
    name: "Ken M. Garcia",
    role: "UI/Web Developer",
    description:
      "To us, innovation isn't a buzzword — it's a mindset. We approach every project as an opportunity for invention, delivering intelligent, user-centric solutions that redefine efficiency and creativity.",
    image: "/dp.jpg",
    motto: "- Building the Future, Story by Story.",
  },
];

export default function About() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-b from-[#E3F2F4] to-[#c7f1f0] py-20 px-8">
      <section className="text-center mb-16 max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1a6e6b] mb-4">
          Meet the Team Behind <span className="text-[#3A5A66]">Papa Laundry</span>
        </h1>
        <p className="text-lg text-[#3A5A66]/80 leading-relaxed">
          Our team brings together creative designers, skilled developers, and passionate innovators — 
          all dedicated to redefining the way you experience laundry services.
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
                    className="w-32 h-32 rounded-full object-cover border-4 border-[#BFE7E0] shadow-md"
                  />
                </div>
                <h2 className="text-xl font-semibold text-[#1a6e6b]">{person.name}</h2>
                <p className="text-sm text-[#3A5A66] font-medium">{person.role}</p>
              </div>
            </CardHeader>

            <CardContent className="flex flex-col flex-grow justify-between text-center px-6 pb-6">
              <div>
                <p className="text-sm text-[#3A5A66]/90 leading-relaxed mb-3">
                  {person.description}
                </p>
                <p className="text-[#BFA87F] font-semibold italic mb-5">
                  {person.motto}
                </p>
              </div>
              <Button className="bg-[#1a6e6b] hover:bg-[#3A5A66] text-white transition self-center mt-auto">
                Book Me!
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
