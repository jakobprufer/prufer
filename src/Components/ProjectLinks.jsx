import {
  RiSpotifyFill,
  RiAppleFill,
  RiSoundcloudFill,
  RiYoutubeFill,
  RiAmazonFill,
  RiInstagramFill,
} from "react-icons/ri";

export default function ProjectLinks({
  link1,
  link1Title,
  link2,
  link2Title,
  spotify,
  apple,
  youtube,
  soundcloud,
  amazon,
  instagram,
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
      {instagram ? (
        <a
          href={instagram}
          target="_blank"
          rel="noreferrer"
          className="sqButton"
        >
          <RiInstagramFill className="socialIcon" />
        </a>
      ) : null}
      {link1 ? (
        <a href={link1} target="_blank" rel="noreferrer" className="button">
          {link1Title}
        </a>
      ) : null}
      {link2 ? (
        <a href={link2} target="_blank" rel="noreferrer" className="button">
          {link2Title}
        </a>
      ) : null}
    </div>
  );
}
