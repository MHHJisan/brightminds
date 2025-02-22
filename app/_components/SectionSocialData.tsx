import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  ArrowUpRight,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import React from "react";

const brightminds = "@brightminds";

const socialData = [
  {
    platform: "Twitter",
    icon: Twitter,
    handle: brightminds,
    followers: "2.6k Followers",
  },
  {
    platform: "Facebook",
    icon: Facebook,
    handle: brightminds,
    followers: "2.6k Followers",
  },
  {
    platform: "Linkedin",
    icon: Linkedin,
    handle: brightminds,
    followers: "1.2k Followers",
  },
  {
    platform: "Youtube",
    icon: Youtube,
    handle: brightminds,
    followers: "2.8k Followers",
  },
];

export default function SectionSocialData() {
  return (
    <div className="flex justify-center gap-[60px] py-8 mb-6">
      {socialData.map((social, index) => (
        <Card
          key={index}
          className="w-[287px] border-[#f7931e] hover:cursor-pointer"
        >
          <CardContent className="flex items-center gap-3 p-5">
            <div className="w-12 h-12 flex items-center justify-center bg-[#f68e13] rounded-md">
              <social.icon className="w-6 h-6 text-white" />
            </div>

            <div className="flex flex-col w-[140px] items-start gap-2">
              <div className="[font-family: 'Inter-Bold', Helvetica], font-bold text-[#131313] text-lg">
                {social.handle}
              </div>
              <div className="[font-family: 'Inter-Medium', Helvetica], font-medium text-[#131313] text-sm">
                {social.followers}
              </div>
            </div>

            <ArrowUpRight className="w-14 h-14 text-[#131313]" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
