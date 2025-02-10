import { AspectRatio } from "@/components/ui/aspect-ratio";
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
          <div className="relative">
            <AspectRatio ratio={757 / 378}>
              <Image
                src="/sectionAll.png"
                alt="Students"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto rounded-3xl"
                style={{
                  maskImage:
                    "radial-gradient(circle at center top, rgba(255,255,255,1) 20%, rgba(255,255,255,0) 100%), linear-gradient(to bottom, rgba(255,255,255,1) 70%, rgba(255,255,255,0) 100%)",
                  WebkitMaskImage:
                    "radial-gradient(circle at center top, rgba(255,255,255,1) 40%, rgba(255,255,255,0) 100%), linear-gradient(to bottom, rgba(255,255,255,1) 30%, rgba(255,255,255,0) 100%)",
                }}
              />
            </AspectRatio>
          </div>
        </div>
      </section>
    </div>
  );
}
