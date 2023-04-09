import React from "react";
import projects from "../Data/Projects.json";
import ImageSlide from "../Components/ImageSlide";

export default function Sydenham() {
  //get current project from data
  const current = projects.find((obj) => obj.projectId === "sydenham");

  return (
    <div className="project">
      <div className="projectHead">
        <div>
          <div className="bigH">Sydenham Hill Autumn</div>
          <p className="bigP">
            Sydenham Hill Wood and Dulwich Wood are a large green space in
            semi-urban South East London. Wander into them and you forget you
            are still within the boundaries of a city. On a sunny Sunday, you
            will find the woods full of the sound of children and families
            exploring.
          </p>
          <p className="bigP">
            There are old ruins and the entrance to the disused Crescent Wood
            Tunnel, which allegedly was sealed up after some child
            disappearances in the 1960s. The air is different by the tunnel
            entrance, cooler, and I like to imagine there are secret stairs
            leading up from the tunnel to the massive Beltwood House that lies
            on the hill above.
          </p>
          <p className="bigP">
            Sydenham Hill Station by the woods feels like it belongs in a sleepy
            little village, again it is hard to imagine that the trains
            departing take you to Brixton in 7 minutes. The station leads right
            into another, still used tunnel. From the footbridge you can watch
            trains appearing as tiny dots at the far end of the tunnel
          </p>
        </div>
      </div>
      <div className="projectContent">
        <ImageSlide
          images={current.images}
          projectId={current.projectId}
          ratio="c32"
        />
      </div>
    </div>
  );
}
