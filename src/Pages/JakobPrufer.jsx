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

export default function JakobPrufer() {
  //get current project from data
  const current = projects.find((obj) => obj.projectId === "jakobprufer");

  //state to register currently playing player
  const [currentPlaying, setCurrentPlaying] = useState(null);

  //mute function
  const [muted, setMuted] = useState(false);

  return (
    <div className="project jakobprufer">
      <div className="bigH">{current.title}</div>
      <div className="projectHead">
        <div className="projectImage">
          <SetImg
            name={"1"}
            projectId={"jakobprufer"}
            ratio={"c32 exp"}
            size={"l"}
          />
        </div>
        <div className="projectInfo">
          <div>
            <p className="bigP">
              This is my German hip hop project, started in 2018. Over the years
              I've worked with close friends on it, especially Gino Lehmann as
              audio engineer, Nick01 and LowPass as collaborators.{" "}
            </p>
            <p className="bigP">
              Releasing projects independently taught us a lot, we tried out
              various styles and were often surprised by the response releases
              like Supersilva got. 20 is close to my heart as a song about
              breaking from the high school era.
            </p>
          </div>
          <ProjectLinks
            spotify="https://open.spotify.com/artist/3SVudywoXJYuYTD8tClLV5?si=9fbf31186e8541e1"
            apple="https://music.apple.com/gb/artist/jakob-prufer/1521306612"
            youtube="https://music.youtube.com/channel/UCMB9cOQb8TFbTx-8nQojfig?feature=share"
            soundcloud="https://soundcloud.com/jakobwochang?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
            amazon="https://amazon.co.uk/music/player/artists/B08C25Z298/jakob-prufer?marketplaceId=A1F83G8C2ARO7P&musicTerritory=GB&ref=dm_sh_SIXPPU0bCV1f5dE5sUpcdEioY"
          />
        </div>
      </div>
      <div className="contentContainer">
        <div className="projectContent">
          <div className="album">
            <div className="albumHead">
              <SetImg
                name={"2"}
                projectId={"jakobprufer"}
                ratio={"c11"}
                size={"m"}
              />
            </div>
            <div className="albumContent">
              <div>
                <div className="albumTitle">
                  <span className="smallH">20</span>
                  <span className="bigP"> (2018)</span>
                </div>
                <ProjectLinks
                  link1="https://www.youtube.com/watch?v=Uhf-ksr4NSA"
                  link1Title="Music Video"
                  spotify={
                    "https://open.spotify.com/album/573kIZBlS5XdHPHIq1yHQl?si=VeCdEjnOSLWTeXsRYHE-lA"
                  }
                  apple="https://music.apple.com/gb/album/20-single/1532355733"
                  youtube="https://music.youtube.com/playlist?list=OLAK5uy_mxutQbTO-a3I_atyCmJbnyR2WMrKFgnIA&feature=share"
                  soundcloud="https://soundcloud.com/jakobwochang/20a?si=67aa9823a7684166a4e5047f21c5f023&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                  amazon={
                    "https://amazon.co.uk/music/player/albums/B08JGC8SP1?marketplaceId=A1F83G8C2ARO7P&musicTerritory=GB&ref=dm_sh_azP8Nol1897yg5Q3kI8ABfcv3"
                  }
                />
                <div className="albumPlayers">
                  <div className="albumPlayer">
                    <div className="playerTitle">
                      Jakob Prufer - 20 (prod. pizzle)
                    </div>
                    <Player
                      source={"/Assets/jakobprufer/audio/20/20Master.mp3"}
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
                name={"3"}
                projectId={"jakobprufer"}
                ratio={"c11"}
                size={"m"}
              />
            </div>
            <div className="albumContent">
              <div>
                <div className="albumTitle">
                  <span className="smallH">Supasilva EP</span>
                  <span className="bigP"> (2021)</span>
                </div>
                <ProjectLinks
                  spotify={
                    "https://open.spotify.com/album/3okPDHvrVBgJvZTWAvgZcW?si=ROBsrwJRQ5-r9z_nkWif1Q"
                  }
                  apple="https://music.apple.com/gb/album/supasilva-ep/1551487294"
                  youtube="https://music.youtube.com/playlist?list=OLAK5uy_lCCjQX3T5RZXLUut4Lw8GOQ1k3z4WJt4o&feature=share"
                  soundcloud="https://soundcloud.com/nick-f-15416361/sets/supasilva-1?si=67aa9823a7684166a4e5047f21c5f023&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                  amazon={
                    "https://amazon.co.uk/music/player/albums/B08VGYB8KM?marketplaceId=A1F83G8C2ARO7P&musicTerritory=GB&ref=dm_sh_Us19Ge6iAxADA1MKMeRaTh0Ar"
                  }
                />
                <div className="albumPlayers">
                  <div className="albumPlayer">
                    <div className="playerTitle">
                      Nick01 - Lockdown (prod. pizzle)
                    </div>
                    <Player
                      source={
                        "/Assets/jakobprufer/audio/Supasilva/LockdownMaster.mp3"
                      }
                      showMute={false}
                      currentPlaying={currentPlaying}
                      setCurrentPlaying={setCurrentPlaying}
                      id={"1"}
                      muted={muted}
                      setMuted={setMuted}
                    />
                  </div>
                  <div className="albumPlayer">
                    <div className="playerTitle">
                      Nick01 & Jakob Prufer - Woah (prod. pizzle)
                    </div>
                    <Player
                      source={
                        "/Assets/jakobprufer/audio/Supasilva/WoahMaster.mp3"
                      }
                      showMute={false}
                      currentPlaying={currentPlaying}
                      setCurrentPlaying={setCurrentPlaying}
                      id={"2"}
                      muted={muted}
                      setMuted={setMuted}
                    />
                  </div>
                  <div className="albumPlayer">
                    <div className="playerTitle">
                      Jakob Prufer & Nick01 - Geht Nicht (prod. pizzle &
                      LowPass)
                    </div>
                    <Player
                      source={
                        "/Assets/jakobprufer/audio/Supasilva/GehtNichtMaster.mp3"
                      }
                      showMute={false}
                      currentPlaying={currentPlaying}
                      setCurrentPlaying={setCurrentPlaying}
                      id={"3"}
                    />
                  </div>
                  <div className="albumPlayer">
                    <div className="playerTitle">
                      Jakob Prufer & LowPass & Nick01 - Richmond Freestlye
                      (prod. LowPass)
                    </div>
                    <Player
                      source={
                        "/Assets/jakobprufer/audio/Supasilva/RichmondFreestyleMaster.mp3"
                      }
                      showMute={false}
                      currentPlaying={currentPlaying}
                      setCurrentPlaying={setCurrentPlaying}
                      id={"4"}
                      muted={muted}
                      setMuted={setMuted}
                    />
                  </div>
                  <div className="albumPlayer">
                    <div className="playerTitle">
                      Nick01 & LowPass - 1000 Feinde (prod. LowPass)
                    </div>
                    <Player
                      source={
                        "/Assets/jakobprufer/audio/Supasilva/1000FeindeMaster.mp3"
                      }
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
          <div className="album">
            <div className="albumHead">
              <SetImg
                name={"4"}
                projectId={"jakobprufer"}
                ratio={"c11"}
                size={"m"}
              />
            </div>
            <div className="albumContent">
              <div>
                <div className="albumTitle">
                  <span className="smallH">Mitternacht</span>
                  <span className="bigP"> (2022)</span>
                </div>
                <ProjectLinks
                  spotify={
                    "https://open.spotify.com/album/0E1ukzi1kLetdEx0lIlivy?si=7323bsisQreZQogLTky6TA"
                  }
                  apple="https://music.apple.com/gb/album/mitternacht-single/1642716753"
                  youtube="https://music.youtube.com/playlist?list=OLAK5uy_mhZ7vnHKh5kX-QUuLAdoJhqgQraaCi5AA&feature=share"
                  amazon={
                    "https://amazon.co.uk/music/player/albums/B0BCNYCZVJ?marketplaceId=A1F83G8C2ARO7P&musicTerritory=GB&ref=dm_sh_UhrETiFz0Dy1FetJphl3wGnL7"
                  }
                />
                <div className="albumPlayers">
                  <div className="albumPlayer">
                    <div className="playerTitle">
                      Toni Newski & Jakob Prufer - Mitternacht (prod. pizzle &
                      Wesson)
                    </div>
                    <Player
                      source={
                        "/Assets/jakobprufer/audio/Mitternacht/MitternachtMaster.mp3"
                      }
                      showMute={false}
                      currentPlaying={currentPlaying}
                      setCurrentPlaying={setCurrentPlaying}
                      id={"6"}
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
