import React from "react";
import makeAnimated from "react-select/animated";
import Select from "react-select";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import CustomButton from "../CustomButton";
import { DiJsBadge, DiPython, DiMarkdown } from "react-icons/di";
import { FaPlay, FaSave } from "react-icons/fa";
import {BsTrash} from "react-icons/bs"

const NavbarWrite = ({
  lang,
  setLang,
  theme,
  setTheme,
  fontSize,
  setFontSize,
  projectName,
  setProjectName,
  code,
  out,
  setOut,
  sendJsonMessage,
}) => {
  const languages = [
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

  const save = async () => {
    axios.post("", {
      projectName,
      lang,
      out,
    });
  };

  const themes = [
    { value: "vs-dark", label: "Dark" },
    { value: "light", label: "Light" },
  ];
  return (
    <div className="flex fle59 mx-row justify-center py-4 align-middle bg-bg1 gap-7  px-10">
      <div className="flex-none  ">
        <Link href="/">
          <Image
            alt="top-left"
            src="/orizzontaLogo.png"
            height={40}
            width={100}
          />
        </Link>
      </div>
      <div className="grow flex flex-row justify-end items-center gap-4">
        <CustomButton
          value={<FaSave size={10} />}
          onClick={() => {
            save();
            setOut(out.toString("base64"));
          }}
        />

        <CustomButton
          value={<BsTrash size={10}/>}
          onClick={async () => {
            setOut("$~")
          }}
        />

        <CustomButton
          value={<FaPlay size={10} />}
          onClick={async () => {
            if(!code){
              return setOut("No code to compile!")
            }
            const decoded = Buffer.from(code).toString('base64');
            setOut(""); // reset output on play
            sendJsonMessage({ type: "file", name: "file1.cpp", text: decoded}) // send code
            sendJsonMessage({type:"start", language: "cpp" }); // start code
          }}
        />

        <input
          type="text"
          value={projectName}
          onChange={(e) => {
            setProjectName(e.target.value);
          }}
          className="h-10 w-32 text-center rounded-md"
        />

        <Select
          options={languages}
          value={languages.forEach((element) => {
            if (element.value == lang) return element.label;
          })}
          onChange={(e) => setLang(e.value)}
          placeholder={languages[2].label}
          components={makeAnimated}
        />

        <Select
          className="bg-bg1"
          options={themes}
          value={themes.forEach((element) => {
            if (element.value == theme) return element.label;
          })}
          onChange={(e) => {
            setTheme(e.value);
          }}
          placeholder={themes[1].label}
          components={makeAnimated}
        />

        <input
          type="number"
          min="15"
          max="33"
          value={fontSize}
          onChange={(e) => {
            setFontSize(e.target.value);
          }}
          className=" h-10 w-12 text-center rounded-md"
        />
      </div>
    </div>
  );
};
export default NavbarWrite;
