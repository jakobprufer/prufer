import { useState, Fragment } from "react";
import projects from "../Data/Projects.json";
import ImageSlide from "../Components/ImageSlide";
import { Link } from "react-router-dom";
import SetImg from "../Components/SetImg";
import { RiCloseLine } from "react-icons/ri";

export default function Off() {
  //get current project from data
  const current = projects.find((obj) => obj.projectId === "off");

  const [is20Open, set20Open] = useState(false);
  const [is21Open, set21Open] = useState(false);
  const [is23Open, set23Open] = useState(false);

  return (
    <Fragment>
      {is20Open && (
        <div className="modal">
          <div className="maxWMedium modalContent phs">
            <div className="modalCloser mlxs mbxs pointer">
              <RiCloseLine
                onClick={() => set20Open(false)}
                className="iconExtraBig textBackgroundcolor"
              />
            </div>
            <div className="modalVideo">
              <div className="c169">
                <video
                  className="img"
                  width="1280"
                  height="720"
                  preload="auto"
                  controls
                >
                  <source
                    src={`/Assets/${current.projectId}/off20recap.mp4#t=0.001`}
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      )}
      {is21Open && (
        <div className="modal">
          <div className="maxWSmall modalContent phs">
            <div className="modalCloser mlxs mbxs pointer">
              <RiCloseLine
                onClick={() => set21Open(false)}
                className="iconExtraBig textBackgroundcolor"
              />
            </div>
            <div className="modalVideo">
              <div className="c11">
                <video
                  className="img"
                  width="1080"
                  height="1080"
                  preload="auto"
                  controls
                >
                  <source
                    src={`/Assets/off21video/off21videomain.mp4#t=0.001`}
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      )}
      {is23Open && (
        <div className="modal">
          <div className="maxWExtraSmall modalContent phs">
            <div className="modalCloser mlxs mbxs pointer">
              <RiCloseLine
                onClick={() => set23Open(false)}
                className="iconExtraBig textBackgroundcolor"
              />
            </div>
            <div className="modalVideo">
              <div className="c916">
                <video
                  className="img"
                  width="720"
                  height="1280"
                  preload="auto"
                  controls
                >
                  <source
                    src={`/Assets/${current.projectId}/off23recap.mp4#t=0.001`}
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="project">
        <div className="projectHead">
          <div className="projectImage">
            <div className="c43">
              <img src="/Assets/off/m/offlogo.jpg" alt="" className="img" />
            </div>
          </div>
          <div className="projectInfo">
            <div>
              <div className="bigH">Off - Warehouse Raves</div>
              <p className="bigP">
                The “off” rave series, hosted in abandoned locations around
                Berlin, was initially started by my friend Evan and me to
                celebrate our birthdays each September.
              </p>
              <p className="bigP">
                With help of our DJ crew <Link to="/dj/turntandable">T&A</Link>{" "}
                and many of our close friends we created a unique experience
                that blended the excitement of a rave with the mystery of
                travelling through the woods to abandoned locations. Our goal
                was to create a safe, inclusive and remote space for people from
                the area to come together and celebrate music and community.
              </p>
            </div>
          </div>
        </div>
        <div className="projectContent marginTop32">
          <div className="smallH">Watch the Aftermovies:</div>
          <div className="offAftermovies">
            <div
              className="offAftermovie pointer"
              onClick={() => set23Open(true)}
            >
              <SetImg
                name="23aftermovie"
                ratio="c11"
                size="m"
                projectId={current.projectId}
              />
              <div className="offCaption">
                <span className="t-14-800">Off23</span>
                <span className="t-14-400"> (2021)</span>
              </div>
            </div>
            <div
              className="offAftermovie pointer"
              onClick={() => set21Open(true)}
            >
              <SetImg
                name="21aftermovie"
                ratio="c11"
                size="m"
                projectId={current.projectId}
              />
              <div className="offCaption">
                <span className="t-14-800">Off21</span>
                <span className="t-14-400"> (2019)</span>
              </div>
            </div>
            <div
              className="offAftermovie pointer"
              onClick={() => set20Open(true)}
            >
              <SetImg
                name="20aftermovie"
                ratio="c11"
                size="m"
                projectId={current.projectId}
              />
              <div className="offCaption">
                <span className="t-14-800">Off20</span>
                <span className="t-14-400"> (2018)</span>
              </div>
            </div>
          </div>
          <div className="projectSection mtl">
            <div className="smallH sectionTitle">Off23</div>
            <div className="bigP">2021 we</div>
            <div className="bigP">
              <ul className="bulletlist">
                <li>
                  went back to our first location underground by the old
                  transmission tower
                </li>
                <li>
                  set up a website for guests to join, register +1s and get
                  informations about the location and journey there
                </li>
                <li>
                  had 2 floors for the first time - one for hip hop and one for
                  techno / electronic
                </li>
                <li>
                  added{" "}
                  <a
                    href="https://www.instagram.com/matt_migz/"
                    target="_blank"
                  >
                    Matt Migz
                  </a>
                  ,{" "}
                  <a
                    href="https://www.instagram.com/chriscollinmusic/"
                    target="_blank"
                  >
                    Chris Collin
                  </a>{" "}
                  and{" "}
                  <a href="https://www.instagram.com/_romnn/" target="_blank">
                    Romnn
                  </a>{" "}
                  to the line up next to T&A
                </li>
              </ul>
            </div>
            <ImageSlide
              images={current.images23}
              projectId={current.projectId}
              ratio="c169"
            />
          </div>
          <div className="projectSection marginTop32">
            <div className="smallH sectionTitle">Off21</div>
            <div className="bigP">2019 we</div>
            <div className="bigP">
              <ul className="bulletlist">
                <li>
                  were surprised to see multiple police vans pulled up right by
                  the forest - it turned out they were there because someone
                  brought a weapon to a nearby village fair. We had to delay the
                  party and guide guest around the police.
                </li>
                <li>
                  partied in a big abandoned warehouse with scaffolding as room
                  separation, plants as decoration and a projector for visuals
                  on the wall behind the dj
                </li>
                <li>
                  were told that the music was audible throughout the whole
                  nearby neighbourhood at 5am - the village fair might have been
                  the reason why nobody called the police on us
                </li>
                <li>
                  Nearly got attacked by wild boars while scouting for locations
                  :)
                </li>
              </ul>
            </div>
            <ImageSlide
              images={current.images21}
              projectId={current.projectId}
              ratio="c32"
            />
          </div>
          <div className="projectSection marginTop32">
            <div className="smallH sectionTitle">Off20</div>
            <div className="bigP">2018 we</div>
            <div className="bigP">
              <ul className="bulletlist">
                <li>
                  Held the party in a basement next to an abandoned transmission
                  tower in the middle of nowhere
                </li>
                <li>
                  Set up a wildlife camera to track the times at which a
                  security card would stop by the site - which turned out to be
                  fully random
                </li>
                <li>
                  Guided guests through a forest aisle to avoid detection from
                  the next village
                </li>
                <li>
                  Took turns on watch out posts to send an alarm if the security
                  guard came
                </li>
                <li>
                  Only barely avoided detection by the security guard when he
                  arrived while we were packing up in the morning
                </li>
                <li>
                  Did this for the first time - had some of the most stressful
                  weeks but also managed to surprise our friends
                </li>
              </ul>
            </div>
            <ImageSlide
              images={current.images20}
              projectId={current.projectId}
              ratio="c169"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
