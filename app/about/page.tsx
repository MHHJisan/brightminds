import React from "react";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import SectionSocialData from "../_components/SectionSocialData";
import Subscribe from "../_components/Subscribe";
import Header from "./_components/Header";
import Paragraph from "./_components/Paragraph";

export default function About() {
  return (
    <div>
      <Navbar />
      <Header />
      <Paragraph />
      <Subscribe />
      <SectionSocialData />
      <Footer />
    </div>
  );
}
