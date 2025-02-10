import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const destinations = [
  { name: "Study In Ireland", image: "/countries/ireland.png" },
  { name: "Study In New Zealand", image: "/countries/newzealand.png" },
  { name: "Study In USA", image: "/countries/usa.png" },
  { name: "Study In Canada", image: "/countries/canada.png" },
];

export default function SectionCountry() {
  return (
    <div>
      <section className="container mx-auto py-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Wherever You Want To Go, We'll Get You There
          </h2>
          <p className="text-lg text-[$535353]">
            Explore the best study destinations in the world! Learn all about
            the countries' top universities, scholarship, cost of living,
            post-study work rights and more
          </p>
        </div>

        <div className="grid grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <Card key={destination.name} className="relative overflow-hidden">
              <AspectRatio ratio={247 / 327}>
                <Image
                  src={destination.image}
                  alt={destination.name}
                  layout="fill"
                  loading="lazy"
                  className="w-full h-[300px] object-cover"
                />
              </AspectRatio>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-3xl font-bold text-white">
                  {destination.name}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
