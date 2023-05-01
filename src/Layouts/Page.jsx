import React, { Fragment, useEffect, useState } from "react";
import { useLocation, Link, Outlet, ScrollRestoration } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../Components/Header";
import Filter from "../Components/Filter";
import { AnimatePresence } from "framer-motion";

import projects from "../Data/Projects.json";
import Overview from "../Pages/Overview";
import About from "../Pages/About";

function Page() {
  //enabling :active styling on mobile - not sure if needed??
  document.addEventListener("touchstart", function () {}, true);

  //get category and crumbs from router location
  const location = useLocation();
  const path = location.pathname;
  const crumbs = location.pathname.split("/").slice(1);
  const crumbCat = path.split("/")[1];
  const category = crumbs.length == 1 && path.split("/")[1];

  //only select projects with visibility not set to none
  const visibleProjects = projects.filter(
    (item) => !item.visibility.includes("none")
  );

  const visibleAllProjects = projects.filter((item) =>
    item.visibility.includes("all")
  );

  //filter function
  const [filteredData, setFilteredData] = useState(visibleAllProjects);

  useEffect(() => {
    const filtered = category
      ? visibleProjects.filter((item) => item.cat.includes(category))
      : visibleAllProjects;
    setFilteredData(filtered);
  }, [category]);

  //sort function
  const [sortSelect, setSortSelect] = useState("rating");

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortSelect === "rating") {
      return b.rating - a.rating;
    } else if (sortSelect === "reach") {
      return b.reach - a.reach;
    } else if (sortSelect === "date") {
      return b.date - a.date;
    }
    return 0;
  });

  //toggle about section
  const [showAbout, setShowAbout] = useState(false);

  // //filter select
  // const [filterSelect, setFilterSelect] = useState(location);

  // //sort select
  // // const [sortSelect, setSortSelect] = useState(0);
  // const [sortRoute, setSortRoute] = useState("rating");

  // //router connection
  // useEffect(() => {
  //   setFilterSelect(location);
  // }, [location]);

  // //filter function

  // const [filtered, setFiltered] = useState([]);

  // useEffect(() => {
  //   if (filterSelect == 0) {
  //     setFiltered(projects);
  //     return;
  //   }
  //   const filtered = projects.filter((projects) =>
  //     projects.cat.includes(filterSelect)
  //   );
  //   setFiltered(filtered);
  // }, [filterSelect, sortRoute]);

  // //sort function

  // const [sorted, setSorted] = useState([]);

  // useEffect(() => {
  //   const sortArray = (type) => {
  //     const types = {
  //       rating: "rating",
  //       reach: "reach",
  //       date: "date",
  //     };
  //     const sortProperty = types[type];
  //     const sorted = [...projects].sort(
  //       (a, b) => b[sortProperty] - a[sortProperty]
  //     );
  //     setSorted(sorted);
  //   };

  //   sortArray(sortRoute);
  // }, [sortRoute, filterSelect]);

  return (
    <Fragment>
      <ScrollRestoration
        getKey={(location, matches) => {
          const paths = ["/"];
          return paths.includes(location.pathname)
            ? // home and notifications restore by pathname
              location.pathname
            : // everything else by location like the browser
              location.key;
        }}
      />
      <div className="page">
        <div className="headerFilterBg"></div>
        {/* <div className="headerFilter"> */}
        <div className="headerFilter">
          {/* <div className="headerCont"> */}
          <Header
            sortSelect={sortSelect}
            setSortSelect={setSortSelect}
            crumbs={crumbs}
            showAbout={showAbout}
            setShowAbout={setShowAbout}
          />
          {/* </div> */}
          {/* <div className="filterCont"> */}
          <Filter
            location={location}
            crumbs={crumbs}
            sortSelect={sortSelect}
            setSortSelect={setSortSelect}
            category={crumbCat}
          />
          {/* </div> */}
        </div>
        {/* </div> */}
        <div className={`aboutCont ${showAbout ? null : "away"}`}>
          <About showAbout={showAbout} />
        </div>
        {/* <AnimatePresence>
          {showAbout && (
            <motion.div
              className="aboutCont"
              initial={{ y: "100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "100vh" }}
            >
              <About />
            </motion.div>
          )}
        </AnimatePresence> */}
        <div className="content">
          <Outlet context={sortedData} />
        </div>
      </div>
    </Fragment>
  );
}

export default Page;
