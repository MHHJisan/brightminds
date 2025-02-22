import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function ServiceQuote() {
  return (
    <div className="w-full max-w-[1154px] mx-auto mb-12">
      <Card className="relative bg-[#fffcfa] border-[#f68e13] shadow-[0px_4px_15.7px_1px_#0000000f]">
        <CardContent className="flex flex-col items-center py-8 px-16">
          {/* <QuoteIcon className="w-[49px] h-[49px] text-[#f68e13] mb-4" /> */}
          <Card className="w-[49px] h-[49px] relative bg-transparent border-none shadow-none mb-4">
            <CardContent className="p-0">
              <AspectRatio ratio={1}>
                <Image
                  src="/quote.png"
                  alt="Quote"
                  loading="lazy"
                  width={50}
                  height={50}
                />
              </AspectRatio>
            </CardContent>
          </Card>
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
