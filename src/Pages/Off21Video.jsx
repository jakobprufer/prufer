import React from "react";
import projects from "../Data/Projects.json";
import ImageSlide from "../Components/ImageSlide";
import { Link } from "react-router-dom";

export default function Off21Video() {
  //get current project from data
  const current = projects.find((obj) => obj.projectId === "off21video");

  return (
    <div className="project">
      <div className="projectHead">
        <div>
          <div className="bigH">Off21 Recap Video</div>
          <p className="bigP">
            Off21 in September 2019 was the second instalment of our{" "}
            <Link to="/dj/off">Off Warehouse Rave series</Link> organised by my
            friend Evan and me with our Turnt&Able collective. This one was held
            in a big indoor space in an abandoned building south of Berlin.
          </p>
          <p className="bigP">
            I assembled the video a year after the event from footage filmed by
            the team as well as guests and edited it in Adobe Premiere and After
            Effects. The collage style was achieved using manual masks, Roto
            Brush, and effects such as Luma Key and Turbulent Displace. Our
            friend Yoram contributed some of the overlayed graffiti-style tags.
          </p>
        </div>
      </div>
      <div className="projectContent marginTop32">
        <div className="maxWSmall">
          <div className="c11">
            <video
              className="img"
              width="1080"
              height="1080"
              preload="auto"
              controls
            >
              <source
                src={`/Assets/${current.projectId}/off21videomain.mp4`}
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
