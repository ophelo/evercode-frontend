import React, {useState} from "react";
import Editor from "../components/compiler/Editor";
import NavbarWatch from "../components/navbar/NavbarWatch";

export default function WatchProject() {
  // Selected Programming Language
  const [lang, setLang] = useState("javascript");
  // Selected editor Theme
  const [theme, setTheme] = useState("vs-dark");
  // Variable for the font size
  const [fontSize, setFontSize] = useState(15);
  // State containing the current code
  const [code, setCode] = useState("");
  // State containing the ouput
  const [out, setOut] = useState("$~");
  // State for the project name
  const [projectName, setProjectName] = useState("NewProject");

  return (
    <div className="flex flex-col w-screen h-screen bg-bg1">
      <NavbarWatch
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
        fontSize={fontSize}
        setFontSize={setFontSize}
        projectName={projectName}
        setProjectName={setProjectName}
        out={out}
        setOut={setOut}
      />

      <div className="flex flex-row gap-3 pl-12">
        <Editor code={code} setCode={setCode} lang={lang} theme={theme} fontSize={fontSize}
        />
        <div className="  w-2/5 h-auto bg-bblack border-2 border-bwhite">
          <h1 className="overflow-y-auto text-bwhite py-1 px-3">{out} </h1>
        </div>
      </div>
    </div>
  );
}
