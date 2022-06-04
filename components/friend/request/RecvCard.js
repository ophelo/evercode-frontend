import React from "react";
import axios from 'axios';

const url = (process.env.SECURE ? 'https://' : 'http://') + process.env.BACK_ENDPOINT;

const acceptRequest = async (id, token, setDisable) => {
  axios.post(url+'/api/friend/request/'+id+'/accept',{}, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }).then(res => {
    setDisable(true)
  })
}

const refuseRequest = async (id, token, setDisable) => {
  axios.post(url+'/api/friend/request/'+id+'/refuse',{}, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }).then(res => {
    setDisable(true)
  })
}

export default function RecvCard({ username, id, accessToken, setDisable }) {

  return (
      <div className="w-full shadow-sm rounded-lg border-solid border-2 border-gray-400">
        <div className="overflow-hidden">
          <img className="h-full w-full object-fill" src={"https://picsum.photos/200/200?random="+username} alt=""/>
        </div>
        <div className="px-2 pt-2 font-bold">{username}</div>
       <div className="text-center pb-2" >
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold pb-1 w-11/12 rounded m-2" onClick={() => acceptRequest(id,accessToken,setDisable)}>Accept</button>
        <button className="bg-gray-500 hover:bg-bg1 text-white font-bold py-1 w-11/12 rounded" onClick={() => refuseRequest(id,accessToken,setDisable)}>Refuse</button>
       </div>
      </div>
  );
};
