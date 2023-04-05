import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SetImg from "./SetImg";
import CustomImg from "./CustomImg";

export default function Card({ projects }) {
  return (
    <motion.div layout className={`card`}>
      {projects.cardLayout == "Grid" ? (
        // Standard Card Layout
        <Link
          className="cardContainer"
          to={`/${projects.cat}/${projects.projectId}`}
        >
          <div className="cardHead">
            <div className="smallH">{projects.title}</div>
            {/* <div className="description">{projects.description}</div> */}
            <div className="cardData">
              <span className="cardCategory">{projects.displayedCat}</span>,{" "}
              <span className="cardYear">
                {projects.date.toString().substring(0, 4)}
              </span>
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
      ) : (
        // Custom Card Layout
        <Link
          className="cardContainer"
          to={`/${projects.cat}/${projects.projectId}`}
        >
          <div className="cardHead">
            <div className="smallH">{projects.title}</div>
            {/* <div className="description">{projects.description}</div> */}
            <div className="cardData">
              <span className="cardCategory">{projects.displayedCat}</span>,{" "}
              <span className="cardYear">
                {projects.date.toString().substring(0, 4)}
              </span>
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
              {/* <CustomImg
                projectId={"maux"}
                name={"1"}
                size={"s"}
                alt=""
                className="mauxImg1 hoverScale"
              />
              <CustomImg
                projectId={"maux"}
                name={"2"}
                size={"s"}
                className="mauxImg2 hoverScale drop"
              />
              <CustomImg
                projectId={"maux"}
                name={"3"}
                size={"s"}
                className="mauxImg3 hoverScale"
              />
              <CustomImg
                projectId={"maux"}
                name={"4"}
                size={"s"}
                className="mauxImg4 hoverScale drop"
              />
              <CustomImg
                projectId={"maux"}
                name={"5"}
                size={"s"}
                className="mauxImg5 hoverScale"
              />
              <CustomImg
                projectId={"maux"}
                name={"6"}
                size={"s"}
                className="mauxImg6 drop"
              />
              <CustomImg
                projectId={"maux"}
                name={"7"}
                size={"s"}
                className="mauxImg7"
              /> */}
            </div>
          </div>
        </Link>
      )}
    </motion.div>
  );
}
