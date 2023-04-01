import { useState } from "react";

//@ts-ignore
export default function ToggleButton({ onClickToggle }) {
  const [isActive, setActive] = useState("Parsed");

  const toggleClass = (text: string) => {
    setActive(text);
    onClickToggle(text);
  };

  return (
    <>
      <div id="optionBar">
        <button
          id="buttonPlain"
          className={isActive == "Raw" ? "selectedGetDevKitJsonViewer" : ""}
          onClick={() => toggleClass("Raw")}
        >
          <span>Raw</span>
        </button>

        <button
          id="buttonFormatted"
          className={isActive == "Parsed" ? "selectedGetDevKitJsonViewer" : ""}
          onClick={() => toggleClass("Parsed")}
        >
          <span>Parsed</span>
        </button>
      </div>
    </>
  );
}
