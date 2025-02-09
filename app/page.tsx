import Navbar from "./_components/Navbar";
import SectionCountry from "./_components/SectionCountry";
import SectionPlan from "./_components/SectionPlan";
import SectionStudents from "./_components/SectionStudents";

export default function Home() {
  return (
    <div>
      <Navbar />
      <SectionPlan />
      <SectionStudents />
      <SectionCountry />
    </div>
  );
}
