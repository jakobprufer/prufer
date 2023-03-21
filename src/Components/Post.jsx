import { motion } from "framer-motion";
import React from "react";

export default function Post({ projects }) {
  return (
    <motion.div layout className="post">
      <div className="title-big">{projects.title}</div>
      <div>{projects.short}</div>
    </motion.div>
  );
}
