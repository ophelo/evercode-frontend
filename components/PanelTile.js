import React from "react";

const PanelTile = ({ description, language }) => {
  return (
    <div className=" h-12 w-60 rounded-lg">
      <div className=" ">{description}</div>
      <div className=" ">{language}</div>
      <div className=" ">{date}</div>
    </div>
  );
};
export default PanelTile;
