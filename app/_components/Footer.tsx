"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp, Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import React from "react";

const footerLinks = {
  Education: [
    "Email Marketing",
    "Social Media Marketing",
    "Search Engine Optimization",
    "Product Development",
    "Web Development",
  ],
  Business: [
    "Digital Marketing Agency",
    "SEO Agency",
    "PPC Agency",
    "Content Marketing Agency",
    "Internet Marketing Agency",
  ],
  "Developer & IT": [
    "Internet Marketing",
    "Content Marketing",
    "Social Media",
    "Web Design",
    "SEO",
    "PPC",
    "AMAZON",
  ],
  Company: [
    "About us",
    "Contact us",
    "SEO Checker",
    "Tools",
    "Marketing Guides",
    "Careers",
  ],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <footer className="bg-neutral-900 text-white">
        <div className="container mx-auto pt-14 pb-5 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5  lg:gap-x-20">
            {/* Left Section: Logo and Address */}
            <div className="">
              <div className="flex items-center gap-4 mb-4">
                <Image src="/logo.png" alt="" width={63} height={37} />
                <span className="font-bold text-2xl tracking-wide">
                  BRIGHTMINDS
                </span>
              </div>
              <address className="text-[#cccccc] text-base not-italic mb-4 leading-relaxed">
                A108 Adam Street
                <br />
                New York, NY 535022
                <br />
                United States
                <br />
                <br />
                <strong>Phone:</strong>
                <br />
                <strong>Email:</strong>
              </address>
              <div className="flex gap-4">
                <Facebook className="w-6 h-6" />
                <Twitter className="w-6 h-6" />
                <Youtube className="w-6 h-6" />
                <Linkedin className="w-6 h-6" />
              </div>
            </div>

            {/* Right Section: Footer Links */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:col-span-4 ">
              {Object.entries(footerLinks).map(([category, links], index) => (
                <Card key={index} className="border-none bg-transparent">
                  <CardContent className="p-0">
                    <h3 className="font-semibold text-white text-lg mb-4">
                      {category}
                    </h3>
                    <ul className="text-gray-300 text-sm leading-7">
                      {links.map((link, idx) => (
                        <li key={idx}>{link}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Scroll to Top Button */}
            <Button
              variant="outline"
              size="icon"
              className="absolute w-[100px] h-[100px] top-[3351px] left-[810px] rounded-full border-8 border-[#2f2f2f] bg-white hover:bg-white"
              onClick={scrollToTop}
            >
              <ArrowUp className="w-12 h-12 text-black" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
