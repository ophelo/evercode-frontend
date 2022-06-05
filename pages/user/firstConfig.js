import React from "react";
import Image from "next/image";
import { useState } from "react";
import { getSession, useUser } from "@auth0/nextjs-auth0";
import axios from "axios";

const url = (process.env.SECURE ? 'https://' : 'http://') + process.env.BACK_ENDPOINT;

const sendFirstConfig = async (router, token, username, bio, lang) => {
  await axios.post(url+'/api/user/firstConfig',{
    username: username,
    bio: bio,
    fav_lng: lang
  }, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }).then(() => {
    router.replace('/');
  }).catch(err => {
    console.log(err);
  })
}

export default function FirstConfig({ router, user, accessToken }) {
  const [username, setUsername] = useState(user.nickname);
  const [lang, setLang] = useState("c++");
  const [bio, setBio] = useState("");
  
  return (
    <div className="flex flex-col bg-bg1 w-screen h-screen items-center  ">
      <div className="pt-20 pb-5 ">
        <Image alt="Logo" src="/everCode.jpg" height={180} width={180} />
      </div>
      <div className="flex flex-col gap-4 bg-bg2 w-1/3 h-80 items-center rounded-xl">
        <div className="flex flex-col gap-1  items-center pt-6">
          <label className="text-bblack font-semibold">Username</label>
          <input
            className=" bg-bg1  border-bwhite w-32 text-bwhite px-0.5 py-0.5 rounded-sm"
            type="text"
            value={username}
            placeholder="kativen"
            onChange={(e) => {
              setUsername(e.target.value);
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
        <button 
          className="btn py-2 rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-bblack duration-300  bg-bg1 p-3 text-bwhite"
          type="submit"
          onClick={async () => {
            sendFirstConfig(router, accessToken, username, bio, lang)}
          }
        >
          Submit
        </button>
       {/* <CustomButton value="ciao" stndColor="bg-bg1" textColor="text-bwhite" hoverColor="hover:bg-bblack"  onClick={()=> {console.log("funziona")}}  /> */}
      </div>
    </div>
  );
}

export function getServerSideProps({ req, res }) {
  const session = getSession(req, res)
  if (!session) return { props: {}}
  return { props: { accessToken: session.accessToken, user: session.user } }
}
