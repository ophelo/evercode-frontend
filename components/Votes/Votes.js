import React, { useState,useEffect} from "react";
import axios from "axios";
import { FaChevronCircleUp } from "react-icons/fa"
import { FaChevronCircleDown } from "react-icons/fa"

const url = (process.env.SECURE ? 'https://' : 'http://') + process.env.BACK_ENDPOINT;
const icons = [{
  value: 'UpVote',
  icon: <FaChevronCircleUp fill="green" />
},
{
  value: 'DownVote',
  icon: <FaChevronCircleDown fill="red" />
}]


const Vote = (idProject) => {

  const [selectedUp, setSelectedUp] = useState('false');
  const [selectedDown, setSelectedDown] = useState('false');

  const UpHandler = async (value) =>{
      try{
        if(selectedUp == 'false'){
          const result = await axios.post(url+'/api/'+idProject+'/addReaction',{ reactionVal: value})
          setSelectedUp(result);
          setSelectedDown('false');
        } else{
          await axios.delete(url+'/api/reaction/'+idProject+'/delete/'+selectedUp.data._id,{ reacter: selectedUp.data.reacter }) 
          setSelectedUp('false')
        }
      }catch(err){
        console.log(err.message)
      }
  }

  const DownHandler = async (value) =>{
      try{
        if(selectedDown == 'false'){
        const result = await axios.post(url+'/api/'+idProject+'/addReaction',{ reactionVal: value})
        setSelectedDown(result);
        setSelectedUp('false');
      } else{
      await axios.delete(url+'/api/'+idProject+'/delete/'+selectedDown.data._id,{ reacter: selectedDown.data.reacter }) 
      setSelectedDown('false')
      }
      }catch(err){
        console.log(err.message)
      }
    }

  return (
    <div className="flex flex-row gap-3 m-3">
      <button title={icons[0].value} className={`opacity-60 active:-translate-y-1 hover:scale-150 hover:opacity-100 ` + (selectedUp=='false' ? `` : `scale-150 opacity-100`)} onClick={() =>UpHandler(icons[0].value)} >{icons[0].icon} </button>
      <button title={icons[1].value} className={`opacity-60 active:-translate-y-1 hover:scale-150 hover:opacity-100 ` + (selectedDown=='false' ? `` : `scale-150 opacity-100`)} onClick={() =>DownHandler(icons[1].value)} >{icons[1].icon} </button>
    </div>

  )
}
export default Vote;
