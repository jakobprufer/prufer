import React, { Fragment, useEffect, useState } from "react";
import { useLocation, Link, Outlet, ScrollRestoration } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../Components/Header";
import Filter from "../Components/Filter";

import projects from "../Data/Projects.json";
import Overview from "../Pages/Overview";

function Page() {
  //enabling :active styling on mobile - not sure if needed??
  document.addEventListener("touchstart", function () {}, true);

  //get category and crumbs from router location
  const location = useLocation();
  const path = location.pathname;
  const category = path.split("/")[1];
  const crumbs = location.pathname.split("/").slice(1);

  //filter function
  const [filteredData, setFilteredData] = useState(projects);

  useEffect(() => {
    const filtered = category
      ? projects.filter((item) => item.cat.includes(category))
      : projects;
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
      <ScrollRestoration />
      <div className="page">
        <div className="headerFilterBg"></div>
        <div className="headerFilter">
          <Header
            sortSelect={sortSelect}
            setSortSelect={setSortSelect}
            crumbs={crumbs}
          />
          <Filter
            location={location}
            crumbs={crumbs}
            sortSelect={sortSelect}
            setSortSelect={setSortSelect}
            category={category}
          />
        </div>
        <div className="content">
          <Outlet context={sortedData} />
        </div>
      </div>
    </Fragment>
  );
}

export default Page;
