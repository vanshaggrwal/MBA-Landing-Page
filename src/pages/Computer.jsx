import CompHero from "../components/Computer/CompHero"; // Import CompHero
import CompPointers from "../components/Computer/CompPointers"; // Import CompPointers
import ProgramOverview from "../components/Computer/ProgramOverview";
import CompOfferings from "../components/Computer/CompOfferings";
import CompStudying from "../components/Computer/CompStudying";
import CompBrochure from "../components/Computer/CompBrochure";
import CompCarrer from "../components/Computer/CompCarrer";
import CompRecruiter from "../components/Computer/CompRecruiter";
import CompJoin from "../components/Computer/CompJoin";
import MbaCourses from "../components/Computer/MbaCources";
import CampusTour from "../components/Computer/CampusTour";

function Computer() {
  return (
    <div className="">
      {/* Render the child component */}
      <CompHero />
      <CompPointers />
      <CompRecruiter />
      <ProgramOverview />
      <MbaCourses />
      <CampusTour />
      <CompOfferings />
      <CompStudying />
      <CompBrochure />
      {/* <CompHighlights /> */}
      <CompJoin />
      <CompCarrer />
      {/* <AutoChatbot /> */}
    </div>
  );
}

export default Computer;
