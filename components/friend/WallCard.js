import React from "react";

const WallCard = ({ name, status }) => {
  return (
      <div className="flex w-full h-1/2 lg:w-11/12 mb-3">
        <div className="flex pr-1 col-span-1">
          <img className="rounded-full w-11 h-11" src={"https://picsum.photos/200/200?random="+name} alt=""/>
          <div className={"absolute left-9 h-3 w-3 rounded-full border-2 border-white self-end " + (status === 'online' ? "bg-green-500" : "bg-gray-300" )} />
        </div>
        <div className="col-span-3 text-sm m-3 font-medium">{name}</div>
      </div>
  );
};
export default WallCard;
