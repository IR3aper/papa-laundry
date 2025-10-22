import { Calendar, Package, Truck, Home } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    number: "01",
    title: "Schedule Order",
    description:
      "Choose your preferred pickup time through our website. We offer flexible scheduling to fit your routine.",
  },
  {
    icon: Package,
    number: "02",
    title: "We Collect",
    description:
      "Simply drop off your laundry at our counter. No need to sort or prepare anything—we'll take it from there.",
  },
  {
    icon: Truck,
    number: "03",
    title: "We Clean",
    description:
      "Your items are professionally cleaned using premium, eco-friendly products and expert techniques.",
  },
  {
    icon: Home,
    number: "04",
    title: "Pick Up",
    description:
      "Fresh, clean laundry, ready for you to pick up within 24 hours, neatly folded or on hangers.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 sm:py-32 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="font-sans text-4xl font-bold tracking-tight sm:text-5xl mb-4 text-[#242933]">
            How it works
          </h2>
          <p className="text-lg text-[#3A5A66] leading-relaxed">
            Four simple steps to fresh, clean laundry without leaving your home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="flex flex-col items-center text-center">
                {/* Icon Circle */}
                <div className="relative mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#A0D9C9] text-[#242933] shadow-md">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#3A5A66] text-white text-sm font-bold shadow">
                    {step.number}
                  </div>
                </div>

                <h3 className="font-sans text-xl font-semibold mb-3 text-[#242933]">
                  {step.title}
                </h3>
                <p className="text-sm text-[#3A5A66] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-[#3A5A66]/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
