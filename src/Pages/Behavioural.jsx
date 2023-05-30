import { useRef, useEffect } from "react";
import useMeasure from "react-use-measure";
import CustomImg from "../Components/CustomImg";
import ImageSlide from "../Components/ImageSlide";
import ProjectLinks from "../Components/ProjectLinks";
import SetImg from "../Components/SetImg";
import projects from "../Data/Projects.json";

const annotationsData = [
  {
    id: "1",
    top: "0.06",
    left: "0.9",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo neque aliquid numquam. Molestiae ut tenetur enim deleniti placeat sunt ullam sit, tempore incidunt perspiciatis quae! Incidunt doloremque perspiciatis nemo corrupti",
  },
  {
    id: "2",
    top: "0.1",
    left: "0.45",
    text: "Test",
  },
  {
    id: "3",
    top: "0.2",
    left: "0.8",
    text: "aölsdkf asdölfkj adölskf adlk aslkdfjaöskld asdfkjaf ",
  },
  {
    id: "4",
    top: "0.3",
    left: "0.5",
    text: "aölsdkf asdölfkj adölskf adlk aslkdfjaöskld asdfkjaf ",
  },
];

export default function Behavioural() {
  //get current project from data
  const current = projects.find((obj) => obj.projectId === "behavioural");

  //responsive labels
  const [measureRef, { height }] = useMeasure();

  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const linesRef = useRef(null);

  useEffect(() => {
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

    drawLines();
    window.addEventListener("resize", drawLines);

    return () => {
      window.removeEventListener("resize", drawLines);
    };
  }, []);

  return (
    <div className={`project ${current.projectId}`}>
      <div className="projectHead">
        <div className="projectInfo">
          <div>
            <div className="bigH">Behavioural Design Case</div>
            <div className="bigP">
              All design, at its core, is intrinsically intertwined with human
              psychology. Often, cause and effect in this relationship are
              established through intuition or trial and error. Behavioural
              design means letting academic insights from psychology and
              behavioural science guide applied design practice. With my
              background in psychology and user experience design, I am equipped
              to bridge this connection. In this context, I would like to
              present an example that highlights various principles of
              behavioral design.
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
          </div>
        </div>
      </div>
      <div className="projectContent">
        <div className="annotatedSection" ref={sectionRef}>
          <div className="annotatedImgContOuter mtm" ref={containerRef}>
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
                  className="label"
                  style={{
                    top: `${height * parseFloat(annotation.top)}px`,
                    left: `${parseFloat(annotation.left) * 100}%`,
                  }}
                  data-x={parseFloat(annotation.left)}
                  data-y={parseFloat(annotation.top)}
                ></div>
              ))}
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
              height: "200%",
            }}
          ></svg>
          <div className="annotatedLabels">
            {annotationsData.map((annotation) => (
              <div
                key={annotation.id}
                id={`annotation${annotation.id}`}
                className="annotation bigP"
                // style={{
                //   marginTop: `${height * parseFloat(annotation.top) + 20}px`,
                // }}
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
