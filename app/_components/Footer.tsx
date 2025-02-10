import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="bg-neutral-900 text-white">
        <div className="container mx-auto pt-[120px] pb-5">
          <div className="grid grid-cols-5 gap-[113px]">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Image src="" alt="" width={63} height={37} />
                <span className="font-bold text-[29.1px] tracking-[1.94px]">
                  BRIGHTMINDS
                </span>
              </div>
              <address className="text-[#cccccc] text-sm not-italic mb-6">
                A108 Adam Street
                <br />
                New York, NY 535022
                <br />
                United States
                <br />
                <br />
                Phone:
                <br />
                Email:
              </address>
              <div className="flex gap-6">
                <Facebook className="w-6 h-6" />
                <Twitter className="w-6 h-6" />
                <Youtube className="w-6 h-6" />
                <Linkedin className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
