import React from "react";
import Select from "react-select";
import Image from "next/image";
import makeAnimated from "react-select/animated";
import CustomButton from "../CustomButton";
import { DiJsBadge, DiPython, DiMarkdown } from "react-icons/di";
import axios from "axios";
import Link from "next/link";
import { BsTrash } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";

const NavbarWatch = ({
  lang,
  setLang,
  theme,
  setTheme,
  fontSize,
  setFontSize,
  projectName,
  setProjectName,
  out,
  setOut,
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

  const getOutput = async () => {
    const body = await axios.get("/api/compiler/test1");
    return body.data;
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

      <div className="grow flex flex-row justify-end items-center gap-6">
        <div className="h-10 w-32  text-white  py-3 flex justify-center items-center font-bold">
          {projectName}
        </div>
        <div className="bg-bg1  text-white  flex justify-center items-center pr-3">
          {languages.find((element) => element.value == lang).label}
        </div>

        {lang == "markdown" ? (
          ""
        ) : (
          <>
            <CustomButton
              value={<BsTrash size={10} />}
              onClick={async () => {
                setOut("$~");
              }}
            />

            <CustomButton
              value={<FaPlay size={10} />}
              onClick={async () => {
                const code = await getOutput();
                setOut(out + code.code.toString("base64"));
              }}
            />
          </>
        )}

        <Select
          className="bg-bg1 "
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
export default NavbarWatch;
