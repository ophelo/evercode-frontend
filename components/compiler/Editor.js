import React from "react";
import dynamic from "next/dynamic";
const MonacoEditor = dynamic(import("react-monaco-editor"), { ssr: false });

const Editor = ({ code, setCode, lang, theme, fontSize }) => {
  const options = {
    fontSize: fontSize,
  };
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
        width="55%"
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
