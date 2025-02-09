import Navbar from "./_components/Navbar";
import SectionAll from "./_components/SectionAll";
import SectionCountry from "./_components/SectionCountry";
import SectionPlan from "./_components/SectionPlan";
import SectionStudents from "./_components/SectionStudents";
import Subscribe from "./_components/Subscribe";

export default function Home() {
  return (
    <div>
      <Navbar />
      <SectionPlan />
      <SectionStudents />
      <SectionCountry />
      <SectionAll />
      <Subscribe />
    </div>
  );
}
