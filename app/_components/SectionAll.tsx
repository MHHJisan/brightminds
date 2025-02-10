import { Card, CardContent } from "@/components/ui/card";
import { Heart, Home, Send } from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const feature = [
  {
    icon: <Heart className="w-10 h-10 text-orange-400" />,
    title: "Easy apply",
    description:
      "Filter, shortlist, apply and pay to study your dream course with ease.",
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faSackDollar}
        className="w-10 h-10 text-orange-400"
      />
    ),
    title: "Education loan",
    description:
      "Get pre-approved loans in 48 hours, expert consultation, any apply onlie with Brightminds Funds. ",
  },
  {
    icon: <Send className="w-10 h-10 text-orange-400" />,
    title: "Visa Application",
    description:
      "Get end-to-end guidance on your visa application from an expert.",
  },
  {
    icon: <Home className="w-10 h-10 text-orange-400" />,
    title: "Accomodation help",
    description:
      "Find budget-friendly rooms near 700+ global cities, and get expert guidance with Brightminds Stays.",
  },
];

export default function SectionAll() {
  return (
    <div>
      <section className="container mx-auto py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          An all-on-one solution
        </h2>

        <div className="grid grid-cols-2 gap-8">
          {feature.map((feature) => (
            <Card key={feature.title} className="p-6">
              <CardContent>
                {feature.icon}
                <h3 className="text-xl font-bold mt-4">{feature.title}</h3>
                <p className="text-[#535353]">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
