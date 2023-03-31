import { Fragment, useState, useRef, useEffect } from "react";
import { RiArrowDownLine, RiArrowRightLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { classNames } from "classnames";

import { filter } from "../Data/FilterData";
import { sort } from "../Data/FilterData";
import projects from "../Data/Projects.json";

export default function Filter({
  crumbs,
  sortSelect,
  setSortSelect,
  category,
}) {
  //desktop sort open and close
  const [showSortD, setShowSortD] = useState(false);
  const sortField = useRef();

  const toggleSortD = () => {
    setShowSortD(!showSortD);
  };

  useEffect(() => {
    let handler = (e) => {
      if (!sortField.current.contains(e.target)) {
        setShowSortD(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  //get project title for crumbs
  const [projectTitle, setProjectTitle] = useState("");

  useEffect(() => {
    const matchingObject = projects.find((obj) => obj.projectId === crumbs[1]);
    if (matchingObject) {
      setProjectTitle(matchingObject.title);
    }
  }, [projects, crumbs]);

  return (
    <Fragment>
      <div className="filter">
        <nav>
          {filter.map(({ title, route }, i) => (
            <motion.div
              key={i}
              className={`navLink ${
                crumbs.length > 1 && route != crumbs[0] ? "hidden" : null
              }`}
              // className={route != crumbs[0] && "hidden"}
              // onClick={() => setFilterSelect(i)}
              animate
            >
              {route == category && (
                <Link
                  className={`navCrumb ${crumbs.length < 2 && "hidden"}`}
                  to="/"
                >
                  All Projects
                  <RiArrowRightLine className="navCrumbArrow remixIcon" />
                </Link>
              )}
              <NavLink to={`/${route}`}>
                {route == category && (
                  <motion.div
                    className={`underline ${crumbs.length > 1 && "hidden"}`}
                    layoutId="underline"
                  />
                )}
                {title}
              </NavLink>
              {route == category && (
                <div className={`navCrumb ${crumbs.length < 2 && "hidden"}`}>
                  <RiArrowRightLine className="navCrumbArrow remixIcon" />
                  {projectTitle}
                </div>
              )}
            </motion.div>
          ))}
          <div
            ref={sortField}
            className={`sortMenuD ${crumbs.length > 1 ? "hidden" : null}`}
          >
            <div className="sortBy navLink" onClick={toggleSortD}>
              Sort by &nbsp;
              <RiArrowDownLine
                className={showSortD ? "remixIcon turned" : "remixIcon"}
              />
            </div>
            <div className={showSortD ? "sortListD shown" : "sortListD"}>
              {sort.map(({ title, route }, i) => (
                <div
                  key={i}
                  className={`sortItemD ${route === sortSelect && "selected"}`}
                  onClick={() => {
                    setSortSelect(route);
                    toggleSortD();
                  }}
                >
                  {title}
                </div>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </Fragment>
  );
}
