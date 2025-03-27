"use client";
import { useEffect } from "react";
//for animate on scroll
import AOS from "aos";
import "aos/dist/aos.css";
//components
import { Detail } from "./detail";
import { SideBar } from "./sideBar";
import MobileCard from "./mobileComponents/card";
import MobileEducation from "./mobileComponents/education";
import MobileExperience from "./mobileComponents/experience";
import MobileSkills from "./mobileComponents/skills";
import MobileProjects from "./mobileComponents/projects";
import MobileContact from "./mobileComponents/contact";

const MainPage = () => {
  // useEffect for aos
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);
  return (
    <div>
      {/* mobile view */}
      <div className="overflow-x-hidden bg-white h-screen md:hidden">
        {/* Card */}
        <div data-aos="zoom-in">
          <MobileCard />
        </div>

        {/* Education */}
        <MobileEducation />
        {/* Experience */}
        <MobileExperience />
        {/* Skills */}
        <MobileSkills />
        {/* Projects */}
        <MobileProjects />
        {/* Contact */}
        <MobileContact />
      </div>
      {/* desktop view */}
      <div className="hidden md:flex md:overflow-hidden md:h-screen">
        {/* Side bar */}
        <div className="w-1/5">
          <SideBar />
        </div>

        {/* main */}
        <div className="w-full">
          <Detail />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
