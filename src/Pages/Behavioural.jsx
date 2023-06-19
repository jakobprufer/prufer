import { useRef, useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import CustomImg from "../Components/CustomImg";
import ImageSlide from "../Components/ImageSlide";
import ProjectLinks from "../Components/ProjectLinks";
import SetImg from "../Components/SetImg";
import projects from "../Data/Projects.json";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { RiAddCircleFill } from "react-icons/ri";

const annotationsData = [
  {
    id: "1",
    top: "0.06",
    left: "0.9",
    text: "GO+ badge with salient colour gradient used consistently where subscription-exclusive functionality is to be indicated",
    mt: true,
  },
  {
    id: "2",
    top: "0.1",
    left: "0.45",
    text: (
      <>
        Gaze cueing/attention direction: The woman is looking towards the main
        message and we are evolutionary hardwired to follow her gaze as seen in
        my <Link to="/design/faceperception">BSc thesis on gaze cueing</Link>.
        The picture also leverages the attractiveness bias, as aesthetically
        attractive faces tend to gain automatic attention and subconsciously
        associated with positive traits.
      </>
    ),
  },
  {
    id: "3",
    top: "0.12",
    left: "0.9",
    text: "Mere exposure effect: Using lyrics from a famous song can make the slogan be perceived more positively due to the mere familiarity the phrase and its melody, while transporting the message in a compact format.",
  },
  {
    id: "4",
    top: "0.18",
    left: "0.8",
    text: "Colour: Subscribe button is in brand orange to stand out - orange also associated with creativity, excitement, and enthusiasm; warm colours are more effective in calls to action",
  },
  {
    id: "5",
    top: "0.18",
    left: "0.5",
    text: "Emotion in image: happy facial expression connects positive association with being able to listen offline in the underground. The picture is processed more quickly than text and conveys emotion rapidly.",
  },
  {
    id: "6",
    top: "0.22",
    left: "0.5",
    text: "Urgency: The progress bar running out (again using the colour gradient to create a positive association for GO+) and the hourglass icon create a sense of urgency.",
  },
  {
    id: "7",
    top: "0.42",
    left: "0.2",
    text: "Loss aversion: Reminding users that some tracks they listen to with the trial will become unavailable without GO+. Avoiding losses is a stronger motivator than achieving new gains.",
  },
  {
    id: "8",
    top: "0.58",
    left: "0.15",
    text: "Visual primacy: Highlighting benifits of GO+ and creating positive association with checkmark icons.",
  },
  {
    id: "9",
    top: "0.73",
    left: "0.15",
    text: "Default: filled subscribe button signifies this action as the recommended default, while the dismiss button is subdued.",
  },
  {
    id: "10",
    top: "0.73",
    left: "0.9",
    text: "Positive Reinforcement: After processing the subscription there should be a congratulations screen highlighting again the benefits of the action.",
  },
  {
    id: "11",
    top: "0.86",
    left: "0.8",
    text: "Social proof/peer motivation: Showing that close peers or favourite artists of the user already use GO+ is a strong tool to encourage subscribing, not least because of social comparison. This could even be higher up on the page.",
  },
];

export default function Behavioural() {
  //get current project from data
  const current = projects.find((obj) => obj.projectId === "behavioural");

  //responsive labels
  const [measureRef, { height }] = useMeasure();
  const [annotationRects, setAnnotationRects] = useState({});

  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const linesRef = useRef(null);

  useEffect(() => {
    //drawing connecting lines
    const drawLines = () => {
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();

      const scrollX = window.scrollX || window.pageXOffset;
      const scrollY = window.scrollY || window.pageYOffset;

      linesRef.current.innerHTML = "";

      annotationsData.forEach((annotation) => {
        const annotationId = annotation.id;

        // Select the corresponding annotation using querySelector
        const annotationElement = document.querySelector(
          `#annotation${annotationId}`
        );

        // Get the bounding rect for the annotation
        const annotationRect = annotationElement.getBoundingClientRect();

        const pointX = parseFloat(annotation.left);
        const pointY = parseFloat(annotation.top);

        const startX =
          containerRect.left + scrollX + containerRect.width * pointX;
        const startY =
          containerRect.top + scrollY + containerRect.height * pointY;
        const endX = annotationRect.left - 8 + scrollX;
        const endY = annotationRect.top + 12 + scrollY;

        const line = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "line"
        );
        line.setAttribute("x1", startX);
        line.setAttribute("y1", startY);
        line.setAttribute("x2", endX);
        line.setAttribute("y2", endY);
        line.setAttribute("stroke", "lightgrey");
        line.setAttribute("stroke-width", "3");

        document.getElementById("lines-container").appendChild(line);
      });
    };

    const image = document.querySelector(".annotatedImg");
    image.onload = drawLines;

    drawLines();
    window.addEventListener("resize", drawLines);

    return () => {
      window.removeEventListener("resize", drawLines);
    };
  }, []);

  //mobile label overlays
  const [clickedLabel, setClickedLabel] = useState(null);
  const [clickedLabelId, setClickedLabelId] = useState(null);
  const [isDivOpen, setIsDivOpen] = useState(false);
  const mobileAnnotationRef = useRef(null);

  useEffect(() => {
    const handleClickOutsideDiv = (event) => {
      if (isDivOpen && !mobileAnnotationRef.current.contains(event.target)) {
        setIsDivOpen(false);
        setClickedLabel(null);
        setClickedLabelId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideDiv);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideDiv);
    };
  }, [isDivOpen]);

  return (
    <div className={`project ${current.projectId}`}>
      <div className="projectHead">
        <div className="projectInfo">
          <div>
            <div className="bigH">Behavioural Design Case</div>
            <div className="bigP">
              All design, at its core, is intrinsically intertwined with human
              psychology. Behavioural design means specifically letting academic
              insights from psychology and behavioural science guide applied
              design practice. With my background in both psychology and user
              experience design, I am equipped to bridge this connection. In
              this context, I would like to present an example that highlights
              various principles of behavioral design.
            </div>
            <div className="bigP">
              This brief for this case was to manipulate the home screen of the
              SoundCloud app (read more about SoundCloud{" "}
              <a
                href="https://en.wikipedia.org/wiki/SoundCloud"
                target="_blank"
              >
                here
              </a>
              ) in a way that encourages users to sign up for the Go+
              subscription after their trial month has ended. The work is not
              affiliated with the company and just serves as a hypothetical
              showcase.
            </div>
            <div className="bigP mobileOnly">
              Press the "+" icons to find out more about the design:
            </div>
          </div>
        </div>
      </div>
      <div className="projectContent">
        <div className="annotatedSection" ref={sectionRef}>
          <div className="annotatedImgContOuter mtm marginSpaceBottom">
            <div ref={containerRef}>
              <div className="annotatedImgCont" ref={measureRef}>
                <img
                  src="/Assets/behavioural/soundcloud.jpg"
                  alt=""
                  className="annotatedImg bigdrop"
                />
                {annotationsData.map((annotation) => (
                  <div
                    key={annotation.id}
                    id={annotation.id}
                    className="labelDesktop"
                    style={{
                      top: `${height * parseFloat(annotation.top)}px`,
                      left: `${parseFloat(annotation.left) * 100}%`,
                    }}
                    data-x={parseFloat(annotation.left)}
                    data-y={parseFloat(annotation.top)}
                  ></div>
                ))}
                {annotationsData.map((annotation) => (
                  <RiAddCircleFill
                    key={annotation.id}
                    id={annotation.id}
                    className={`labelMobile ${
                      clickedLabelId == annotation.id
                        ? "labelMobileClicked"
                        : null
                    }`}
                    onClick={() => {
                      setClickedLabel(annotation);
                      setClickedLabelId(annotation.id);
                      setIsDivOpen(true);
                    }}
                    style={{
                      top: `${height * parseFloat(annotation.top)}px`,
                      left: `${parseFloat(annotation.left) * 100}%`,
                    }}
                    data-x={parseFloat(annotation.left)}
                    data-y={parseFloat(annotation.top)}
                  />
                ))}
                {isDivOpen && clickedLabel && (
                  <AnimatePresence>
                    <motion.div
                      className="mobileAnnotation bigP drop"
                      ref={mobileAnnotationRef}
                      style={{
                        top: `${height * parseFloat(clickedLabel.top) + 20}px`,
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {clickedLabel.text}
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            </div>
          </div>
          <svg
            id="lines-container"
            ref={linesRef}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "300%",
            }}
          ></svg>
          <div className="annotationsCont">
            {annotationsData.map((annotation, index) => (
              <div
                key={annotation.id}
                id={`annotation${annotation.id}`}
                className="annotation bigP"
                style={
                  annotation.mt != null
                    ? annotation.id > 1
                      ? {
                          marginTop: `${annotation.mt}px`,
                        }
                      : {
                          marginTop: `${
                            height * parseFloat(annotation.top) + 20
                          }px`,
                        }
                    : null
                }
                // {annotation.mt == true ? (annotation.id > 0 ?
                //     marginTop: `${height * parseFloat(annotation.top) + 20}px` : null
                //     ) : null}}
              >
                {annotation.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
