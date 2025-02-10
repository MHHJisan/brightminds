import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ChevronDown, Search } from "lucide-react";
import Image from "next/image";
import React from "react";

const navItems = [
  { label: "Study Abroad", hasDropdown: true },
  { label: "Student Service", hasDropdown: true },
  { label: "About Us ", hasDropdown: false },
  { label: "Contacts", hasDropdown: false },
];

export default function Navbar() {
  return (
    <div>
      <header className="w-full h-12 bg-background mt-4">
        <div className="container mx-auto flex items-center justify-between h-full">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="logo"
              width={60}
              height={40}
              className=""
            />
            <span className="font-bold text-[24.7px] tracking-[1.65px] text-[#1a1a1a]">
              BRIGHTMINDS
            </span>
          </div>
          <div className="flex-1 max-w-[409px]  mx-auto">
            <div className="flex items-center gap-4 p-4 bg-[#f7931e0a] rounded-[18px] border border-[#f7931e] shadow-none h-12">
              <Search className="w-[18px] h-[12px] text-[#6f6f6f] border-none shadow-none" />
              <Input
                className="bg-transparent placeholder:text-[#6f6f6f] focus:ring-0 focus:border-transparent border-none shadow-none focus:border-hidden focus-visible:right-0"
                placeholder="Find courses, subjects, universities...."
              />
            </div>
          </div>

          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink className="flex items-center gap-1 px-2 py-1">
                    {item.label}
                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>
    </div>
  );
}
