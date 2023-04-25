import { useState, useEffect, useRef, Fragment } from "react";
import {
  RiVolumeUpFill,
  RiVolumeMuteFill,
  RiDownloadLine,
} from "react-icons/ri";
import { SquareLoader } from "react-spinners";

function useAudio(source, barRef, id, setCurrentPlaying, muted) {
  const audioRef = useRef(null);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [isSeeking, setSeeking] = useState(false);
  // activate for normal mute function
  // const [muted, setMuted] = useState(false);

  // when source changes -> set loading state
  useEffect(() => {
    setLoading(true);
  }, [source]);

  return [
    <audio
      src={source}
      // we don't want to actually display the
      // browser's default element
      hidden
      ref={audioRef}
      onLoadedData={() => {
        setLoading(false);
        setDuration(audioRef.current.duration);
      }}
      onSeeking={() => setSeeking(true)}
      onSeeked={() => setSeeking(false)}
      muted={muted}
      onTimeUpdate={() => {
        // on update, retrieve currentTime from ref,
        // store it in state
        setCurrentTime(audioRef.current.currentTime);
      }}
      onEnded={() => {
        setPlaying(false);
      }}
    />,
    {
      currentTime,
      muted,
      duration,
      playing,
      isSeeking,
      isLoading,
      progress: (currentTime / duration) * 100,
      setTime: (seconds) => {
        audioRef.current.currentTime = seconds;
      },
      togglePlaying: () => {
        // there are nicer ways to handle
        // 'play' and 'pause'. The thing is that Safari
        // browsers only allow you to change audio's
        // playback-state in direct response to an event
        // https://medium.com/@curtisrobinson/how-to-auto-play-audio-in-safari-with-javascript-21d50b0a2765
        if (playing === true) {
          audioRef.current.pause();
          setPlaying(false);
        }
        if (playing === false) {
          audioRef.current.play();
          setPlaying(true);
        }
        setCurrentPlaying(id);
      },
      // activate for normal mute function
      // toggleMute: () => {
      //   setMuted(!muted);
      // },
      updateTime: (e) => {
        let width = barRef.current.clientWidth;
        const offset = e.nativeEvent.offsetX;
        const newProgress = offset / width;

        audioRef.current.currentTime = newProgress * duration;
      },
      stopPlaying: () => {
        setPlaying(false);
        audioRef.current.pause();
        setCurrentTime(audioRef.current.currentTime);
        audioRef.current.currentTime = 0;
      },
    },
  ];
}

export default function Player({
  showMute,
  source,
  currentPlaying,
  setCurrentPlaying,
  id,
  setHovered,
  title,
  selectedCategory,
  muted,
  setMuted,
  download,
}) {
  const barRef = useRef();
  const [audioElement, audioProps] = useAudio(
    source,
    barRef,
    id,
    setCurrentPlaying,
    muted
  );

  //stop player if another one is started
  useEffect(() => {
    if (currentPlaying != id) {
      audioProps.stopPlaying();
    }
  }, [currentPlaying]);

  //stop player if category is changed
  useEffect(() => {
    audioProps.stopPlaying();
  }, [selectedCategory]);

  //create download
  const filePath = `${window.location.origin}${source}`;
  const handleDownload = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div>
      <div className="pCont" onMouseEnter={() => setHovered(id)}>
        {audioElement}

        <div
          className={`pPlayButton sqButton ${audioProps.playing && "playing"}`}
          onClick={audioProps.togglePlaying}
        >
          {/* possible implementation of loading spinner on loading and seeking */}
          {/* {audioProps.isLoading ? (
          <SquareLoader size={16} />
        ) : audioProps.isSeeking ? (
          <SquareLoader size={16} />
        ) : (
          <div className="pPlayIcon"></div>
        )} */}
          <div className="pPlayIcon"></div>
          {/* <SquareLoader size={16} /> */}
        </div>
        <div className="pBar" onClick={audioProps.updateTime} ref={barRef}>
          <div
            className="pBarProgress"
            style={{ width: `${audioProps.progress}%` }}
          ></div>
          <div className="pLabel">{title}</div>
        </div>
        {download && (
          <div onClick={() => handleDownload(filePath)} className="sqButton">
            <RiDownloadLine className="socialIcon" />
          </div>
        )}
        {/* normal mute function without global button */}
        {/* {showMute && (
          <div className="pMuteButton" onClick={audioProps.toggleMute}>
            {audioProps.muted ? (
              <RiVolumeMuteFill className="pMuteIcon" />
            ) : (
              <RiVolumeUpFill className="pMuteIcon" />
            )}
          </div>
        )} */}
      </div>
    </div>
  );
}
