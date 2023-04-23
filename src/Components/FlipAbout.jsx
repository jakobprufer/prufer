import React, { useState, useEffect } from "react";

const textMap = {
  1: "Things I've made",
  2: "Things I've contributed to",
  3: "Things that inspire me",
  4: "Things I'm proud of",
};

const FlipAbout = () => {
  const [textState, setTextState] = useState(1);

  const handleMouseLeave = () => {
    let timeout = setTimeout(() => {
      setTextState((prevState) => {
        if (prevState === 4) {
          return 1;
        } else {
          return prevState + 1;
        }
      });
    }, 1000);

    return () => clearTimeout(timeout);
  };

  return (
    <div className="headerLink flipAbout" onMouseLeave={handleMouseLeave}>
      {/* <div>{textMap[textState]}</div> */}
      <div>about me</div>
    </div>
  );
};

export default FlipAbout;
