import React, { useState, useEffect, forwardRef, Ref } from "react";
import projects from "../Data/Projects.json";
import ProgressiveImage from "react-progressive-graceful-image";

export default function CustomImg({ projectId, name, className, size, alt }) {
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
          className={className}
          // style={{ background: loading ? "#F9FAFB" : "none" }}
        />
      )}
    </ProgressiveImage>
  ) : // <img src={imageUrl} alt={alt} className={className} />
  null;
}
