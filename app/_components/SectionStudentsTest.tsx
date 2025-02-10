import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Label } from "@/components/ui/label";
import { ArrowRight, Car, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Testimonial {
  content: string;
  name: string;
  fromCountry: string;
  toCountry: string;
  university: string;
  imageSrc?: string; // Make imageSrc optional
  universityImg?: string;
}

const testimonials: Testimonial[] = [
  {
    content:
      "I'm delighted to share my positive experience with Brightminds Bangladesh..",
    name: "Ezazul Hasan",
    fromCountry: "Bangladesh",
    toCountry: "UK",
    university: "London South Bank University",
    imageSrc: "/students/student1.png",
    universityImg: "/university/university1.png",
  },
  {
    content:
      "Brightminds Bangladesh has been instrumental in helping me achieve my academic goals.",
    name: "Ayesha Rahman",
    fromCountry: "Bangladesh",
    toCountry: "Canada",
    university: "University of Toronto",
    imageSrc: "/students/student2.png",
    universityImg: "/university/university2.png",
  },
  {
    content:
      "The support and guidance I received from Brightminds Bangladesh were exceptional.",
    name: "Rafiq Ahmed",
    fromCountry: "Bangladesh",
    toCountry: "Australia",
    university: "University of Melbourne",
    imageSrc: "/students/student1.png",
    universityImg: "/university/university3.png",
  },
  {
    content:
      "I highly recommend Brightminds Bangladesh for their dedication and professionalism.",
    name: "Nusrat Jahan",
    fromCountry: "Bangladesh",
    toCountry: "USA",
    university: "Harvard University",
    imageSrc: "/students/student2.png",
    universityImg: "/university/university1.png",
  },
  {
    content:
      "Thanks to Brightminds Bangladesh, I am now pursuing my dream education abroad.",
    name: "Tanvir Hossain",
    fromCountry: "Bangladesh",
    toCountry: "Germany",
    university: "Technical University of Munich",
    imageSrc: "/students/student3.png",
    universityImg: "/university/university1.png",
  },
];

export default function SectionStudents() {
  return (
    <div>
      <section className="container mx-auto py-20">
        <h2 className="text-4xl font-bold text-[#1a1a1a] mb-16">
          We put our students at the heart of everything we do.
        </h2>

        <div className="relative overflow-hidden w-full">
          <div className="flex gap-8 animate-scroll whitespace-nowrap">
            {/* Duplicated testimonials for infinite scrolling */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-[#e1dbdb] pt-6 px-6 min-w-[400px] border-none rounded-[30px]"
              >
                <CardContent className="flex flex-col items-start gap-8">
                  <Card className="w-[292px] overflow-hidden rounded-lg">
                    <CardContent className="p-0">
                      <AspectRatio ratio={292 / 427}>
                        <Image
                          src={testimonial.imageSrc || "/default-image.png"}
                          alt="Portrait Photo"
                          loading="lazy"
                          sizes="100vw"
                          layout="fill"
                        />
                      </AspectRatio>
                    </CardContent>
                  </Card>
                  <div className="w-fit">
                    <Label className="font-bold text-base text-[#131313] font-sans">
                      {testimonial.name}
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-[#131313] text-base">
                      {testimonial.fromCountry}
                    </span>
                    <ArrowRight className="w-6 h-6 text-[#131313]" />
                    <span className="font-medium text-[#131313] text-base">
                      {testimonial.toCountry}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Image
                      src={testimonial.universityImg || "/no-image.png"}
                      alt="university logo"
                      loading="lazy"
                      sizes="100vw"
                      width={28}
                      height={15}
                    />
                    <span className="font-medium text-[#131313] text-base">
                      {testimonial.university}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
