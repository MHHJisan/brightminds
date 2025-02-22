import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import React from "react";

export default function ServiceQuote() {
  return (
    <div className="w-full max-w-[1154px] mx-auto mb-12">
      <Card className="relative bg-[#fffcfa] border-[#f68e13] shadow-[0px_4px_15.7px_1px_#0000000f]">
        <CardContent className="flex flex-col items-center py-8 px-16">
          <GraduationCap className="w-[49px] h-[49px] text-[#f68e13] mb-4" />
          <p className="text-center text-[22px] leading-[37.6px] text-[#535353] font-semibold [font-family: 'Inter-Semibold', Helvetica] max-w-[1019px]">
            Brightminds Is Dedicated To Helping Internatinal Students
            Successfully Navigate The U.S University Admissions Process. With
            Expert Guidance and Personalized Support, We Simplify Applications,
            Test Pres, Scholarships, And Visa Procedures-turning Your U.S
            Education Dreams Into Reality.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
