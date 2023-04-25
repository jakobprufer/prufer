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
            Sydenham Hill Wood and Dulwich Wood comprise a vast green expanse
            situated in semi-urban South East London. Wander into them and you
            forget you are still within the boundaries of a city. On a sunny
            Sunday, you will find the woods full of the sound of children and
            families exploring.
          </p>
          <p className="bigP">
            Within the woods, you can find remnants of ancient ruins and the
            entrance to the disused Crescent Wood Tunnel. According to local
            legend, the tunnel was sealed off after several children went
            missing in the 1960s. The air is different by the tunnel entrance,
            cooler, and I like to imagine there are secret stairs leading up
            from the tunnel to the massive Beltwood House that lies on the hill
            above.
          </p>
          <p className="bigP">
            Sydenham Hill Station by the woods feels like it belongs in a sleepy
            little village, again it is hard to imagine that the trains
            departing from here take you to Brixton within 7 minutes. The
            station leads right into another tunnel, this one still in use. From
            the footbridge you can watch trains appear as tiny dots at the far
            end of the tunnel.
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
