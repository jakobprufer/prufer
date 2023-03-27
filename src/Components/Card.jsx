import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Img from "./Img";

export default function Card({ projects }) {
  return (
    <motion.div layout className={`card ${projects.layout}`}>
      <Link
        className="cardContainer"
        to={`/${projects.cat}/${projects.projectId}`}
      >
        <div className="cardHead">
          <div className="title-big">{projects.title}</div>
          {/* <div className="description">{projects.description}</div> */}
          <div className="cardData">
            <span className="cardCategory">{projects.displayedCat}</span>,{" "}
            <span className="cardYear">
              {projects.date.toString().substring(0, 4)}
            </span>
          </div>
        </div>
        <div className="cardContent">
          {projects.cardLayout?.includes("cardStd") == true && (
            <div className={projects.cardGrid}>
              {projects.cardImages.map((imageName) => {
                const image = projects.images.find((i) => i.name === imageName);
                return (
                  <Img
                    key={image.name}
                    name={image.name}
                    projectId={projects.projectId}
                    size={"m"}
                  />
                );
              })}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
