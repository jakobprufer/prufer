import { Fragment, useEffect } from "react";
import { motion, layout } from "framer-motion";
import Card from "../Components/Card";
import Player from "../Components/Player";
import Img from "../Components/Img";

export default function Overview({ sortedData }) {
  //masonry effect
  //function to resize individual cards:
  function resizeMasonryItem(card) {
    var grid = document.getElementsByClassName("overviewGrid")[0],
      rowGap = parseInt(
        window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
      ),
      rowHeight = parseInt(
        window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
      );
    var rowSpan = Math.ceil(
      (card.querySelector(".cardContainer").getBoundingClientRect().height +
        rowGap) /
        (rowHeight + rowGap)
    );
    card.style.gridRowEnd = "span " + rowSpan;
  }
  //function to call all cards and resize them
  function resizeAllMasonryItems() {
    var allCards = document.getElementsByClassName("card");
    for (var i = 0; i < allCards.length; i++) {
      resizeMasonryItem(allCards[i]);
    }
  }
  //activate resize function on reload, window resize, data change (sort or filter action)
  useEffect(() => {
    const masonryEvents = ["load", "resize"];
    masonryEvents.forEach((event) => {
      window.addEventListener(event, resizeAllMasonryItems);
    });
    resizeAllMasonryItems();
    return () => {
      masonryEvents.forEach((event) => {
        window.removeEventListener(event, resizeAllMasonryItems);
      });
    };
  }, [sortedData]);

  return (
    <Fragment>
      <motion.div layout className="overviewGrid content">
        {sortedData.map((projects) => {
          return <Card key={projects.id} projects={projects} />;
        })}
      </motion.div>
    </Fragment>
  );
}
