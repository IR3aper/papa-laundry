import { Shirt, Wind, Star, Sparkles } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    icon: Shirt,
    title: "Regular Wash",
    description:
      "Your everyday laundry washed, dried, and neatly folded. Perfect for busy lifestyles.",
    features: [
      "Same-day service",
      "Eco-friendly detergents",
      "Sorted by preference",
    ],
  },
  {
    icon: Wind,
    title: "Dry Cleaning",
    description:
      "Professional dry cleaning for delicate garments, suits, and special occasion wear.",
    features: [
      "Expert stain removal",
      "Gentle on fabrics",
      "Pressed to perfection",
    ],
  },
  {
    icon: Sparkles,
    title: "Specialty Items",
    description:
    "Expert care for bedding, curtains, wedding dresses, and other special items.",
    features: ["Custom treatment", "Careful handling", "Preservation options"],
  },
  {
    icon: Star,
    title: "Full Service",
    description:
      "Crisp, professionally pressed shirts and garments ready to wear.",
    features: ["Wrinkle-free finish", "Attention to detail", "Hanger delivery"],
  },
];

export default function Services() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen gap-5 py-20 px-2">

      <section className="w-full flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
          {services.map((service) => (
            <Card
              key={service.title}
              className="bg-white/90 backdrop-blur-md border border-[#a4e2e0]/60 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 rounded-2xl"
            >
              <CardHeader>
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1a6e6b]/10 mb-4 shadow-inner">
                  <service.icon className="h-7 w-7 text-[#1a6e6b]" />
                </div>
                <CardTitle className="text-2xl font-semibold text-[#0F2027]">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base text-[#3A5A66]/80 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mt-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-[#0F2027]/70"
                    >
                      <div className="h-2 w-2 rounded-full bg-[#1a6e6b]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

    </main>
  );
}
