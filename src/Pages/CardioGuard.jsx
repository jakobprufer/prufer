import { useState, useEffect, useRef } from "react";
import useMeasure from "react-use-measure";
import projects from "../Data/Projects.json";
import SetImg from "../Components/SetImg";
import ProgressIndicator from "../Components/ProgressIndicator";
import $ from "jquery";

export default function CardioGuard() {
  //get current project from data
  const current = projects.find((obj) => obj.projectId === "cardioguard");

  //scroll Indicator
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState("section1");

  useEffect(() => {
    const handleScroll = () => {
      const a = window.innerHeight + window.scrollY;
      const b = document.body.offsetHeight;
      const c = a >= b;

      const currentScrollPosition = $(window).scrollTop();

      $("section").each(function () {
        const sectionTop = $(this).offset().top - 131;
        const sectionLength = $(this).height();
        const sectionBottom = sectionTop + sectionLength;
        const i = $(this).index();
        const idSection = $(this).attr("id");

        if (
          currentScrollPosition >= sectionTop &&
          currentScrollPosition <= sectionBottom
        ) {
          setActiveSection(idSection);

          const percent =
            ((currentScrollPosition - sectionTop) / sectionLength) * 100;

          setScrollPosition(percent);
        } else if (currentScrollPosition >= sectionBottom) {
          setScrollPosition(100);
        }

        if (c) {
          setScrollPosition(100);
        }
      });
    };

    $(window).on("scroll", handleScroll);

    return () => {
      $(window).off("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div className="project">
      <div className="bigH">{current.title}</div>
      <div className="projectHead">
        <div className="projectInfo">
          <div>
            <p className="bigP">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              omnis eaque. Sequi itaque voluptatum soluta commodi ipsum
              molestias consequuntur possimus mollitia non. Rem, assumenda
              libero reprehenderit culpa quas excepturi veritatis.
            </p>
          </div>
        </div>
      </div>
      <div className="contentContainer">
        <ProgressIndicator
          activeSection={activeSection}
          scrollPosition={scrollPosition}
        />
        <div className="projectContent">
          <section className="projectSection" id="section1"></section>
          <section className="projectSection" id="section2"></section>
          <section className="projectSection" id="section3"></section>
          <section className="projectSection" id="section4"></section>
          <section className="projectSection" id="section5"></section>
        </div>
      </div>
    </div>
  );
}
