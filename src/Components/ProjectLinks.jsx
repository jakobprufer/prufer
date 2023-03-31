import {
  RiSpotifyFill,
  RiAppleFill,
  RiSoundcloudFill,
  RiYoutubeFill,
  RiAmazonFill,
} from "react-icons/ri";

export default function ProjectLinks({
  video1,
  video1Title,
  video2,
  video2Title,
  spotify,
  apple,
  youtube,
  soundcloud,
  amazon,
}) {
  return (
    <div className="projectLinks">
      {spotify ? (
        <a href={spotify} target="_blank" rel="noreferrer" className="sqButton">
          <RiSpotifyFill className="socialIcon" />
        </a>
      ) : null}
      {apple ? (
        <a href={apple} target="_blank" rel="noreferrer" className="sqButton">
          <RiAppleFill className="socialIcon" />
        </a>
      ) : null}
      {youtube ? (
        <a href={youtube} target="_blank" rel="noreferrer" className="sqButton">
          <RiYoutubeFill className="socialIcon" />
        </a>
      ) : null}
      {soundcloud ? (
        <a
          href={soundcloud}
          target="_blank"
          rel="noreferrer"
          className="sqButton"
        >
          <RiSoundcloudFill className="socialIcon" />
        </a>
      ) : null}
      {amazon ? (
        <a href={amazon} target="_blank" rel="noreferrer" className="sqButton">
          <RiAmazonFill className="socialIcon" />
        </a>
      ) : null}
      {video1 ? (
        <a href={video1} target="_blank" rel="noreferrer" className="button">
          {video1Title}
        </a>
      ) : null}
      {video2 ? (
        <a href={video2} target="_blank" rel="noreferrer" className="button">
          {video2Title}
        </a>
      ) : null}
    </div>
  );
}
