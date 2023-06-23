import React, { useState, useEffect } from "react";
import projects from "../Data/Projects.json";
import ProgressiveImage from "react-progressive-graceful-image";

export default function SetImg({ projectId, name, size, ratio, alt }) {
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
      {/* <img src={imageUrl} alt={alt} className="img" /> */}
      <ProgressiveImage
        delay={500}
        src={imageUrl}
        placeholder={imageUrl}
        rootMargin="0% 0% 0%"
        threshold={[1]}
      >
        {(src, loading) => (
          <img
            src={src}
            alt="an image"
            className="img"
            // style={{ background: loading ? "#F9FAFB" : "none" }}
          />
        )}
      </ProgressiveImage>
    </div>
  ) : null;
}
