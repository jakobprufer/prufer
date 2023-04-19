import { useState, useRef, useEffect } from "react";
import { Link as LinkS } from "react-scroll";
import { RiArrowUpLine } from "react-icons/ri";

export default function ProgressIndicator({
  activeSection,
  scrollPosition,
  sections,
  clickedReference,
  showReturner,
}) {
  // attach progress indicator
  const [attach, setAttach] = useState(false);
  // const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  // const handleScroll = () => {
  //   if (ref.current) {
  //     setSticky(ref.current.getBoundingClientRect().top <= 0);
  //   }
  // };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      attachHeader();
    });
    return () => {
      window.removeEventListener("scroll", () => {
        attachHeader();
      });
    };
  }, []);
  const attachHeader = () => {
    //here is the value that must change if filterheader height changes
    if (ref.current.getBoundingClientRect().top <= 131) {
      setAttach(true);
    } else {
      setAttach(false);
    }
  };

  return (
    <div className="progressIndicator" ref={ref}>
      <div className={`stickyWrapper ${attach ? "sticky" : null}`}>
        <div className={`stickyInner`}>
          <div className="progressIndicatorInner">
            {sections.map((section, index) => (
              <LinkS
                to={section.sectionId}
                smooth={true}
                duration={800}
                offset={-120}
                key={index}
                className={`progressLog ${
                  activeSection == section.sectionId && "activeSection"
                }`}
              >
                {activeSection == section.sectionId ? (
                  <div
                    className="progressLogBar"
                    style={{ height: `${scrollPosition}%` }}
                  ></div>
                ) : null}
                <div className="progressText">
                  <span className="progressNum">{section.progressNum}</span>
                  <span className="progressExt">
                    &nbsp;- {section.progressExt}
                  </span>
                </div>
              </LinkS>
            ))}
          </div>
        </div>
        <LinkS
          className={`sqButtonSmall returner rounded50 ${
            showReturner ? null : "hidden"
          }`}
          to={clickedReference}
          smooth={true}
          duration={800}
          offset={-120}
        >
          <RiArrowUpLine />
        </LinkS>
      </div>
    </div>
  );
}
