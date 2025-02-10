import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const testimonials = [
  {
    content:
      "I'm delighted to share my positive experience with Brightminds Bangladesh..",
    name: "Ezazul Hasan",
    fromCountry: "Bangladesh",
    toCountry: "UK",
    university: "London South Bank University",
  },
  {
    content:
      "Brightminds Bangladesh has been instrumental in helping me achieve my academic goals.",
    name: "Ayesha Rahman",
    fromCountry: "Bangladesh",
    toCountry: "Canada",
    university: "University of Toronto",
  },
  {
    content:
      "The support and guidance I received from Brightminds Bangladesh were exceptional.",
    name: "Rafiq Ahmed",
    fromCountry: "Bangladesh",
    toCountry: "Australia",
    university: "University of Melbourne",
  },
  {
    content:
      "I highly recommend Brightminds Bangladesh for their dedication and professionalism.",
    name: "Nusrat Jahan",
    fromCountry: "Bangladesh",
    toCountry: "USA",
    university: "Harvard University",
  },
  {
    content:
      "Thanks to Brightminds Bangladesh, I am now pursuing my dream education abroad.",
    name: "Tanvir Hossain",
    fromCountry: "Bangladesh",
    toCountry: "Germany",
    university: "Technical University of Munich",
  },
];

export default function SectionStudents() {
  return (
    <div>
      <section className="container mx-auto py-20">
        <h2 className="text-4xl font-bold text-[#1a1a1a] mb-16">
          We put our students at the hear of everything we do.
        </h2>

        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent className="flex">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="w-1/2 md:w-1/3 px-2" // Controls how many items are visible
              >
                <Card className="h-[568px]">
                  <CardContent className="p-6">
                    <p className="text-[#535353]">{testimonial.content}</p>
                    <div className="mt-8">
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="font-bold">
                          {testimonial.fromCountry}
                        </span>
                        <ChevronRight className="h-4 w-4" />
                        <span>{testimonial.toCountry}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <Image src="" alt="" width={8} height={8} />
                        <span>{testimonial.university}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
    </div>
  );
}
