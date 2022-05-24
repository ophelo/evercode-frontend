import React from "react";
import Link from "next/link";
import {BsTrash} from "react-icons/bs"
import CustomButton from "./CustomButton";
import { DiJsBadge, DiPython, DiMarkdown } from "react-icons/di";

const PanelTile = ({title,date,description,language,onClick}) => {
  const langs = [
    {
      value: "python",
      label: <DiPython size={20} />,
    },
    {
      value: "javascript",
      label: <DiJsBadge size={20} />,
    },
    {
      value: "markdown",
      label: <DiMarkdown size={20} />,
    },
  ];
  return (
    <div className="flex flex-row items-center gap-1 p-2 rounded-lg bg-stone-400 text-black ">
      <Link href="/writeProject"  >
          <div className="text-center font-bold">{title}</div> 
      </Link>
      <div className=" grow text-center px-3">{description}</div>
      <div className="text-white px-4">
        {langs.map(element =>{
            if(element.value == language) return element.label 
        })}
      </div>
      <div className=" text-center pr-4">{date}</div>
      <CustomButton value={<BsTrash size={10}/>} textColor="text-white" hoverColor="bg-red-700" stndColor="bg-red-500"onClick={onClick} />
    </div>
  );
};
export default PanelTile;
