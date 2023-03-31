/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import ReactJson from "react-json-view";
import { useState } from "react";
import ToggleButton from "./ToggleButton";

//@ts-ignore
function App({ json }) {
  const [showParsed, setShowParsed] = useState("Parsed");

  function onClickToggle(showText: string) {
    setShowParsed(showText);
  }

  const preElement = document.querySelector("body pre") as HTMLElement;

  if (showParsed == "Raw") {
    preElement.style.display = "block";
  } else {
    preElement.style.display = "none";
  }

  return (
    <>
      {" "}
      <ToggleButton onClickToggle={onClickToggle} />{" "}
      {showParsed == "Parsed" ? (
        <div style={{ padding: "16px", zIndex: "0" }}>
          <ReactJson src={json} />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
