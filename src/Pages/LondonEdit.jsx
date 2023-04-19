import React from "react";
import projects from "../Data/Projects.json";
import ImageSlide from "../Components/ImageSlide";

export default function LondonEdit() {
  //get current project from data
  const current = projects.find((obj) => obj.projectId === "londonedit");

  return (
    <div className="project">
      <div className="projectHead">
        <div>
          <div className="bigH">Lockdown in South East London</div>
          <p className="bigP">
            The sunny spring of 2021 I spent in a house share of 5 in South East
            London. Opportunities to go out were limited and dating apps were
            flooded. We would all be in the house, working from home, sharing
            dinner every single night, working out together and having bonfires
            in the garden. Walks to the park and nights spent in the big kitchen
            were highlights.
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
        <div className="maxWExtraSmall">
          <div className="c916">
            <video
              className="img"
              width="1080"
              height="1080"
              preload="auto"
              controls
            >
              <source
                src={`/Assets/${current.projectId}/londoneditmain.mp4`}
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
