import React from "react";
import projects from "../Data/Projects.json";
import ImageSlide from "../Components/ImageSlide";
import { Link } from "react-router-dom";
import SetImg from "../Components/SetImg";

export default function Off() {
  //get current project from data
  const current = projects.find((obj) => obj.projectId === "off");

  return (
    <div className="project">
      <div className="projectHead">
        <div>
          <div className="bigH">Off - Warehouse Raves</div>
          <p className="bigP">
            The “off” rave series, hosted in abandoned locations close to
            Berlin, was initially started by my mate Evan and me to celebrate
            our birthdays each September.
          </p>
          <p className="bigP">
            With help of our DJ crew <Link to="/dj/turntandable">T&A</Link> and
            many of our close friends we created a unique experience that
            blended the excitement of a rave with the mystery of travelling
            through the woods to abandoned locations. Our goal was to create a
            safe and inclusive space for people from the area to come together
            and celebrate their love of music and community.
          </p>
        </div>
      </div>
      <div className="projectContent marginTop32">
        <div className="smallH">Watch the Aftermovies:</div>
        <div className="offAftermovies">
          <SetImg
            name="20aftermovie"
            ratio="c11"
            size="m"
            projectId={current.projectId}
          />
          <SetImg
            name="21aftermovie"
            ratio="c11"
            size="m"
            projectId={current.projectId}
          />
          <SetImg
            name="23aftermovie"
            ratio="c11"
            size="m"
            projectId={current.projectId}
          />
        </div>
      </div>
    </div>
  );
}
