import { Fragment } from "react";
import { motion, layout } from "framer-motion";
import Post from "../Components/Post";
import Player from "../Components/Player";

export default function Overview({ sortedData }) {
  return (
    <Fragment>
      <motion.div layout className="overviewGrid">
        <motion.div layout className="post">
          <div className="postHead">
            <div className="title-small">East Cost Shots</div>
          </div>
          <div className="g2">
            <div className="c32">
              <img className="img" src="/Assets/nyc/1s.jpg" alt="" />
            </div>
            <div className="c32">
              <img className="img" src="/Assets/nyc/2s.jpg" alt="" />
            </div>
            <div className="c32">
              <img className="img" src="/Assets/nyc/18s.jpg" alt="" />
            </div>
            <div className="c32">
              <img className="img" src="/Assets/nyc/4s.jpg" alt="" />
            </div>
            <div className="infoOverlay">
              <div className="description">
                Observations from solo walks through New York City, Philadelphia
                and Richmond.
              </div>
              <div className="subtitle"> photo, 2015, 200 est. reach</div>
            </div>
          </div>
        </motion.div>
        <motion.div layout className="post">
          <div className="postHead">
            <div className="title-small">Tate</div>
          </div>
          <div className="c32">
            <img className="img" src="/Assets/cardioguard/Beauty2.jpg" alt="" />
            <div className="infoOverlay">
              <div className="description">
                English hip hop project focusing on beautiful textures and
                relatable emotions.
              </div>
              <div className="subtitle"> music, since 2023, 10k est reach</div>
            </div>
          </div>
        </motion.div>
        {sortedData.map((sorted) => {
          return <Post key={sorted.id} projects={sorted} />;
        })}
      </motion.div>
    </Fragment>
  );
}
