import React from "react";
import CustomImg from "../Components/CustomImg";
import ImageSlide from "../Components/ImageSlide";
import ProjectLinks from "../Components/ProjectLinks";
import SetImg from "../Components/SetImg";
import projects from "../Data/Projects.json";

export default function Upbound() {
  //get current project from data
  const current = projects.find((obj) => obj.projectId === "upbound");

  return (
    <div className={`project ${current.projectId}`}>
      <div className="projectHead">
        <div className="projectImage">
          <SetImg name="beauty" size="m" ratio="c11" projectId="upbound" />
        </div>
        <div className="projectInfo">
          <div>
            <div className="bigH">Ubound Beat Store Concept</div>
            <div className="bigP">
              <ul>
                <li>
                  <div className="tinyH">Goal:</div>Create a premium curated
                  audio store
                </li>
                <li>
                  <div className="tinyH">My Role:</div>Concept, design and
                  prototyping
                </li>
                <li>
                  <div className="tinyH">Highlights:</div>Advanced filtering
                  function, custom waveform generator
                </li>
                <li>
                  <div className="tinyH">Tools:</div>Adobe CC
                </li>
                <li>
                  <div className="tinyH">Completed:</div>10/2018
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="projectContent">
        <div className="projectSection">
          <div className="projectInnersection">
            <p className="bigP">
              In Adobe Illustrator and Photoshop I designed this online audio
              and beat store, including desktop and mobile versions of the page,
              check out and content management systems. The aim was to create a
              store that felt more premium and curated than existing platforms.
              Another unique selling point was the precise filter that enables
              customers to filter compositions down to the very specifics such
              as mood and artist influence. The main welcome page was
              compartmentalised into a red area for hip hop beats, a blue area
              for background audio and a yellow area for custom requests.
            </p>
            <p className="bigP">
              With two friends I started working on the development of the
              platform, me working on and testing interface prototypes while the
              others worked mostly on the back end including a CMS, license pdf
              generator, mailing system, checkout and payment gateway as well as
              custom waveform generator. This being my first UI project, it
              taught me important lessons about considering feedback,
              responsibility and spacing - many of these considerations only
              became clear when I started coordinating the development with my
              friends and they asked questions about higher resolution
              prototypes I hadn't even thought of.
            </p>
            <p className="bigP">
              I also filmed and edited a video trailer for the concept store and
              created templates for branded social content.
            </p>
          </div>
        </div>
        <ImageSlide
          images={current.images}
          projectId={current.projectId}
          ratio="c32"
        />
      </div>
    </div>
  );
}
