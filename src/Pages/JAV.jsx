import React from "react";
import CustomImg from "../Components/CustomImg";
import ImageSlide from "../Components/ImageSlide";
import ProjectLinks from "../Components/ProjectLinks";
import SetImg from "../Components/SetImg";
import projects from "../Data/Projects.json";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

export default function JAV() {
  //get current project from data
  const current = projects.find((obj) => obj.projectId === "jav");

  const FIRST_IMAGE = {
    imageUrl: "/Assets/jav/l/original.png",
  };
  const SECOND_IMAGE = {
    imageUrl: "/Assets/jav/l/new.jpg",
  };

  return (
    <div className={`project ${current.projectId}`}>
      <div className="projectHead">
        <div className="projectInfo">
          <div>
            <div className="bigH">
              German Parliament
              <br />
              Youth Representation Logo
            </div>
            <div className="bigP">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              fugit temporibus enim excepturi, molestias est voluptatibus dicta
              placeat, in impedit quidem possimus odio consequatur assumenda
              aliquam rem alias doloremque dolorum.
            </div>
          </div>
        </div>
      </div>
      <div className="projectContent">
        <p className="bigP">
          Slide to compare my logo (left) to the previous version of the logo:
        </p>
        <div className="padded20 userNone">
          <ReactBeforeSliderComponent
            firstImage={FIRST_IMAGE}
            secondImage={SECOND_IMAGE}
            delimiterColor="black"
            currentPercentPosition="65"
          />
        </div>
      </div>
    </div>
  );
}
