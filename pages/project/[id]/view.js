import React, { useEffect, useState } from "react";
import LastActivity from "../../../components/LastActivity";
import NavBar2 from "../../../components/navbar/NavBar2";
import { getSession } from "@auth0/nextjs-auth0";
import WallCard from "../../../components/friend/WallCard";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { FiEdit2, FiSave } from 'react-icons/fi'
import useSWR from "swr";
import {fetcherGet} from "../../../utils/fetcher"
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

const modifyProject = async (token, id, description, title, setDescription, setTitle) => {
  await axios.patch(url+'/api/project/' + id,{
    title: title,
    description: description
  }, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }).then((resp) => {
    //router.replace('/');
    setDescription(description)
    setTitle(title)
  }).catch(err => {
    console.log(err);
  })
}

export default function View({accessToken, router}) {
  const [edit,setEdit] = useState(false)
  const [title, setTitle] = useState("")
  const [lang, setLang] = useState("")
  const [description, setDescription] = useState("")
  const [owners, setOwners] = useState([])

  const { data: project , error } = useSWR({ 
    url: url + '/api/project/' + router.query.id,
    token: accessToken,
  }, fetcherGet);

  useEffect(() => {
    if (project) {
      setDescription(project.description)
      setLang(project.language)
      setTitle(project.title)
      setOwners(project.owners)
    }
  }, [project])
    
  return (
    <LastActivity accessToken={accessToken}>
      <div className="h-screen">
        <NavBar2/>
        <div className="h-full">
          <div className="flex w-screen bg-gray-300 h-1/4">
            <div className="bg-blue-500 rounded-full w-28 h-28 self-end m-5"/>
            <div 
              className={"text-3xl font-bold self-end p-10 "  + (edit ? "hidden" : "")}>
                {title}
            </div>
            <input 
                className={"m-10 text-3xl border-2 border-black font-bold bg-transparent self-end " + (!edit ? "hidden" : "") }
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
          </div>

          <div className="mt-4 p-10">
            <button 
              className={"self-end border-2 border-black rounded-lg text-lg p-1 " + (edit ? "hidden" : "")}
              onClick={() => {setEdit(!edit)}}>
              <FiEdit2/>
            </button>
            <button 
              className={"text-xl text-green-500 border-2 border-green-500 p-1 rounded-lg " + (!edit ? "hidden" : "")} 
              onClick={async () => {
                setEdit(!edit)
                await modifyProject(accessToken, project._id, description, title, setDescription, setTitle)}}>
              <FiSave/>
            </button>
            <div className="flex justify-end">
              <div className="shadow-md p-2">
                <div className="flex">
                  <div className="text-2xl font-bold">Autori</div>
                  <button className="pl-2 self-center text-lg"><FiEdit2/></button>
                </div>
                {owners.map((elem, id) => {
                  return (<WallCard key={id} name={elem.username} />)
                })}
                
              </div>
            </div>

            <div className="rounded-lg shadow-md p-2">
              <div className="flex">
                <div className="text-3xl font-bold">Descrizione</div>
              </div>
              <textarea 
                className={"w-full h-full text-lg border-2 border-black " + (!edit ? "hidden" : "") }
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
              <div className={"text-lg " + (edit ? "hidden" : "") }>{description}</div>
            </div>

            <div className="mt-5 shadow-md rounded-lg p-2">
              <div className="text-3xl font-bold">Statistics</div>
              <div className="pt-2 flex flex-col place-items-center">
                <div className="flex place-items-center h-1/4 w-1/4">
                  <Doughnut data={data} />
                </div>
                <div>Visualizzazioni: 100</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LastActivity>
  )
}

export function getServerSideProps({ req, res }) {
  const session = getSession(req, res)
  if (!session) return { props: {}}
  return { props: { accessToken: session.accessToken, user: session.user } }
}
  