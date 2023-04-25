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
      <div className="projectContent marginTop32">
        <div className="projectSection">
          <div className="projectInnersection">
            <p className="bigP">
              Graded first (74%), this is my BSc dissertation project at the
              London School of Economics and Behavioural Science. I decided to
              focus on face perception. My supervisor, Deema Awad, had
              introduced me to the gaze cueing effect – our innate tendency to
              detect visual targets quicker if we perceive someone else already
              looking towards the target. This phenomenon tied in with my
              interest in the evolutionary foundation of our cognition.
              Specifically, I investigated whether facial attractiveness affects
              the gaze cueing effect – a feasible hypothesis, as attractive
              faces have been found to exceedingly attract and hold attention.
            </p>
            <p className="bigP">
              I designed and conducted a quantitative online study with 52
              participants using the Gorilla experiment builder for the timed
              reaction tasks. The research was preregistered and underwent
              university ethics approval. I then performed data cleaning,
              preliminary and main ANOVA analysis using the statistical
              programming language R in RStudio.
            </p>
          </div>
          <SetImg name="flow" ratio="c43" projectId="faceperception" size="l" />
        </div>
      </div>
    </div>
  );
}
