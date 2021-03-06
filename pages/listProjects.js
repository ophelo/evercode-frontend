import { useEffect, useState } from "react";
import axios from "axios";
import PanelTile from "../components/ProjectCard";
import NavBar2 from "../components/navbar/NavBar2";
import LastActivity from "../components/LastActivity";
import { getSession } from "@auth0/nextjs-auth0";

export default function ListProjects({ accessToken }) {
  const [projects, setProjects] = useState([]);
  const [download, setDownload] = useState(false);
  const getFileList = async () => {
    const body = await axios.get("/api/listProjects");
    return body.data;
  };
  useEffect(() => {
    getFileList().then((list) => {
      setProjects(list);
      setDownload(true);
    });
  }, []);
  
  return (
    <LastActivity accessToken={accessToken}>
      <div className=" flex flex-col w-sreen h-screen bg-white ">
        <NavBar2/>
        <div className="grow bg-bblack flex flex-col items-center  gap-8 text-white">
          <h3 className=" pt-10  flex flex-row w-2/3 justify-start font-bold font-sans text-left text-5xl">
            Projects:
          </h3>
          {download
            ? projects["files"].map((element, id) => (
                <PanelTile
                  title={element.title}
                  description={element.description}
                  language={element.language}
                  date={element.date}
                  key={id}
                  onClick={() => {
                      setProjects(projects["files"].filter((val) => val.id==element.id))
                  }}
                />
              ))
            : "DOWNLOAD"}
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