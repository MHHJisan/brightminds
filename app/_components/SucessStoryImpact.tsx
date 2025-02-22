import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const statsData = [
  {
    value: "1400+",
    label: "Students Assisted",
  },
  {
    value: "90%",
    label: "High Acceptance Rate",
  },
  {
    value: "750+",
    label: "Institution Partners",
  },
  { value: "85%", label: "Scholarships Secured" },
  { value: "56+", label: "Golbal Reach" },
];

export default function SucessStoryImpact() {
  return (
    <div className="mx-20">
      <div>
        <h1 className="text-center [font-family: 'Inter-Bold', Helvitica] font-bold text-[#1a1a1a] text-[40px] leading-[50px]">
          Our Success Stories & Impact
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-3 gap-6">
          {statsData.slice(0, 3).map((stat, index) => (
            <Card
              key={index}
              className="w-[263.93px] h-[184.75px] bg-[#fffbf6] rounded-[18.2px] shadow-[0px_4px_15.7px_1px_#0000000f] my-4"
            >
              <CardContent className="flex flex-col items-center justify-center h-full gap-3.5px px-[34px]">
                <div className="[font-family: 'Inter-Semibold', Helvetica] font-semibold text-[#f68e13] text-4xl text-center tracking-[0] leading-[45px] w-full">
                  {stat.value}
                </div>
                <div className="[font-family: 'Inter-Medium', Helvetica] font-medium text-[#535353] text-[22px] text-center tracking-[0] leading-[27.5px] w-full">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-6 mt-4 ">
          {statsData.slice(3, 5).map((stat, index) => (
            <Card
              key={index}
              className="w-[263.93px] h-[184.75px] bg-[#fffbf6] rounded-[18.2px] shadow-[0px_4px_15.7px_1px_#0000000f] my-4"
            >
              <CardContent className="flex flex-col items-center justify-center h-full gap-3.5px px-[34px]">
                <div className="[font-family: 'Inter-Semibold', Helvetica] font-semibold text-[#f68e13] text-4xl text-center tracking-[0] leading-[45px] w-full">
                  {stat.value}
                </div>
                <div className="[font-family: 'Inter-Medium', Helvetica] font-medium text-[#535353] text-[22px] text-center tracking-[0] leading-[27.5px] w-full">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
