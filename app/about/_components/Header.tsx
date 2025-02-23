"use client";
import React, { useEffect } from "react";
import { Carousel } from "flowbite";

export default function Header() {
  useEffect(() => {
    const carousel = new Carousel(document.getElementById("default-carousel"));
    carousel.cycle(); // Ensures it starts cycling
  }, []);

  return (
    <div className="max-w-[703px] mx-auto my-8">
      <h1 className="[font-family: 'Inter-Bold', Helvetica] font-bold text-5xl text-center leading-[62.5px]">
        <span className="text-[#1a1a1a]">Your Trusted Partner in U.S. </span>
        <span className="text-[#f68e13]">Higher Education</span>
      </h1>
      <div id="default-carousel" className="relative w-full">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div className="duration-700 ease-in-out" data-carousel-item>
            <img src="/contact.png" className="block w-full" alt="..." />
          </div>
          <div className="duration-700 ease-in-out hidden" data-carousel-item>
            <img src="/file.svg" className="block w-full" alt="..." />
          </div>
          <div className="duration-700 ease-in-out hidden" data-carousel-item>
            <img src="/logo.png" className="block w-full" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}
