import LaundryServices from "@/app/component/custom/LaundryServices";

export default function Services() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-b from-[#E3F2F4] to-[#A0D9C9] gap-10 py-20 px-6">
            <section>
        <div className="mx-auto max-w-2xl text-center mb-16 mt-10">
          <h2 className="font-sans text-4xl sm:text-5xl font-bold text-[#3A5A66] mb-4 drop-shadow-sm">
            Complete Laundry Solutions
          </h2>
          <p className="text-lg text-[#3A5A66] leading-relaxed">
            From everyday essentials to specialty care, we handle it all with
            precision, care, and freshness you can feel.
          </p>
          <div className="mt-4 h-1 w-24 bg-[#1a6e6b] mx-auto rounded-full"></div>
        </div>
      </section>
      <LaundryServices/>
    </main>
  );
}
