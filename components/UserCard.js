import React from "react";
import Image from "next/image";

const UserCard = ({ name, favLang }) => {
  return (
      <div className="border w-1/3 h-1/3 hover:shadow-none hover:border-stone-200 relative flex flex-col mx-auto shadow-lg m-5">
        <div className="h-24 w-full opacity-80 absolute top-0 bg-gradient-to-b from-bg1 to-slate-600">
          {/* Image src="/banner.jpeg" alt="profilePic" width={384} height={80} /> */}
        </div>
        <div className="w-full flex m-3 ml-4 text-white pt-3 ">
          <img
            className=" border-4  w-28  h-28  bg-white rounded-full z-10 "
            src="https://source.unsplash.com/random/80*80/?profile,picture"
            width={80}
            height={80}
          />
          <div className="title mt-11 ml-3 font-bold flex flex-col h-20">
            <div className="relative break-words text-white z-10 font-bold ">{name}</div>
            <div className="relative font-semibold text-sm italic text-bblack ">
              {favLang}
            </div>
          </div>
        </div>
        <div className="flex absolute bottom-0 font-bold right-0 text-xs text-gray-500 space-x-0 my-3.5 mr-3 ">
          <div className="border rounded-l-2xl rounded-r-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-bg1 hover:text-white hover:underline">
            Profile
          </div>
        </div>
      </div>
  );
};
export default UserCard;
