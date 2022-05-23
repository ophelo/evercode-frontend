import SideBar from "../components/sidebar/SideBar";
import {useEffect,useState} from "react"

// export async function getServerSideProps(){

// }
function listProjects() {
  const [projects,setProjects] = useState([]);
  const getFileList = async () => {
    const body = await axios.get("/api/listProjects",);
    return body.data;
  }
  const  init  = useEffect(()=>{
    
  },[]);
  return (
    <div className=" flex flex-row  w-sreen h-screen bg-evercodeBlue ">
      <SideBar />
      <div className="grow bg-bblack flex flex-col items-center"></div>
    </div>
  );
}

export default listProjects;
