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

export default function MusicProduction() {
  //get current project from data
  const current = projects.find((obj) => obj.projectId === "musicproduction");

  //state to register currently playing player
  const [currentPlaying, setCurrentPlaying] = useState(null);

  //mute function
  const [muted, setMuted] = useState(false);

  return (
    <div className="project musicproduction">
      <div className="bigH">{current.title}</div>
      <div className="projectHead">
        <div className="projectInfo">
          <div>
            <p className="bigP">
              A selection of my music production work, including electronic
              tracks and edits, hip hop beats and music for videos.
            </p>
          </div>
        </div>
      </div>
      <div className="contentContainer marginTop32">
        <div className="projectContent">
          <div className="album">
            <div className="albumHead">
              <div className="c11 pulsegrey">
                <div className="albumHeadText">
                  electronic /
                  <br />
                  edits
                </div>
              </div>
            </div>
            <div className="albumContent">
              <div>
                <div className="albumPlayers">
                  <div className="albumPlayer">
                    <div className="playerTitle">
                      Drake - Massive (Techno Edit)
                    </div>
                    <Player
                      source={
                        "/Assets/musicproduction/audio/electronic/Drake - Massive (Vourtex Edit).mp3"
                      }
                      showMute={false}
                      currentPlaying={currentPlaying}
                      setCurrentPlaying={setCurrentPlaying}
                      id={"0"}
                      muted={muted}
                      setMuted={setMuted}
                    />
                  </div>
                  <div className="albumPlayer">
                    <div className="playerTitle">Tryin (with Alex Wesson)</div>
                    <Player
                      source={
                        "/Assets/musicproduction/audio/electronic/Tryin.mp3"
                      }
                      showMute={false}
                      currentPlaying={currentPlaying}
                      setCurrentPlaying={setCurrentPlaying}
                      id={"0a"}
                      muted={muted}
                      setMuted={setMuted}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="album" id="supasilvaEp">
            <div className="albumHead">
              <div className="albumHead">
                <div className="c11 pulsegrey">
                  <div className="albumHeadText">beats</div>
                </div>
              </div>
            </div>
            <div className="albumContent">
              <div>
                <div className="albumPlayers">
                  <div className="albumPlayer">
                    <div className="playerTitle">Silently</div>
                    <Player
                      source={
                        "/Assets/musicproduction/audio/beats/Silently.mp3"
                      }
                      showMute={false}
                      currentPlaying={currentPlaying}
                      setCurrentPlaying={setCurrentPlaying}
                      id={"1b"}
                      muted={muted}
                      setMuted={setMuted}
                    />
                  </div>
                  <div className="albumPlayer">
                    <div className="playerTitle">Maybach</div>
                    <Player
                      source={"/Assets/musicproduction/audio/beats/Maybach.mp3"}
                      showMute={false}
                      currentPlaying={currentPlaying}
                      setCurrentPlaying={setCurrentPlaying}
                      id={"1a"}
                      muted={muted}
                      setMuted={setMuted}
                    />
                  </div>
                  <div className="albumPlayer">
                    <div className="playerTitle">Flossin (with LowPass)</div>
                    <Player
                      source={"/Assets/musicproduction/audio/beats/Flossin.mp3"}
                      showMute={false}
                      currentPlaying={currentPlaying}
                      setCurrentPlaying={setCurrentPlaying}
                      id={"1c"}
                    />
                  </div>
                  <div className="albumPlayer">
                    <div className="playerTitle">Now We Here</div>
                    <Player
                      source={
                        "/Assets/musicproduction/audio/beats/Now We Here.mp3"
                      }
                      showMute={false}
                      currentPlaying={currentPlaying}
                      setCurrentPlaying={setCurrentPlaying}
                      id={"1d"}
                      muted={muted}
                      setMuted={setMuted}
                    />
                  </div>
                  <div className="albumPlayer">
                    <div className="playerTitle">Bergmann</div>
                    <Player
                      source={
                        "/Assets/musicproduction/audio/beats/Bergmann.mp3"
                      }
                      showMute={false}
                      currentPlaying={currentPlaying}
                      setCurrentPlaying={setCurrentPlaying}
                      id={"1e"}
                      muted={muted}
                      setMuted={setMuted}
                    />
                  </div>
                  <div className="albumPlayer">
                    <div className="playerTitle">
                      Airwaves (with Alex Wesson)
                    </div>
                    <Player
                      source={
                        "/Assets/musicproduction/audio/beats/Airwaves.mp3"
                      }
                      showMute={false}
                      currentPlaying={currentPlaying}
                      setCurrentPlaying={setCurrentPlaying}
                      id={"1f"}
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
              <div className="c11 pulsegrey">
                <div className="albumHeadText">
                  video /<br />
                  other
                </div>
              </div>
            </div>
            <div className="albumContent">
              <div>
                <div className="albumPlayers">
                  <div className="albumPlayer">
                    <div className="playerTitle">In Da Club - String Intro</div>
                    <Player
                      source={
                        "/Assets/musicproduction/audio/video/In Da Club String Intro.mp3"
                      }
                      showMute={false}
                      currentPlaying={currentPlaying}
                      setCurrentPlaying={setCurrentPlaying}
                      id={"2a"}
                      muted={muted}
                      setMuted={setMuted}
                    />
                  </div>
                  <div className="albumPlayer">
                    <div className="playerTitle">Omnia (drums by me)</div>
                    <Player
                      source={"/Assets/musicproduction/audio/video/Omnia.mp3"}
                      showMute={false}
                      currentPlaying={currentPlaying}
                      setCurrentPlaying={setCurrentPlaying}
                      id={"2b"}
                      muted={muted}
                      setMuted={setMuted}
                    />
                  </div>
                  <div className="albumPlayer">
                    <div className="playerTitle">
                      City Lights Calling (drums by me)
                    </div>
                    <Player
                      source={
                        "/Assets/musicproduction/audio/video/City Lights Calling.mp3"
                      }
                      showMute={false}
                      currentPlaying={currentPlaying}
                      setCurrentPlaying={setCurrentPlaying}
                      id={"2c"}
                      muted={muted}
                      setMuted={setMuted}
                    />
                  </div>
                  {/* <div className="albumPlayer">
                    <div className="playerTitle">Wedding Video</div>
                    <Player
                      source={"/Assets/musicproduction/audio/video/Wedding.mp3"}
                      showMute={false}
                      currentPlaying={currentPlaying}
                      setCurrentPlaying={setCurrentPlaying}
                      id={"2d"}
                      muted={muted}
                      setMuted={setMuted}
                    />
                  </div> */}
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
