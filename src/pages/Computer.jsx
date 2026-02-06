import CompHero from "../components/Computer/CompHero"; // Import CompHero
import CompPointers from "../components/Computer/CompPointers"; // Import CompPointers
import ProgramOverview from "../components/Computer/ProgramOverview";
import CompOfferings from "../components/Computer/CompOfferings";
import CompStudying from "../components/Computer/CompStudying";
import CompBrochure from "../components/Computer/CompBrochure";
import CompCarrer from "../components/Computer/CompCarrer";
import CompRecruiter from "../components/Computer/CompRecruiter";
import CompJoin from "../components/Computer/CompJoin";
import MbaCourses from "../components/Computer/MbaCourses";
import CampusTour from "../components/Computer/CampusTour";
import ChatNowButton from "../components/AutoChatbot";
import CompHighlights from "../components/Computer/CompHighlights"; // Import CompHighlights
import CorePillars from "../components/Computer/CorePillars";
import TestimonialsSlider from "../components/Computer/TestimonialsSlider"; // Import TestimonialsSlider
import CampVisit from "../components/Computer/CampVisit";
import ScrollNav from "../components/ScrollNav";

function Computer() {
  return (
    <div className="">
      {/* Render the child component */}
      <ScrollNav />
      <CompHero id="comp-hero" />
      <CompPointers id="comp-pointers" />
      <CompRecruiter id="comp-recruiters" />
      <ProgramOverview id="program-overview" />
      <MbaCourses id="mba-courses" />
      <CampusTour id="campus-tours" />
      <CompOfferings id="comp-offerings" />
      <CompStudying id="comp-study" />
     {/* <CompBrochure />*/}
     <CorePillars id="core-pillars" />
      <CompHighlights id="comp-highlights" /> 
      <CompJoin id="comp-join" />
      <CompCarrer id="comp-career" />
      <TestimonialsSlider id="comp-testimonials-slider" />
      <CampVisit id="campus-visit" />
      <ChatNowButton /> 
    </div>
  );
}
export default Computer;
