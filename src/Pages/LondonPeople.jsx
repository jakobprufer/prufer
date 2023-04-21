import React from "react";
import projects from "../Data/Projects.json";
import ImageSlide from "../Components/ImageSlide";

export default function LondonPeople() {
  //get current project from data
  const current = projects.find((obj) => obj.projectId === "londonpeople");

  return (
    <div className="project">
      <div className="projectHead">
        <div className="projectInfo">
          <div>
            <div className="bigH">London People</div>
            <p className="bigP">
              For an arts project my school mate Willi and I approached
              strangers and asked to take their picture in London, 2015.
            </p>
          </div>
        </div>
      </div>
      <div className="projectContent">
        <ImageSlide
          images={current.images}
          projectId={current.projectId}
          ratio="c32"
        />
      </div>
    </div>
  );
}
