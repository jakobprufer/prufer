import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowDownLine } from "react-icons/ri";

import { sort } from "../Data/FilterData";

export default function Header({ sortSelect, setSortSelect, crumbs }) {
  //mobile sort open
  const [showSortM, setShowSortM] = useState(false);

  const toggleSortM = () => {
    setShowSortM(!showSortM);
  };

  return (
    <Fragment>
      <div className="header">
        {/* <div className="headerInner"> */}
        <div className="headerLink name">Jakob Prufer</div>
        {/* <div className="headerLink">Musician</div> */}
        <div className="headerLink whatItIs">things I'm proud of</div>
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
