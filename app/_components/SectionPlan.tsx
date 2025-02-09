import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function SectionPlan() {
  return (
    <div>
      <section className="container mx-auto py-20">
        <div className="grid grid-cols-2 gap-16">
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl font-bold">
              A plan for <span className="text-[#f68d13]">every dream</span>
            </h1>
            <p className="text-lg text-[$535353]">
              The Most Comprehensive & Personalized Study Abroad Plan, suited
              for your Dream. Obsessed with Student Success
            </p>
            <p className="text-lg text-[$535353]">
              95% of our students get an admission in less than 4 weeks
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-[#1a1a1a] text-white">
                Get Your Personalised Plan for Free
              </Button>
              <Button size="lg" variant="outline">
                Talk to an Expert
              </Button>
            </div>
          </div>
          <div>
            <Image src="" alt="Studeents" className="w-full h-auto" />
          </div>
        </div>
      </section>
    </div>
  );
}
