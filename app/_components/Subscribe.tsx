import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export default function Subscribe() {
  return (
    <div>
      <section className="bg-[#f68e14] py-[120px]">
        <div className="container mx-auto">
          <div className="flex items-center gap-20">
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-white mb-4">
                Subscribe to our Newsletter
              </h2>
              <p className="text-xl text-[#ebebeb]">
                Subscribe for Updates: Stay informed about the latest investor
                updates, financial results, and announcements by subscribing to
                our Newsletter.
              </p>
            </div>
            <div className="flex-1">
              <div className="flex">
                <Input
                  className="rounded-r-none h-[48px] bg-white"
                  placeholder="Enter your email"
                />
                <Button className="h-[48px] rounded-l-none bg-neutral-900 px-8">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
