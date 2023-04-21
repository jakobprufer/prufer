import React from "react";
import CustomImg from "../Components/CustomImg";
import ImageSlide from "../Components/ImageSlide";
import ProjectLinks from "../Components/ProjectLinks";
import SetImg from "../Components/SetImg";
import projects from "../Data/Projects.json";

export default function Pulse() {
  //get current project from data
  const current = projects.find((obj) => obj.projectId === "pulse");

  return (
    <div className={`project ${current.projectId}`}>
      <div className="projectHead">
        <div className="projectImage">
          <div className="c34">
            <video
              className="img"
              width="1080"
              height="1920"
              autoPlay
              muted
              playsInline
              preload="auto"
              loop
            >
              <source
                src="/Assets/pulse/fbheader.mp4"
                type="video/mp4#t=0.001"
              />
            </video>
          </div>
        </div>
        <div className="projectInfo">
          <div>
            <div className="bigH">
              Pulse Radio
              <br />
              Rebrand & Website
            </div>
            <div className="bigP">
              <ul>
                <li>
                  <div className="tinyH">Goal:</div>Revitalise the society with
                  a new website and identity, attract creatives within LSE
                </li>
                <li>
                  <div className="tinyH">My Role:</div>Logo, branding, Website
                  with Squarspace, poster and content design
                </li>
                <li>
                  <div className="tinyH">Highlights:</div>Vast increase in
                  society's exposure, new level of interactivity with live chat
                </li>
                <li>
                  <div className="tinyH">Tools:</div>Adobe CC, Squarespace
                </li>
                <li>
                  <div className="tinyH">Completed:</div>12/2019
                </li>
              </ul>
            </div>
          </div>
          <ProjectLinks
            link1="https://pulseradio.uk"
            link1Title="Visit Website"
            link2="https://www.instagram.com/pulseradiolse/"
            link2Title="Visit Instagram"
          />
        </div>
      </div>
      <div className="projectContent marginTop32">
        <div className="projectSection">
          <div className="projectInnersection">
            <p className="bigP">
              When I joined the London School of Economics in 2019, its student
              radio was in need of a rebrand. I designed a new identity, logo
              and website which helped the progress the society made since then:
              Instagram followers have risen from ca. 300 to 1.5k and the then
              dormant society now regularly hosts sold out parties in renowned
              London night clubs. Fellow committee member{" "}
              <a
                href="https://www.instagram.com/alanahsarginson/"
                target="_blank"
              >
                @alanahsarginson
              </a>{" "}
              took the identity to a new level with her poster designs.
            </p>
            <p className="bigP">
              My favourite UX feature I added in April 2020 during the height of
              first Covid19 lockdown: a live chat plugin next to the live
              player. This elevated all the shows, especially those focusing on
              political discussion and campus gossip, and transformed Pulse from
              a one-way broadcast into and interactive experience.
            </p>
            <p className="bigP">
              See the slide below for some of my contributions and older designs
              for comparison:
            </p>
          </div>
          <ImageSlide
            images={current.images}
            projectId={current.projectId}
            ratio="c32"
          />
        </div>
      </div>
    </div>
  );
}
