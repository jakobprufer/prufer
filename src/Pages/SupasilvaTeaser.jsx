import React from "react";
import projects from "../Data/Projects.json";
import ImageSlide from "../Components/ImageSlide";

//always add all this if you want to use hashlink to a different page - access scrollWithOffset by adding "scroll={(el) => scrollWithOffset(el)}" to the HashLink
import { HashLink } from "react-router-hash-link";
const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -131;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

export default function SupasilvaTeaser() {
  //get current project from data
  const current = projects.find((obj) => obj.projectId === "supasilvateaser");

  return (
    <div className="project">
      <div className="projectHead">
        <div>
          <div className="bigH">Supasilva Teaser</div>
          <p className="bigP">
            These are two teasers I edited to promote the{" "}
            <HashLink
              smooth
              scroll={(el) => scrollWithOffset(el)}
              to="/music/jakobprufer#supasilvaEp"
            >
              Supasilva EP
            </HashLink>{" "}
            released together with Nick01 and LowPass. We used the first video
            for a targeted Instagram story campaign. Linking to the project's
            lead single "Lockdown", the ad managed to attain a very good click
            through rate and contributed at least 10-20k in playbacks for the
            track.
          </p>
          <p className="bigP">
            The second video is a more personal narration about the background
            of the EP's creation and was only posted on my own social media.
          </p>
        </div>
      </div>
      <div className="projectContent">
        <div className="maxWExtraSmall">
          <ImageSlide
            images={current.images}
            projectId={current.projectId}
            ratio="c916"
          />
        </div>
      </div>
    </div>
  );
}
