import React, { useState } from "react";
import LastActivity from "../../components/LastActivity";
import NavBar2 from "../../components/navbar/NavBar2";
import { getSession } from "@auth0/nextjs-auth0";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import axios from 'axios'

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Down votes', 'Up votes'],
  datasets: [
    {
      label: '# of Votes',
      data: [100, 200],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const url = (process.env.SECURE ? 'https://' : 'http://') + process.env.BACK_ENDPOINT;

const createProject = async (router, token, title, description, language) => {
  axios.post(url+'/api/project/add',{
    title: title,
    description: description,
    language: language,
    code: "",
    shared: false
  }, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }).then((resp) => {
    console.log(resp.data)
    router.replace('/project/' + resp.data._id + '/view');
  }).catch(err => {
    console.log(err);
  })
}

export default function Create({accessToken, router}) {
  const [title, setTitle] = useState("")
  const [lang, setLang] = useState("")
  const [description, setDescription] = useState("")
    
  return (
    <LastActivity accessToken={accessToken}>
      <NavBar2/>
      <div className="pt-28 flex flex-col items-center h-screen bg-bg1">
        <div className="flex flex-col gap-4 bg-bg2 w-1/3 h-80 items-center rounded-xl" >
                <div className="flex flex-col gap-0.5 items-center">
                <label className="text-bblack font-semibold ">Titolo</label>
                <input
                    className=" bg-bg1  border-bwhite w-32 text-bwhite py-0.5 px-0.5 rounded-sm"
                    type="text"
                    value={title}
                    placeholder="Title"
                    onChange={(e) => {
                    setTitle(e.target.value);
                    }}
                />
                </div>

                <div className="flex flex-col gap-1  items-center">
                    <label className=" text-bblack font-semibold">Lang</label>
                    <input
                        className="bg-bg1 border-2 border-bwhite w-32  text-bwhite py-0.5 px-0.5 rounded-sm"
                        type="text"
                        value={lang}
                        placeholder="cpp"
                        onChange={(e) => {
                          setLang(e.target.value);
                        }}
                    />
                </div>

                <div className="flex flex-col gap-1  items-center">
                    <label className=" text-bblack font-semibold">Descrizione</label>
                    <input
                        className="bg-bg1 border-2 border-bwhite w-32  text-bwhite py-0.5 px-0.5 rounded-sm"
                        type="text"
                        value={description}
                        placeholder="Description"
                        onChange={(e) => {
                          setDescription(e.target.value);
                        }}
                    />
                </div>

                <button 
                className="btn py-2 rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-bblack duration-300  bg-bg1 p-3 text-bwhite"
                //type="submit"
                onClick={() => createProject(router,accessToken,title,description,lang)}
                >
                Submit
                </button>
        </div>
       {/* <CustomButton value="ciao" stndColor="bg-bg1" textColor="text-bwhite" hoverColor="hover:bg-bblack"  onClick={()=> {console.log("funziona")}}  /> */}
      </div>
    </LastActivity>
  )
}

export function getServerSideProps({ req, res }) {
  const session = getSession(req, res)
  if (!session) return { props: {}}
  return { props: { accessToken: session.accessToken, user: session.user } }
}
  