import { useState } from "react";
import SetImg from "../Components/SetImg";
import projects from "../Data/Projects.json";
import {
  RiSpotifyFill,
  RiAppleFill,
  RiSoundcloudFill,
  RiYoutubeFill,
  RiAmazonFill,
} from "react-icons/ri";
import Player from "../Components/Player";
import ProjectLinks from "../Components/ProjectLinks";
import MuteButton from "../Components/MuteButton";
import ProgressIndicator from "../Components/ProgressIndicator";

export default function Sets() {
  //get current project from data
  const current = projects.find((obj) => obj.projectId === "sets");

  //state to register currently playing player
  const [currentPlaying, setCurrentPlaying] = useState(null);

  //mute function
  const [muted, setMuted] = useState(false);

  return (
    <div className="project jakobprufer">
      <div className="bigH">{current.title}</div>
      <div className="projectHead">
        <div className="projectInfo">
          <div>
            <p className="bigP">
              A selection of DJ sets I have recorded by myself or with friends
              over the years.
            </p>
          </div>
        </div>
      </div>
      <div className="contentContainer marginTop32">
        <div className="projectContent">
          <div className="smallH">Techno / House</div>
          <div className="album">
            <div className="albumHead">
              <SetImg
                name={"marlerroad"}
                projectId={"sets"}
                ratio={"c11"}
                size={"m"}
              />
            </div>
            <div className="albumContent">
              <div>
                <div className="albumTitle">
                  <span className="smallH">Marler Road Vinyl Set</span>
                  <span className="bigP"> (2022)</span>
                  <div className="bigP playerDescription">
                    Vinyl only. Mostly dark, hypnotic techno. Bounce is the most
                    important selection criteria for me. 1 h total.
                  </div>
                </div>

                <ProjectLinks soundcloud="https://soundcloud.com/turntandable/marlerroad" />
                <div className="albumPlayers">
                  <div className="albumPlayer">
                    <Player
                      source={"/Assets/sets/audio/marlerroad.mp3"}
                      showMute={false}
                      currentPlaying={currentPlaying}
                      setCurrentPlaying={setCurrentPlaying}
                      id={"0"}
                      muted={muted}
                      setMuted={setMuted}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="album">
            <div className="albumHead">
              <SetImg
                name={"testing1"}
                projectId={"sets"}
                ratio={"c11"}
                size={"m"}
              />
            </div>
            <div className="albumContent">
              <div>
                <div className="albumTitle">
                  <span className="smallH">T&A :testing</span>
                  <span className="bigP"> (2020)</span>
                  <div className="bigP playerDescription">
                    Live recording of a mix on my radio show T&A testing on
                    LSE's Pulse student radio, broadcasted from Holborn, London.
                    1:20 h total.
                  </div>
                </div>

                <ProjectLinks
                  soundcloud="https://soundcloud.com/turntandable/testing"
                  youtube="https://youtu.be/0-MEerfRQus"
                />
                <div className="albumPlayers">
                  <div className="albumPlayer">
                    <Player
                      source={"/Assets/sets/audio/testing.mp3"}
                      showMute={false}
                      currentPlaying={currentPlaying}
                      setCurrentPlaying={setCurrentPlaying}
                      id={"1"}
                      muted={muted}
                      setMuted={setMuted}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="album">
            <div className="albumHead">
              <SetImg
                name={"lofthouseshowcase"}
                projectId={"sets"}
                ratio={"c11"}
                size={"m"}
              />
            </div>
            <div className="albumContent">
              <div>
                <div className="albumTitle">
                  <span className="smallH">T&A Loft House Showcase</span>
                  <span className="bigP"> (2019)</span>
                  <div className="bigP playerDescription">
                    Dubby, minimal, bouncy house showcase with Evan from the T&A
                    Crew. 1 h total.
                  </div>
                </div>

                <ProjectLinks
                  link1="https://www.youtube.com/watch?v=D7UtSadmm-o"
                  link1Title="Watch the set video"
                />
                <div className="albumPlayers">
                  <div className="albumPlayer">
                    <Player
                      source={"/Assets/sets/audio/technoshowcase.mp3"}
                      showMute={false}
                      currentPlaying={currentPlaying}
                      setCurrentPlaying={setCurrentPlaying}
                      id={"2"}
                      muted={muted}
                      setMuted={setMuted}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="album">
            <div className="albumHead">
              <SetImg
                name={"technoshowcase01"}
                projectId={"sets"}
                ratio={"c11"}
                size={"m"}
              />
            </div>
            <div className="albumContent">
              <div>
                <div className="albumTitle">
                  <span className="smallH">T&A Techno Showcase</span>
                  <span className="bigP"> (2019)</span>
                  <div className="bigP playerDescription">
                    Dark techno showcase with my friends and fellow DJs from the
                    T&A Crew, Evan, Gino and Willi. We set up a nice vibey set
                    to record it in a warehouse just outside of Berlin. 1:50 h
                    total.
                  </div>
                </div>

                <ProjectLinks
                  link1="https://www.youtube.com/watch?v=I5B0QOcyGw8"
                  link1Title="Watch the set video"
                />
                <div className="albumPlayers">
                  <div className="albumPlayer">
                    <div className="playerTitle">Techno Showcase Part 1</div>
                    <Player
                      source={"/Assets/sets/audio/technoshowcase1.mp3"}
                      showMute={false}
                      currentPlaying={currentPlaying}
                      setCurrentPlaying={setCurrentPlaying}
                      id={"3a"}
                      muted={muted}
                      setMuted={setMuted}
                    />
                  </div>
                  <div className="albumPlayer">
                    <div className="playerTitle">Techno Showcase Part 2</div>
                    <Player
                      source={"/Assets/sets/audio/technoshowcase2.mp3"}
                      showMute={false}
                      currentPlaying={currentPlaying}
                      setCurrentPlaying={setCurrentPlaying}
                      id={"3b"}
                      muted={muted}
                      setMuted={setMuted}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="album">
            <div className="albumHead">
              <SetImg
                name={"houseshowcase"}
                projectId={"sets"}
                ratio={"c11"}
                size={"m"}
              />
            </div>
            <div className="albumContent">
              <div>
                <div className="albumTitle">
                  <span className="smallH">T&A Melodic House Showcase</span>
                  <span className="bigP"> (2018)</span>
                  <div className="bigP playerDescription">
                    Melodic house showcase with Evan from the T&A Crew. 55 mins
                    total.
                  </div>
                </div>

                <ProjectLinks
                  link1="https://youtu.be/fEQE7-gxziY"
                  link1Title="Watch the set video"
                />
                <div className="albumPlayers">
                  <div className="albumPlayer">
                    <Player
                      source={"/Assets/sets/audio/houseshowcase.mp3"}
                      showMute={false}
                      currentPlaying={currentPlaying}
                      setCurrentPlaying={setCurrentPlaying}
                      id={"4"}
                      muted={muted}
                      setMuted={setMuted}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="smallH paddingTop32">Hip Hop</div>
          <div className="album">
            <div className="albumHead">
              <SetImg
                name={"pulsetrap"}
                projectId={"sets"}
                ratio={"c11"}
                size={"m"}
              />
            </div>
            <div className="albumContent">
              <div>
                <div className="albumTitle">
                  <span className="smallH">Pulse M006 - Trap Intl.</span>
                  <span className="bigP"> (2020)</span>
                  <div className="bigP playerDescription">
                    My contribution to the Pulse Mix Series with a selection of
                    German, French, US and UK trap. One song is filtered due to
                    copyright. 45 mins total.
                  </div>
                </div>

                <ProjectLinks soundcloud="https://soundcloud.com/turntandable/pulse-radio-m006-w-ta" />
                <div className="albumPlayers">
                  <div className="albumPlayer">
                    <Player
                      source={"/Assets/sets/audio/pulsetrap.mp3"}
                      showMute={false}
                      currentPlaying={currentPlaying}
                      setCurrentPlaying={setCurrentPlaying}
                      id={"5"}
                      muted={muted}
                      setMuted={setMuted}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixedButtons">
        <MuteButton muted={muted} setMuted={setMuted} />
      </div>
    </div>
  );
}
