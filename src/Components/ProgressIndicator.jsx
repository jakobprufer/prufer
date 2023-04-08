import { useState, useRef, useEffect } from "react";
import { Link as LinkS } from "react-scroll";

export default function ProgressIndicator({ activeSection, scrollPosition }) {
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
            <LinkS
              to="section0"
              smooth={true}
              duration={800}
              offset={-120}
              className={`progressLog ${
                activeSection == "section0" && "activeSection"
              }`}
            >
              {activeSection == "section0" ? (
                <div
                  className="progressLogBar"
                  style={{ height: `${scrollPosition}%` }}
                ></div>
              ) : null}
              <div className="progressText">
                <span className="progressNum">0</span>
                <span className="progressExt">&nbsp;- Brief</span>
              </div>
            </LinkS>
            <LinkS
              to="section1"
              smooth={true}
              duration={800}
              offset={-120}
              className={`progressLog ${
                activeSection == "section1" && "activeSection"
              }`}
            >
              {activeSection == "section1" ? (
                <div
                  className="progressLogBar"
                  style={{ height: `${scrollPosition}%` }}
                ></div>
              ) : null}
              <div className="progressText">
                <span className="progressNum">1</span>
                <span className="progressExt">&nbsp;- Research</span>
              </div>
            </LinkS>
            <LinkS
              to="section2"
              smooth={true}
              duration={800}
              offset={-120}
              className={`progressLog ${
                activeSection == "section2" && "activeSection"
              }`}
            >
              {activeSection == "section2" ? (
                <div
                  className="progressLogBar"
                  style={{ height: `${scrollPosition}%` }}
                ></div>
              ) : null}
              <div className="progressText">
                <span className="progressNum">2</span>
                <span className="progressExt">&nbsp;- Conceptualization</span>
              </div>
            </LinkS>
            <LinkS
              to="section3"
              smooth={true}
              duration={800}
              offset={-120}
              className={`progressLog ${
                activeSection == "section3" && "activeSection"
              }`}
            >
              {activeSection == "section3" ? (
                <div
                  className="progressLogBar"
                  style={{ height: `${scrollPosition}%` }}
                ></div>
              ) : null}
              <div className="progressText">
                <span className="progressNum">3</span>
                <span className="progressExt">&nbsp;- Ideation</span>
              </div>
            </LinkS>
            <LinkS
              to="section4"
              smooth={true}
              duration={800}
              offset={-120}
              className={`progressLog ${
                activeSection == "section4" && "activeSection"
              }`}
            >
              {activeSection == "section4" ? (
                <div
                  className="progressLogBar"
                  style={{ height: `${scrollPosition}%` }}
                ></div>
              ) : null}
              <div className="progressText">
                <span className="progressNum">4</span>
                <span className="progressExt">&nbsp;- User Testing</span>
              </div>
            </LinkS>
            <LinkS
              to="section5"
              smooth={true}
              duration={800}
              offset={-120}
              className={`progressLog ${
                activeSection == "section5" && "activeSection"
              }`}
            >
              {activeSection == "section5" ? (
                <div
                  className="progressLogBar"
                  style={{ height: `${scrollPosition}%` }}
                ></div>
              ) : null}
              <div className="progressText">
                <span className="progressNum">5</span>
                <span className="progressExt">&nbsp;- Prototype</span>
              </div>
            </LinkS>
          </div>
        </div>
      </div>
    </div>
  );
}
