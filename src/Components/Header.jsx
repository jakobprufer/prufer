import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowDownLine, RiCloseLine } from "react-icons/ri";

import { sort } from "../Data/FilterData";
import FlipAbout from "./FlipAbout";

export default function Header({
  sortSelect,
  setSortSelect,
  crumbs,
  showAbout,
  setShowAbout,
}) {
  //mobile sort open
  const [showSortM, setShowSortM] = useState(false);

  const toggleSortM = () => {
    setShowSortM(!showSortM);
  };

  return (
    <Fragment>
      <div className={`header ${crumbs.length > 1 ? "headerTucked" : null}`}>
        {/* <div className="headerInner"> */}
        <a
          href="mailto:jakob@prufer.co"
          className="headerLink headerName pointer"
        >
          <span>Jakob Prüfer</span>
        </a>
        {/* <div
          className="headerLink flipAbout pointer"
          onClick={() => {
            setShowAbout(!showAbout);
          }}
        >
          {showAbout ? <RiCloseLine className="iconMedium" /> : "about me"}
          about me
        </div> */}
        <div className="headerLink flipAbout">things I've made</div>
        {/* <FlipAbout /> */}
        <div className={`sortMenuM ${crumbs.length > 1 ? "hidden" : null}`}>
          <div className="sortByM" onClick={toggleSortM}>
            Sort by&nbsp;
            <RiArrowDownLine
              className={showSortM ? "remixIcon turned" : "remixIcon"}
            />
          </div>
          <div className={showSortM ? "sortListM shown" : "sortListM"}>
            {sort.map(({ title, route }, i) => (
              <div
                key={i}
                className={`sortItemM ${route === sortSelect && "selected"}`}
                onClick={() => {
                  setSortSelect(route);
                  toggleSortM();
                }}
              >
                {title}
              </div>
            ))}
          </div>
        </div>
        {/* </div> */}
      </div>
    </Fragment>
  );
}
