import { useState, useRef, useEffect } from "react";

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
            <div
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
                <div className="progressNum">1</div>
                <div className="progressExt">&nbsp;- Research</div>
              </div>
            </div>
            <div
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
                <div className="progressNum">2</div>
                <div className="progressExt">&nbsp;- Conceptualization</div>
              </div>
            </div>
            <div
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
                <div className="progressNum">3</div>
                <div className="progressExt">&nbsp;- Ideation</div>
              </div>
            </div>
            <div
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
                <div className="progressNum">4</div>
                <div className="progressExt">&nbsp;- Testing</div>
              </div>
            </div>
            <div
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
                <div className="progressNum">5</div>
                <div className="progressExt">&nbsp;- Prototype</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
