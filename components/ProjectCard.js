import React from "react";
import Link from "next/link";
import {BsTrash} from "react-icons/bs"
import CustomButton from "./CustomButton";
import { DiJsBadge, DiPython, DiMarkdown } from "react-icons/di";
import {SiCplusplus} from "react-icons/si";
import Vote from "./Votes/Votes";

const PanelTile = ({title,date,description,language,onClick}) => {
  const langs = [
    {
      value: "python",
      label: <DiPython className="rounded-lg w-full h-full justify-start relative m-2 pb-2 fill-yellow-500 bg-blue-800"/>,
    },
    {
      value: "javascript",
      label: <DiJsBadge className="rounded-lg w-full h-full justify-start relative m-2 pb-2 fill-yellow-600 bg-black"/>,
    },
    {
      value: "markdown",
      label: <DiMarkdown className="rounded-lg w-full h-full justify-start relative m-2 pb-2 fill-stone-800"/>,
    },
    {
      value: "cpp",
      label: <SiCplusplus className="rounded-lg w-full h-full justify-start relative m-2 pb-2 fill-sky-700"/>,
    },
  ];
  return (
    <div className="flex flex-row items-center gap-1 p-2 rounded-lg bg-stone-400 text-black  w-1/3">
      <Link href="/writeProject"  >
          <div className="text-center font-bold">{title}</div> 
      </Link>
      <div className=" grow text-center px-3 scroll-auto">{description}</div>
      <div className="text-white px-4">
        {langs.map(element =>{
            if(element.value == language) return element.label 
        })}
      </div>
      <div className=" text-center pr-4">{date}</div>
      <CustomButton value={<BsTrash size={10}/>} textColor="text-white" hoverColor="bg-red-700" stndColor="bg-red-500"onClick={onClick} />
        <Vote/>
    </div>
  );
};

export default PanelTile;
