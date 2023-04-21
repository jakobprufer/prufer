import { Fragment, useState } from "react";
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri";
import CustomImg from "../Components/CustomImg";
import useMeasure from "react-use-measure";
import { AnimatePresence, motion, animate } from "framer-motion";

//framer bits
const transition = { duration: 0.6, ease: [0.43, 0.12, 0.23, 0.96] };

let variants = {
  enter: ({ direction, width }) => ({
    x: direction * width,
  }),
  center: { x: 0 },
  exit: ({ direction, width }) => ({
    x: direction * -width,
  }),
};

export default function ImageSlide({ images, projectId, ratio }) {
  //image rotation button functionality
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // keep track of current and previous current image in a safe way and derive direction
  const [tuple, setTuple] = useState([null, current]);
  if (tuple[1] !== current) {
    setTuple([tuple[1], current]);
  }
  const previous = tuple[0];
  let direction =
    current == length - 1 && previous == 0
      ? -1
      : previous == length - 1 && current == 0
      ? 1
      : current > previous
      ? 1
      : -1;

  // adapt animations to slide container width
  const [ref, { width }] = useMeasure();

  return (
    <Fragment>
      <div className="slide">
        <div className="slideNav" onClick={prevSlide}>
          <RiArrowLeftLine className="socialIcon" />
        </div>
        <div className="slideContentOuter">
          <div className={`slideContent ${ratio}`} ref={ref}>
            <AnimatePresence custom={{ direction, width }}>
              <motion.div
                key={current}
                variants={variants}
                initial="enter"
                animate="center"
                transition={transition}
                exit="exit"
                custom={{ direction, width }}
                className="imgSlide"
              >
                {images[current].video == "auto" ? (
                  <video
                    className="imgSlide"
                    width="1920"
                    height="1080"
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                    loop
                  >
                    <source
                      src={`/Assets/${projectId}/${projectId}${images[current].name}.mp4#t=0.001`}
                      type="video/mp4"
                    />
                  </video>
                ) : images[current].video == "normal" ? (
                  <video
                    className="imgSlide"
                    width="1920"
                    height="1080"
                    preload="auto"
                    controls
                  >
                    <source
                      src={`/Assets/${projectId}/${projectId}${images[current].name}.mp4#t=0.001`}
                      type="video/mp4"
                    />
                  </video>
                ) : (
                  <CustomImg
                    name={images[current].name}
                    projectId={projectId}
                    className="imgSlide"
                    size={"l"}
                    alt={images[current].description}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="slideNav" onClick={nextSlide}>
          <RiArrowRightLine className="socialIcon" />
        </div>
      </div>
      <div className="captionArea">
        <div className="slideNavMobile" onClick={prevSlide}>
          <RiArrowLeftLine className="socialIcon" />
        </div>
        <div className="caption">
          {current + 1} / {length}
          {images[current].description ? ": " : null}
          {images[current].description}
        </div>
        <div className="slideNavMobile" onClick={nextSlide}>
          <RiArrowRightLine className="socialIcon" />
        </div>
      </div>
    </Fragment>
  );
}
