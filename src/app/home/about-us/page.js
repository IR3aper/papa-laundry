import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import AboutImage from "@/components/custom/AboutImage";
const about = [
  {
    id: 1,
    name: "Andrei Nico A. Samonte",
    role: "UI/Web Developer",
    description:
      "We don't just follow trends; we create them. Our team thrives at the intersection of radical creativity and technical possibility. We specialize in dissecting established norms and building innovative solutions that feel fresh, necessary, and often unexpected. If you're looking for work that truly breaks the mold, you've found your collaborators.",
    image: "dp.jpg",
    motto: "-Challenging the Expected. Designing the Future.",
  },
  {
    id: 2,
    name: "Jhibriel P. Ferrer",
    role: "Full Stack Developer",
    description:
      "As full-stack Web Developers, our creativity ensures these complex layers integrate flawlessly, delivering modern, high-performance applications that look amazing and simply work. Our innovation flows from the powerful logic of the Backend",
    image: "jhib.png",
    motto: "-Inventive Minds. Engineered Results.",
  },
  {
    id: 3,
    name: "Ivan Reiner P. Panelo",
    role: "UI/Web Dev",
    description:
      "Our greatest strength lies in our collective imagination. We are a dynamic group of creative experimenters who value iteration, diverse perspectives, and fearless testing. We don't settle for the first good idea; we innovate through rapid collaboration, ensuring every final product is the culmination of rigorous testing and inspired collective effort.",
    image: "ayban.jpg",
    motto: "-The Power of Many. The Spark of New.",
  },
  {
    id: 4,
    name: "Jover P. Daracan",
    role: "UI/Web Dev",
    description:
      "We are the team for projects that feel impossible. We specialize in pushing the creative and technological boundaries to achieve what hasn't been done before. Our passion is transforming ambitious, abstract ideas into tangible, groundbreaking realities. We are here to ensure your vision is limited only by imagination, not execution.",
    image: "dp.jpg",
    motto: "-No Limits. Just Launch.",
  },
  {
    id: 5,
    name: "Jep Eric Andrei DC. Cocjin",
    role: "UI/Web Dev",
    description:
      "We achieve groundbreaking results by practicing innovative simplicity. Our creativity focuses on elegant reduction stripping away complexity to reveal the most powerful, essential solution. We design interfaces, strategies, and systems that are intuitive, beautiful, and inherently smarter. Less clutter, more impact.",
    image: "jep.jpg",
    motto: "-Simplicity is the Ultimate Innovation.",
  },
  {
    id: 6,
    name: "Ken Garcia",
    role: "UI/Web Dev",
    description:
      "To us, innovation isn't a buzzword it's the only way forward. We approach every project as an opportunity for invention. By fostering an environment where curiosity drives problem-solving, we consistently deliver intelligent, user-centric solutions. We focus our creativity on maximizing your efficiency and defining your market advantage.",
    image: "dp.jpg",
    motto: "-Building the Future, Story by Story.",
  },
];

export default function About() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-[110vh] p-10  ">
      <div className="flex flex-wrap gap-4 justify-center p-5">
        {about.map((about) => (
          <Card
            key={about.id}
            className=" w-120 h-165 hover:scale-101 duration-500 shadow-lg rounded-xl cursor-pointer"
          >
            <CardHeader>
              <div className="flex flex-col justify-center items-center gap-5 ">
                {/* <AboutImage /> */}
                <h1 className="text-xl font-mono font-semibold">
                  {about.name}
                </h1>
              </div>
            </CardHeader>

            <CardContent>
              <div className="flex flex-col gap-4 justify-center">
                <div className="flex justify-center">
                  <p className="text-md ">
                    <span className="text-lg font-bold"> {about.role}</span>
                  </p>
                </div>

                <p className="flex-wrap">
                  Caption:
                  <span className="text-zinc-500"> {about.description}</span>
                </p>
              </div>

              <div className="w-full flex flex-col justify-end items-end mt-4">
                <p className="text-md font-semibold">{about.motto}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
