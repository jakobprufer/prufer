import React from "react";
import projects from "../Data/Projects.json";
import ImageSlide from "../Components/ImageSlide";

export default function Alles() {
  //get current project from data
  const current = projects.find((obj) => obj.projectId === "alles");

  return (
    <div className="project">
      <div className="projectHead">
        <div>
          <div className="bigH">Alles - Music Video</div>
          <p className="bigP">
            These are some shots from the 2020 music video for "Alles", which I
            recorded in collaboration with my friend Evan Lange in New York
            City, Philadelphia, and Toronto.
          </p>
          <p className="bigP">
            I spent around 120 hours editing the 5-minute video in Adobe
            Premiere and After Effects, refining a unique collage style with
            manual masks, Roto Brush, and effects such as Luma Key and Turbulent
            Displace. While filming, we had made sure to incorporate interesting
            camera movements that would allow for smooth transitions, also using
            techniques like hyperlapse and 3D GIFs inspired by the Nishika
            N8000. We used both a DSLR camera and a drone during the shoot.
          </p>
        </div>
      </div>
      <div className="projectContent">
        <ImageSlide
          images={current.images}
          projectId={current.projectId}
          ratio="c169"
        />
      </div>
    </div>
  );
}
