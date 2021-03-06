import {useState, React, useEffect} from "react";
import Editor from "../components/compiler/Editor";
import NavbarWrite from "../components/navbar/NavbarWrite";
import useWebSocket, { ReadyState } from 'react-use-websocket';
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import LastActivity from "../components/LastActivity";
import { getSession } from "@auth0/nextjs-auth0";

export default function WatchProject({ accessToken }) {

  const socketUrl = (process.env.SECURE ? 'wss://' : 'ws://') + process.env.BACK_ENDPOINT+'/compiler'

  // Selected Programming Language
  const [lang, setLang] = useState("javascript");
  // Selected editor Theme
  const [theme, setTheme] = useState("vs-dark");
  // Variable for the font size
  const [fontSize, setFontSize] = useState(15);
  // State containing the current code
  const [code, setCode] = useState("");
  // State operation phase
  const [state, setState] = useState('IDLE');
  // State containing the ouput
  const [out, setOut] = useState("");
  // State for the project name
  const [projectName, setProjectName] = useState("NewProject");
  // State for the websocket client
  const { sendJsonMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  // Handle compiler's states
  useEffect(() => {
    if(readyState === ReadyState.OPEN && lastMessage){
      const msgParsed = JSON.parse(lastMessage.data)
      switch (msgParsed.type){
        case 'stream':
          setState('STREAM');
          setOut((prev) => prev.concat(msgParsed.data));
        case 'close':
          setState('CLOSE');
      }
    }
  },[lastMessage]);

  //avoid blank compiler box
  if(state == 'STREAM' && !out ) return null;

  return (
    <LastActivity accessToken={accessToken}>
      <div className="flex flex-col w-screen h-screen bg-bg1">
        <NavbarWrite
          lang={lang}
          setLang={setLang}
          theme={theme}
          setTheme={setTheme}
          fontSize={fontSize}
          setFontSize={setFontSize}
          projectName={projectName}
          setProjectName={setProjectName}
          code={code}
          out={out}
          setOut={setOut}
          sendJsonMessage={sendJsonMessage}
        />

        <div className="flex flex-row gap-3 pl-12">
          <Editor
            code={code}
            setCode={setCode}
            lang={lang}
            theme={theme}
            fontSize={fontSize}
            projectName={projectName}
          />
          <div className="  w-2/5 h-auto bg-bblack border-2 border-bwhite text-white">
            {(lang == "markdown") ? (
              <ReactMarkdown
                remarkPlugins={[gfm]}
                className="pl-5 pt-2"
              >{code}</ReactMarkdown>
            ) : (
              <h1 className="overflow-y-auto text-bwhite py-1 px-3">{out} </h1>
            )}
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
