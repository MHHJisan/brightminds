import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

const contactData = [
  {
    title: "Email Address",
    email: "help@brightminds.com",
    hours: "Assistance hours:\nMonday - Friday 6 am to 8 pm BST",
  },
  {
    title: "Number",
    email: "+8801677441272",
    hours: "Assistance hours:\nMonday - Friday 6 am to 8 pm BST",
  },
];

export default function Contact() {
  return (
    <div className="w-full my-8">
      <AspectRatio ratio={320 / 60}>
        <Image src="/contact.png" alt="contact" loading="lazy" layout="fill" />
      </AspectRatio>
    </div>
  );
}
