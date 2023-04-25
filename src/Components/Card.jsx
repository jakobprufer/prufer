import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import SetImg from "./SetImg";
import CustomImg from "./CustomImg";
import HoverVideoPlayer from "react-hover-video-player";
import { useRef } from "react";

export default function Card({ projects }) {
  const hoverVideoRef = useRef();

  return (
    <AnimatePresence>
      <motion.div layout className={`card`}>
        {projects.cardLayout == "Grid" ? (
          // Standard Card Layout
          <Link
            className="cardContainer"
            to={`/${projects.cat[0]}/${projects.projectId}`}
          >
            <div className="cardHead">
              <div className="smallH">{projects.title}</div>
              {/* <div className="description">{projects.description}</div> */}
              <div className="cardData">
                <span className="cardCategory">{projects.displayedCat}</span>,{" "}
                <span className="cardYear">
                  {projects.date.toString().substring(0, 4)}{" "}
                </span>
                {projects.displayedTools ? (
                  <span className="cardTools">({projects.displayedTools})</span>
                ) : null}
              </div>
            </div>
            <div className="cardContent">
              {projects.cardLayout?.includes("Grid") == true && (
                <div className={projects.cardGrid}>
                  {projects.cardImages.map((imageName) => {
                    const image =
                      projects.images.find((i) => i.name == imageName) ||
                      projects.customImages.find((i) => i.name == imageName);
                    return (
                      <SetImg
                        key={image.name}
                        name={image.name}
                        projectId={projects.projectId}
                        ratio={image.ratio}
                        size={projects.cardGrid.includes("g1") ? "m" : "s"}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          </Link>
        ) : projects.cardLayout == "Custom" ? (
          // Custom Card Layout
          <Link
            className="cardContainer"
            to={`/${projects.cat[0]}/${projects.projectId}`}
          >
            <div className="cardHead">
              <div className="smallH">{projects.title}</div>
              {/* <div className="description">{projects.description}</div> */}
              <div className="cardData">
                <span className="cardCategory">{projects.displayedCat}</span>,{" "}
                <span className="cardYear">
                  {projects.date.toString().substring(0, 4)}
                </span>{" "}
                {projects.displayedTools ? (
                  <span className="cardTools">({projects.displayedTools})</span>
                ) : null}
              </div>
            </div>
            <div
              className={`cardContent ${projects.projectId}${projects.cardLayout}`}
            >
              <div className={`c32 ${projects.cardBackground}`}>
                {projects.cardImages.map((imageName) => {
                  const image =
                    projects.images.find((i) => i.name == imageName) ||
                    projects.customImages.find((i) => i.name == imageName);
                  return (
                    <CustomImg
                      key={image.name}
                      name={image.name}
                      projectId={projects.projectId}
                      size={image.cardSize}
                      className={`customCardImg custom${image.name} ${image.styling}`}
                    />
                  );
                })}
              </div>
            </div>
          </Link>
        ) : projects.cardLayout == "Text" ? (
          //Text layout
          <Link
            className="cardContainer"
            to={`/${projects.cat[0]}/${projects.projectId}`}
          >
            <div className="cardHead">
              <div className="smallH"></div>
              {/* <div className="description">{projects.description}</div> */}
              <div className="cardData">
                <span className="cardCategory">{projects.displayedCat}</span>,{" "}
                <span className="cardYear">
                  {projects.date.toString().substring(0, 4)}
                </span>{" "}
                {projects.displayedTools ? (
                  <span className="cardTools">({projects.displayedTools})</span>
                ) : null}
              </div>
            </div>
            <div className={`cardContent`}>
              <div className={`c32 ${projects.cardBackground}`}>
                <div className={`textCard ${projects.cardTextColor}`}>
                  <div className="textCardHead">
                    <div className="textCardH sentient uppercase">
                      {projects.title}
                    </div>
                    <div className="medSub">{projects.subtitle}</div>
                  </div>
                  <div>{projects.published}</div>
                </div>
              </div>
            </div>
          </Link>
        ) : projects.cardLayout == "Video" ? (
          // Video layout
          <Link
            className="cardContainer"
            ref={hoverVideoRef}
            to={`/${projects.cat[0]}/${projects.projectId}`}
          >
            <div className="cardHead">
              <div className="smallH">{projects.title}</div>
              {/* <div className="description">{projects.description}</div> */}
              <div className="cardData">
                <span className="cardCategory">{projects.displayedCat}</span>,{" "}
                <span className="cardYear">
                  {projects.date.toString().substring(0, 4)}{" "}
                </span>
                {projects.displayedTools ? (
                  <span className="cardTools">({projects.displayedTools})</span>
                ) : null}
              </div>
            </div>
            <div className="cardContent">
              <HoverVideoPlayer
                videoSrc={`/Assets/${projects.projectId}/${projects.projectId}${projects.cardVideo}.mp4#t=0.001`}
                pausedOverlay={
                  <img
                    src={`/Assets/${projects.projectId}/m/${projects.cardThumb}`}
                    alt=""
                    style={{
                      // Make the image expand to cover the video's dimensions
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                }
                loadingOverlay={
                  <div className="loading-overlay">
                    <div className="loading-spinner" />
                  </div>
                }
                loadingStateTimeout={1000}
                hoverTarget={hoverVideoRef}
                restartOnPaused={true}
                style={{
                  width: "100%",
                  paddingTop: "66.67%",
                }}
                sizingMode="container"
              />
            </div>
          </Link>
        ) : null}
      </motion.div>
    </AnimatePresence>
  );
}
