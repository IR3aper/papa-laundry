import { Shirt, Wind, Droplets, Sparkles } from "lucide-react";
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
    title: "Wash & Fold",
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
    icon: Droplets,
    title: "Wash & Iron",
    description:
      "Crisp, professionally pressed shirts and garments ready to wear.",
    features: ["Wrinkle-free finish", "Attention to detail", "Hanger delivery"],
  },
  {
    icon: Sparkles,
    title: "Specialty Items",
    description:
      "Expert care for bedding, curtains, wedding dresses, and other special items.",
    features: ["Custom treatment", "Careful handling", "Preservation options"],
  },
];

export default function Services() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-b from-[#c7f1f0] via-[#a0d9c9] to-[#E3F2F4] gap-10 py-20 px-6">
      
      <section>
        <div className="mx-auto max-w-2xl text-center mb-16 mt-10">
          <h2 className="font-sans text-4xl sm:text-5xl font-bold text-[#0F2027] mb-4 drop-shadow-sm">
            Complete Laundry Solutions
          </h2>
          <p className="text-lg text-[#3A5A66] leading-relaxed">
            From everyday essentials to specialty care, we handle it all with
            precision, care, and freshness you can feel.
          </p>
          <div className="mt-4 h-1 w-24 bg-[#1a6e6b] mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Service Cards */}
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

      {/* Subtle Footer Decoration */}
      <div className="w-full flex justify-center mt-12">
        <div className="w-32 h-2 bg-[#1a6e6b]/40 rounded-full blur-sm"></div>
      </div>
    </main>
  );
}
