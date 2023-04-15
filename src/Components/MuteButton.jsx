import { RiVolumeUpFill, RiVolumeMuteFill } from "react-icons/ri";

export default function MuteButton({ muted, setMuted }) {
  return (
    <div
      className={`sqButton rounded50 ${muted ? "muted" : null}`}
      id="muteButton"
      onClick={() => setMuted(!muted)}
    >
      {muted ? (
        <RiVolumeMuteFill className="pMuteIcon" />
      ) : (
        <RiVolumeUpFill className="pMuteIcon" />
      )}
    </div>
  );
}
