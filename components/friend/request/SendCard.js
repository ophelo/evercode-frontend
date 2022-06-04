import React from "react";
import axios from 'axios';

const url = (process.env.SECURE ? 'https://' : 'http://') + process.env.BACK_ENDPOINT;

const deleteRequest = async (id, token, setDisable) => {
  axios.delete(url+'/api/friend/request/'+id, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }).then(() => {
    setDisable(true)
  })
}

export default function SendCard({ username, id, accessToken, setDisable }) {

  return (
      <div className="w-full shadow-sm rounded-lg border-solid border-2 border-gray-400">
        <div className="overflow-hidden">
          <img className="h-full w-full object-fill" src={"https://picsum.photos/200/200?random="+username} alt=""/>
        </div>
        <div className="px-2 pt-2 font-bold">{username}</div>
       <div className="text-center pb-2" >
        <button className="bg-red-500 hover:bg-blue-700 text-white font-bold pb-1 w-11/12 rounded m-2" onClick={() => deleteRequest(id,accessToken,setDisable)}>Delete</button>
       </div>
      </div>
  );
};
