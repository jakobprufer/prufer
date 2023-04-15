import { useEffect, useState } from "react";
import $ from "jquery";
import projects from "../Data/Projects.json";
import ProgressIndicator from "../Components/ProgressIndicator";

export default function Luxury() {
  //get current project from data
  const current = projects.find((obj) => obj.projectId === "luxury");

  //progress Indicator
  const [scrollPosition, setScrollPosition] = useState(
    current.sections[0].progressNum
  );
  const [activeSection, setActiveSection] = useState(
    current.sections[0].sectionId
  );

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
    <div className={`project ${current.projectId}`}>
      <div className="projectHead">
        <div className="projectInfo">
          <div>
            <div className="varXlH sentient uppercase">
              Why do we crave Luxury?
            </div>
            <p className="textSub">
              An evolutionary explanation of costly signalling
            </p>
            <div className="tinyH">for:</div>
            <div className="textSub">
              BSc Psychological and Behavioural Science, London School of
              Economics
            </div>
            <div className="tinyH">Date</div>
            <div className="textSub">04/2022</div>
          </div>
        </div>
      </div>
      <div className="contentContainer">
        <ProgressIndicator
          activeSection={activeSection}
          scrollPosition={scrollPosition}
          sections={current.sections}
        />
        <div className="projectContent"></div>
      </div>
    </div>
  );
}
