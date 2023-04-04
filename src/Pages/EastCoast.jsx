import React from "react";
import projects from "../Data/Projects.json";
import ImageSlide from "../Components/ImageSlide";

export default function EastCoast() {
  //get current project from data
  const current = projects.find((obj) => obj.projectId === "eastcoast");

  return (
    <div className="project">
      <div className="projectHead">
        <div>
          <div className="bigH">East Coast</div>
          <p className="bigP">
            During the summer of 2015, i spent 6 weeks with my uncle in
            Manhattan and with friends in Richmond, VA. Days and evenings I was
            wondering around the city on my own, taking pictures as I went -
            often trying to hide my chunky DSLR camera in an attempt to seem
            more local. I returned to Germany a slightly changed person, having
            really left my home bubble for the first time.
          </p>
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
