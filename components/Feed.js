import React from "react";
import {useState,useEffect} from "react"
import axios from "axios";

function Feed({route}) {
  
  const [load, setLoad] = useState(false);
  const [output,setOutput] = useState([]);
  const [list,setList] = useState();
  
  const apiValue = async () =>{
    let appo = await axios.get(route)
    setList(appo.data);
    setLoad(true);
  }
  
  apiValue()

  const objArray = () => {
    for (let i = 0; i < list.result.lenght; i++) {
      console.log("ciao")
      setOutput(output[i] = (
        <PanelTile
          title= {list.result[i].title}
          date= {list.result[i].date}
          description= {list.result[i].description}
          language= {list.result[i].language}
        />
      ));
    }
  };

  if (load) {
    objArray();
    return <div className="grid grid-cols-3 gap-3">{output}</div>;
  }
}
export default Feed;
