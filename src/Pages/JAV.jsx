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
              In Germany, both companies and authorities typically have a youth
              and trainee representation (JAV) to provide a platform for young
              employees to express their concerns and interests. This also
              applies to the German Bundestag, where I was commissioned to
              redesign the outdated logo of the parliamentary JAV. My focus was
              on integrating typography into the recognizable silhouette of the
              Reichstag dome.
            </div>
          </div>
        </div>
      </div>
      <div className="projectContent">
        <p className="bigP">
          Slide to compare my logo (left) to the previous version of the logo:
        </p>
        <div className="maxWMedium userNone">
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
