import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import SectionAll from "./_components/SectionAll";
import SectionCountry from "./_components/SectionCountry";
import SectionPlan from "./_components/SectionPlan";
import SectionService from "./_components/SectionService";
import SectionStudents from "./_components/SectionStudents";
import SectionStudentsTest from "./_components/SectionStudentsTest";
import ServiceQuote from "./_components/ServiceQuote";
import Subscribe from "./_components/Subscribe";

export default function Home() {
  return (
    <div>
      <Navbar />
      <SectionPlan />
      {/* <SectionStudents /> */}
      <ServiceQuote />
      <SectionService />
      <SectionStudents />
      <SectionCountry />
      <SectionAll />
      <Contact />
      <Subscribe />
      <Footer />
    </div>
  );
}
