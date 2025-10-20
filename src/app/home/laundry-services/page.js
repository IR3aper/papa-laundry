import { Shirt, Wind, Droplets, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

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
    <main className="flex flex-col items-center justify-center w-full min-h-screen gap-10 p-10">
      <section>
        <div>
          <div className="mx-auto max-w-2xl text-center mb-16 mt-24">
            <h2 className="font-sans text-3xl font-bold tracking-tight sm:text-5xl mb-4 ">
              Complete laundry solutions
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              From everyday essentials to specialty care, we handle it all with
              expertise and attention to detail.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full flex gap-5">
       <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service) => (
            <Card key={service.title} className="border-border/50 hover:border-primary/50 transition-colors duration-500">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
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
