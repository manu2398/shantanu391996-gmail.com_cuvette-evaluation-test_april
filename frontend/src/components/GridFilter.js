import React, { useState } from "react";
import { BsGrid1X2 } from "react-icons/bs";
import { TfiViewListAlt } from "react-icons/tfi";

const GridFilter = ({ view, setView }) => {
  const handleGridView = () => {
    setView("gridview");
  };

  const handleListView = () => {
    setView("listview");
  };

  return (
    <div className="gridfilter">
      <button
        className={`gridfilter__icon space_right`}
        onClick={handleListView}
      >
        <BsGrid1X2 />
      </button>
      <button className="gridfilter__icon" onClick={handleGridView}>
        <TfiViewListAlt />
      </button>
    </div>
  );
};

export default GridFilter;
