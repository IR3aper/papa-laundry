import OrderForm from "@/app/component/custom/OrderForm";

export default function Order() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-b from-[#E3F2F4] to-[#A0D9C9] py-20 px-6">
      <section className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1a6e6b] mb-4">
          Place Your <span className="text-[#3A5A66]">Laundry Order</span>
        </h1>
        <p className="text-lg text-[#3A5A66]/80 leading-relaxed max-w-xl mx-auto">
          Fill out the form below to schedule your laundry pickup. Our team will handle the rest
          with care, speed, and precision.
        </p>
      </section>

        <OrderForm />
    </main>
  );
}

