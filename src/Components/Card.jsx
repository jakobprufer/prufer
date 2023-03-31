import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SetImg from "./SetImg";

export default function Card({ projects }) {
  return (
    <motion.div layout className={`card ${projects.layout}`}>
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
          {projects.cardLayout?.includes("cardStd") == true && (
            <div className={projects.cardGrid}>
              {projects.cardImages.map((imageName) => {
                const image = projects.images.find((i) => i.name === imageName);
                return (
                  <SetImg
                    key={image.name}
                    name={image.name}
                    projectId={projects.projectId}
                    ratio={image.ratio}
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
