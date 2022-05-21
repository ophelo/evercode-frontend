import React from "react";
import {useState,useEffect} from "react";
import Select from "react-select";
import Image from "next/image";
import axios from "axios";

const Navbar2 = ({
  lang,
  theme,
  setTheme,
  fontSize,
  setFontSize,
  projectName,
  setProjectName,
  out,
  setOut,
}) => {
  const getOutput = async () => {
    const body = await axios.get("/api/compiler/code");
    return body.data;
  };

  const themes = [
    { value: "vs-dark", label: "Dark" },
    { value: "light", label: "Light" },
  ];
  return (
    <div className="flex flex-row justify-center py-4 align-middle bg-bg1 gap-7 text-white px-10">
      <div className="flex-none  ">
        <Image
          alt="top-left"
          src="/orizzontaLogo.png"
          height={40}
          width={100}
        />
      </div>
      <div className="grow flex flex-row justify-end align-middle gap-4">
        <input
          type="radio"
          onClick={async () => {
            const code = await getOutput();
            setOut(out + code.code);
          }}
        >
         
        </input>
        
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
export default Navbar2;
