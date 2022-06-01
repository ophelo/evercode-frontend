import React from "react";
import Image from "next/image";

const FriendReqCard = ({ random, favLang }) => {
  return (
      <div className="w-3/4 md:w-full lg:w-full xl:w-full shadow-lg rounded-lg border-solid border-2 border-gray-400">
        <div className="relative pb-48 overflow-hidden">
          <img className="absolute inset-0 h-full w-full object-fill" src={"https://picsum.photos/200/200?random="+random} alt=""/>
        </div>
        <div className="px-2 pt-2 font-bold">Davide Frageri</div>
       <div className="text-center pb-2" >
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold pb-1 w-11/12 rounded m-2">Accept</button>
        <button className="bg-gray-500 hover:bg-bg1 text-white font-bold py-1 w-11/12 rounded">Refuse</button>
       </div>
      </div>
  );
};
export default FriendReqCard;
