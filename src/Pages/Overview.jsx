import { Fragment, useEffect } from "react";
import { motion, layout } from "framer-motion";
import Card from "../Components/Card";
import { useOutletContext } from "react-router-dom";
import Player from "../Components/Player";
import CustomImg from "../Components/CustomImg";

export default function Overview() {
  //masonry effect - for now deactivated
  // //function to resize individual cards:
  // function resizeMasonryItem(card) {
  //   var grid = document.getElementsByClassName("overviewGrid")[0],
  //     rowGap = parseInt(
  //       window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
  //     ),
  //     rowHeight = parseInt(
  //       window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
  //     );
  //   var rowSpan = Math.ceil(
  //     (card.querySelector(".cardContainer").getBoundingClientRect().height +
  //       rowGap) /
  //       (rowHeight + rowGap)
  //   );
  //   card.style.gridRowEnd = "span " + rowSpan;
  // }
  // //function to call all cards and resize them
  // function resizeAllMasonryItems() {
  //   var allCards = document.getElementsByClassName("card");
  //   for (var i = 0; i < allCards.length; i++) {
  //     resizeMasonryItem(allCards[i]);
  //   }
  // }
  // //activate resize function on reload, window resize, data change (sort or filter action)
  // useEffect(() => {
  //   const masonryEvents = ["load", "resize"];
  //   masonryEvents.forEach((event) => {
  //     window.addEventListener(event, resizeAllMasonryItems);
  //   });
  //   resizeAllMasonryItems();
  //   return () => {
  //     masonryEvents.forEach((event) => {
  //       window.removeEventListener(event, resizeAllMasonryItems);
  //     });
  //   };
  // }, [sortedData]);

  //get prop through react router context
  const sortedData = useOutletContext();

  return (
    <Fragment>
      <motion.div layout className="overviewGrid">
        {/* <div className="card">
          <div className="cardContainer">
            <div className="cardHead">
              <div className="title-big">MA UX Design Blog</div>
              <div className="cardData">
                <span className="cardCategory">Design</span>,{" "}
                <span className="cardYear">2023</span>
              </div>
            </div>
            <div className="cardContent">
              <div className="g1">
                <div className="c32 border">
                  <CustomImg
                    projectId={"maux"}
                    name={"1"}
                    size={"s"}
                    alt=""
                    className="mauxImg1 hoverScale"
                  />
                  <CustomImg
                    projectId={"maux"}
                    name={"2"}
                    size={"s"}
                    className="mauxImg2 hoverScale drop"
                  />
                  <CustomImg
                    projectId={"maux"}
                    name={"3"}
                    size={"s"}
                    className="mauxImg3 hoverScale"
                  />
                  <CustomImg
                    projectId={"maux"}
                    name={"4"}
                    size={"s"}
                    className="mauxImg4 hoverScale drop"
                  />
                  <CustomImg
                    projectId={"maux"}
                    name={"5"}
                    size={"s"}
                    className="mauxImg5 hoverScale"
                  />
                  <CustomImg
                    projectId={"maux"}
                    name={"6"}
                    size={"s"}
                    className="mauxImg6 drop"
                  />
                  <CustomImg
                    projectId={"maux"}
                    name={"7"}
                    size={"s"}
                    className="mauxImg7"
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {sortedData.map((projects) => {
          return <Card key={projects.id} projects={projects} />;
        })}
      </motion.div>
    </Fragment>
  );
}
