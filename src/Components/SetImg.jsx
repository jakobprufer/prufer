import React, { useState, useEffect } from "react";
import projects from "../Data/Projects.json";

export default function SetImg({ projectId, name, size, ratio }) {
  const projectImages = projects.find((p) => p.projectId === projectId)?.images;
  const image = projectImages?.find((img) => img.name === name);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const getImage = async () => {
      try {
        const jpgImage = await import(
          `../../public/Assets/${projectId}/${size}/${projectId}${name}.jpg`
        );
        setImageUrl(jpgImage.default);
      } catch (error) {
        const pngImage = await import(
          `../../public/Assets/${projectId}/${size}/${projectId}${name}.png`
        );
        setImageUrl(pngImage.default);
      }
    };
    getImage();
  }, [projectId, name, size]);

  return imageUrl ? (
    <div className={ratio}>
      <img src={imageUrl} alt="" className="img" />
    </div>
  ) : null;
}
