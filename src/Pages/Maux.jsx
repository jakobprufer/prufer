import React from "react";
import ProjectLinks from "../Components/ProjectLinks";
import SetImg from "../Components/SetImg";
import projects from "../Data/Projects.json";

export default function Maux() {
  //get current project from data
  const current = projects.find((obj) => obj.projectId === "maux");
  return (
    <div className={`project ${current.projectId}`}>
      <div className="bigH">{current.title}</div>
      <div className="projectHead">
        <div className="projectImage">
          <div className="c11">
            <img src="/Assets/maux/m/maux13.jpg" alt="" className="img" />
          </div>
        </div>
        <div className="projectInfo">
          <div>
            <div className="bigP">
              <ul>
                <li>
                  <div className="tinyH">Goal:</div> Showcase the process and
                  end results of my work within the MA User Experience Design at
                  University of the Arts London
                </li>
                <li>
                  <div className="tinyH">My Role:</div>Concept, design and
                  development
                </li>
                <li>
                  <div className="tinyH">Highlights:</div>Creative media grids,
                  from-scratch responsive design, zoom images, hover videos,
                  scroll-to-footnote
                </li>
                <li>
                  <div className="tinyH">Tools:</div>ReactJS, CSS, HTML
                </li>
                <li>
                  <div className="tinyH">Completed:</div>ongoing
                </li>
              </ul>
            </div>
          </div>
          <ProjectLinks link1="https://prufer.co/ux" link1Title="Visit Blog" />
        </div>
      </div>
    </div>
  );
}
