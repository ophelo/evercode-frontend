import React from "react";
import Image from "next/image";
//import Link from "next/link";
import { useState } from "react";

export default function firstConfig() {
  const [userName, setUserName] = useState("");
  const [lang, setLang] = useState("");
  const [bio, setBio] = useState("");
  return (
    <div className="flex flex-col bg-bg1 w-screen h-screen items-center  ">
      <div className="pt-20 pb-5 ">
        <Image alt="Logo" src="/everCode.jpg" height={180} width={180} />
      </div>
      <div className="flex flex-col gap-4 bg-bg2 w-1/3 h-80 items-center rounded-lg">
        <div className="flex flex-col gap-1  items-center pt-6">
          <label className="text-bblack font-semibold">UserName</label>
          <input
            className=" bg-bg1  border-bwhite w-32 text-bwhite px-0.5 py-0.5 rounded-sm"
            type="text"
            value={userName}
            placeholder="kativen"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>

        <div className="flex flex-col gap-0.5 items-center">
          <label className="text-bblack font-semibold ">Bio</label>
          <input
            className=" bg-bg1  border-bwhite w-32 text-bwhite py-0.5 px-0.5 rounded-sm"
            type="text"
            value={bio}
            placeholder="Hello EverCode !"
            onChange={(e) => {
              setBio(e.target.value);
            }}
          />
        </div>

        <div className="flex flex-col gap-1  items-center">
          <label className=" text-bblack font-semibold">Lang</label>
          <input
            className="bg-bg1 border-2 border-bwhite w-32  text-bwhite py-0.5 px-0.5 rounded-sm"
            type="text"
            value={lang}
            placeholder="c++"
            onChange={(e) => {
              setLang(e.target.value);
            }}
          />
        </div>
        <div className="py-2">
          <input
            className="rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-bblack duration-300  bg-bg1 p-3 text-bwhite "
            type="submit"
            value="Submit"
          />
        </div>
      </div>
    </div>
  );
}
