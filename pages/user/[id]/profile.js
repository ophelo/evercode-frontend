import LastActivity from "../../../components/LastActivity";
import React, { useEffect, useState } from "react";
import NavBar2 from "../../../components/navbar/NavBar2";
import { getSession } from "@auth0/nextjs-auth0";
import axios from "axios";
import { FiEdit2, FiSave, FiXCircle } from 'react-icons/fi'
import { BsPersonCheck, BsPersonPlus, BsPersonDash } from 'react-icons/bs'
import { DiJsBadge, DiPython, DiMarkdown } from "react-icons/di";
import {SiCplusplus} from "react-icons/si";

const url = (process.env.SECURE ? 'https://' : 'http://') + process.env.BACK_ENDPOINT;

const Addfriend = [{
    icon: <BsPersonCheck className=""/>
  },
  {
    icon: <BsPersonPlus className=""/>
  },
  {
    icon: <BsPersonDash className=""/>
  }]

const Lang = [{
      value: "python",
      label: <DiPython className="rounded-full w-20 h-20 self-stretch m-4 pb-4 fill-yellow-500 bg-blue-800"/>,
    },
    {
      value: "javascript",
      label: <DiJsBadge className="rounded-full w-20 h-20 self-stretch m-4 pb-4 fill-yellow-600 bg-black"/>,
    },
    {
      value: "markdown",
      label: <DiMarkdown className="rounded-full w-20 h-20 self-stretch m-4 pb-4 fill-stone-800"/>,
    },
    {
      value: "cpp",
      label: <SiCplusplus className="rounded-full w-20 h-20 self-stretch m-4 pb-4 fill-sky-800"/>,
    },];



export default function Profile({ accessToken }) {
  const [edit,setEdit] = useState(false)
  const [lang, setLang] = useState("cpp")
  const [bio, setBio] = useState("BIO Scrivo un sacco di caratteri e per testare la bio come si vede quando e' piena di informazioni come mia mail ciscoedoardo@gmail.com")
  const [name, setName] = useState("Edoardo")
  return (
    <LastActivity accessToken={accessToken}>
      <div className="h-screen">
        <NavBar2/>
        <div className="h-full">
          <div className="flex w-screen bg-gray-300 h-1/5">
              <img
               className=" border-4 mx-10 my-9 w-32 h-32  bg-white rounded-full z-10 "
                src="https://source.unsplash.com/random/128*128/?profile,picture"
                width={128}
               height={128}
               />
            <div 
              className={"text-4xl font-bold align-middle justify-center p-12 "}>
              {name}
            </div>
            <input 
                className={"m-10 text-4xl border-2 border-black font-bold bg-transparent self-end " + (!edit ? "hidden" : "") }
                onChange={(e) => setTitle(e.target.value)}
                value={name}
              />
            <div
              className={"text-3x1 font-thin self-end p-8 "}>
              {bio}
            </div>
            <div>
            {Lang.map((val) => {if (val.value==lang) return val.label})}
            </div>
            <div>

            </div>
        </div>
        </div>
      </div>
    </LastActivity>
  );
}

export function getServerSideProps({ req, res }) {
  const session = getSession(req, res)
  if (!session) return { props: {}}
  return { props: { accessToken: session.accessToken } }
}
