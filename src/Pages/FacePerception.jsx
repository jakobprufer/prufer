import React from "react";
import CustomImg from "../Components/CustomImg";
import ImageSlide from "../Components/ImageSlide";
import ProjectLinks from "../Components/ProjectLinks";
import SetImg from "../Components/SetImg";
import projects from "../Data/Projects.json";

export default function FacePerception() {
  //get current project from data
  const current = projects.find((obj) => obj.projectId === "faceperception");

  return (
    <div className={`project ${current.projectId}`}>
      <div className="projectHead">
        <div className="projectImage">
          <SetImg
            name="beauty"
            ratio="c11"
            projectId="faceperception"
            size="m"
          />
        </div>
        <div className="projectInfo">
          <div>
            <div className="bigH">Face Perception Research</div>
            <div className="bigP">
              <ul>
                <li>
                  <div className="tinyH">Goal:</div>Investigate the role of
                  facial attractiveness in the psychological gaze cueing effect
                </li>
                <li>
                  <div className="tinyH">My Role:</div>Study preregistration,
                  ethics, quantitative research, data cleaning and analysis in R
                  for my BSc thesis
                </li>
                <li>
                  <div className="tinyH">Highlights:</div>Graded distinction,
                  online experiment with 52 participants, full research
                  compendium in RStudio
                </li>
                <li>
                  <div className="tinyH">Tools:</div>RStudio, Gorilla Experiment
                  Builder
                </li>
                <li>
                  <div className="tinyH">Completed:</div>04/2022
                </li>
              </ul>
            </div>
          </div>
          <ProjectLinks
            link1="https://drive.google.com/file/d/1uduBlU4Z5Rm9vkQB1Wmfl15ubrggSKB1/view?usp=sharing"
            link1Title="Read Full Thesis"
          />
        </div>
      </div>
      <div className="projectContent">
        <div className="projectSection">
          <div className="projectInnersection">
            <p className="bigP">
              When I joined the London School of Economics in 2019, its student
              radio was in need of a rebrand. I designed a new identity, logo
              and website which helped the progress the society made since then:
              Instagram followers have risen from ca. 300 to 1.5k and the then
              dormant society now regularly hosts sold out parties in renowned
              London night clubs. Fellow committee member{" "}
              <a
                href="https://www.instagram.com/alanahsarginson/"
                target="_blank"
              >
                @alanahsarginson
              </a>{" "}
              took the identity to a new level with her poster designs.
            </p>
            <p className="bigP">
              My favourite UX feature I added in April 2020 during the height of
              first Covid19 lockdown: a live chat plugin next to the live
              player. This elevated all the shows, especially those focusing on
              political discussion and campus gossip, and transformed Pulse from
              a one-way broadcast into and interactive experience.
            </p>
            <p className="bigP">
              See the slide below for some of my contributions and older designs
              for comparison:
            </p>
          </div>
        </div>
        <ImageSlide
          images={current.images}
          projectId={current.projectId}
          ratio="c32"
        />
      </div>
    </div>
  );
}
