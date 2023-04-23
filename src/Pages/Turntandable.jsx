import React from "react";
import projects from "../Data/Projects.json";
import ImageSlide from "../Components/ImageSlide";
import { Link } from "react-router-dom";
import ProjectLinks from "../Components/ProjectLinks";

export default function Turntandable() {
  //get current project from data
  const current = projects.find((obj) => obj.projectId === "turntandable");

  return (
    <div className="project">
      <div className="projectHead">
        <div>
          <div className="bigH">T&A</div>
          <p className="bigP">
            T&A (turnt and able) is a DJ project started by my good friends
            Evan, Gino, Willi and me 2017 in Berlin. Over the years we’ve played
            in varying formations out of the four of us in venues such as
            Corsica Studios (London), The Cause (London) and Panke Culture
            (Berlin) in addition to private parties, university events and our
            own <Link to="/dj/off">Off warehouse rave series</Link>.
          </p>
          <p className="bigP">
            Aside from djing, we’ve produced output such as remixes and edits,
            live visuals, light shows, <Link to="/dj/sets">showcase sets</Link>,
            curated playlists. Musically, our focus is techno, but we’ve never
            been limited to the genre, wandering through trap hiphop, RnB, afro
            house and other electronic genres depending on the venue and the
            mood of the party. We are always balancing on a knives edge between
            recognisable mainstream and exciting underground sounds.
          </p>
          <p className="bigP">
            The goal we set for ourselves back in 2017 remains widely unchanged:
            “In combination of sound with visual elements, unique venues and
            environments, dynamic processes, detailed management, and innovative
            marketing, the T&A crew seeks to provide each attendee with the best
            possible experience and advance the party/club culture by exploring
            new means of mixing, producing, and framing music while guiding
            group energy.”
          </p>
          <div className="mtm">
            <ProjectLinks
              soundcloud="https://soundcloud.com/turntandable"
              youtube="https://www.youtube.com/@turntable6644"
              instagram="https://www.instagram.com/turntandable/"
            />
          </div>
        </div>
      </div>
      <div className="projectContent mtm">
        <ImageSlide
          images={current.images}
          projectId={current.projectId}
          ratio="c32"
        />
      </div>
    </div>
  );
}
