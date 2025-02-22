import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const services = [
  {
    title: "Personalized Admission Counseling",
    description:
      "Our expert counselors will guide you through the entire application process, helping you choose the right course and university.",
  },
  {
    title: "Test Preparation Support",
    description: "Resources for SAT, ACT, GRE, GMAT, TOEFL, and IELTS.",
  },
  {
    title: "Application & Essay Assistance",
    description:
      "Our team will help you craft a compelling application and essay that highlights your strengths and achievements.",
  },
  {
    title: "Visa & Pre-Departure Assistance",
    description:
      "We will assist you with visa applications and provide pre-departure guidance to ensure a smooth transition to your new life abroad.",
  },
  {
    title: "Scholarship & Financial Aid Support",
    description:
      "We will help you explore scholarship opportunities and financial aid options to make your education more affordable.",
  },
  {
    title: "Post-Admission Support",
    description:
      "Our support doesn’t end with admission. We will help you with accommodation, travel, and other post-admission needs.",
  },
];

export default function SectionService() {
  return (
    <div className="py-2 mx-8">
      <h2 className="text-4xl font-bold text-center mb-12">
        Guiding You To Success In U.S Higher Education
      </h2>
      <div className="flex items-center justify-center gap-5 mx-6">
        {/* Left Side */}
        <div className="flex flex-col gap-1 w-1/3">
          {services.slice(0, 3).map((service, index) => (
            <Card key={index} className="border-none shadow-none">
              <CardHeader>
                <CardTitle className="text-[#f68e13] text-3xl">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl text-[#131313]">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Center Image - Full Height */}
        <div className="w-1/3 flex justify-center">
          <img
            src="/service.png"
            alt="Education Guidance"
            className="w-full object-cover rounded-lg shadow-lg h-[500px]"
          />
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-1 w-1/3">
          {services.slice(3).map((service, index) => (
            <Card key={index} className="border-none shadow-none">
              <CardHeader>
                <CardTitle className="text-[#f68e13] text-3xl">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl text-[#131313]">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
