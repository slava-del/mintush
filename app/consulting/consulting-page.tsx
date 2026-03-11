"use client";

import { Manrope } from "next/font/google";
import { ConsultingInterventionSchema } from "@/components/consulting-intervention-schema";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export function ConsultingPageContent() {
  return (
    <main className={`${manrope.className} min-h-screen bg-[#0b0b0b] p-3 sm:p-4 md:p-6`}>
      <section className="mx-auto flex w-full flex-col gap-3 sm:gap-4 md:gap-6">
        <ConsultingInterventionSchema />
      </section>
    </main>
  );
}
