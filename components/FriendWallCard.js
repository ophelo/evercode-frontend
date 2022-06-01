import React from "react";
import Image from "next/image";

const FriendWallCard = ({ name, favLang }) => {
  return (
      <div className="grid grid-cols-4 w-full h-1/2 lg:w-11/12 mb-3">
        <img className="col-span-1 rounded-full w-11 h-11" src={"https://picsum.photos/200/200?random="+name} alt=""/>
        <div className="col-span-3 text-sm m-3 font-medium">{name}</div>
      </div>
  );
};
export default FriendWallCard;
