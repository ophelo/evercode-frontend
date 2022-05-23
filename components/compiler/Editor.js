import React from "react";
import dynamic from "next/dynamic";
const MonacoEditor = dynamic(import("@monaco-editor/react"), { ssr: false });
import { useEffect } from "react";
import { useTimer } from "react-timer-hook";
const Editor = ({ 
  code, 
  setCode, 
  lang, 
  theme, 
  fontSize, 
  projectName }) => {

  const opening = useEffect(() => {
    if (localStorage.getItem(projectName) != "")
      setCode(localStorage.getItem(projectName));
    else console.log(" chiamata con axios per prendere da back");
  }, []);
  const time = new Date();
  time.setSeconds(time.getSeconds() + 300);
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    time,
    onExpire: () => {
      localStorage.setItem(projectName, code);
      console.log(" funziona ");
    },
  });

  const options = {
    fontSize: fontSize,
  };

  const startTimer = useEffect(() => {
    if (!isRunning) {
      restart(time);
    }
  }, [code]);
  return (
    <div className="flex flex-row gap-3 pl-12">
      <MonacoEditor
        className="border-2 border-bwhite py-1 bg-bblack"
        editorDidMount={() => {
          window.MonacoEnvironment.getWorkerUrl = (_moduleId, label) => {
            if (label === "json") return "_next/static/json.worker.js";
            if (label === "css") return "_next/static/css.worker.js";
            if (label === "html") return "_next/static/html.worker.js";
            if (label === "typescript" || label === "javascript")
              return "_next/static/ts.worker.js";
            return "_next/static/editor.worker.js";
          };
        }}
        height="calc(90vh - 60px)"
        width="600px"
        options={options}
        theme={theme}
        language={lang}
        defaultLanguage={code}
        defaultValue="//EVERCODE"
        onChange={(value) => {
          setCode(value);
        }}
      />
    </div>
  );
};
export default Editor;
