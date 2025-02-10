import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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
    <div className="flex w-full items-start gap-[69px] px-60 py-20 relative bg-[url(/contact-info.png)] bg-cover bg-center">
      <header className="flex flex-col items-start gap-6">
        <h2 className="font-sub-heading-2 text-black text-[24px] leading-9">
          Contact Info
        </h2>
        <h1 className="font-bold text-black text-[56px] leading-[72.8px] max-w-[575px]">
          We are always happy to assist you
        </h1>
      </header>

      <div className="flex items-start gap-[102px]">
        {contactData.map((item, index) => (
          <Card key={index} className="bg-transparent border-none shadow-none">
            <div className="flex flex-col items-start gap-[25px]">
              <h3 className="font-sub-heading text-black text-[22px]">
                {item.title}
              </h3>
              <Separator className="w-[27px] bg-black" />
            </div>

            <div className="flex flex-col items-start gap-[25px]">
              <span className="font-sub-heading text-black text-[22px]">
                {item.email}
              </span>
              <p className="font-paragraph text-black text-[20px] leading-8 w-[246px] whitespace-pre-line">
                {item.hours}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
