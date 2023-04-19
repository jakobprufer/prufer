import React from "react";
import projects from "../Data/Projects.json";
import ImageSlide from "../Components/ImageSlide";

export default function BerlinEdit() {
  //get current project from data
  const current = projects.find((obj) => obj.projectId === "berlinedit");

  return (
    <div className="project">
      <div className="projectHead">
        <div>
          <div className="bigH">Lockdown in Berlin</div>
          <p className="bigP">
            The summer of 2020 I spent back home in Berlin. Following the first
            lockdown, most of my old school friends were back in town. With most
            public venues still shut down, we spent our time making music,
            drinking by the lake and going on a wild camping trip.
          </p>
          <p className="bigP">
            The video was filmed on iPhone as well as drone and edited in Adobe
            Premiere and After Effects. The collage style was achieved using
            manual masks, Roto Brush, and effects such as Luma Key and Turbulent
            Displace.
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
                src={`/Assets/${current.projectId}/berlineditmain.mp4`}
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
