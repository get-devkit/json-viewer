import { useState } from "react";

//@ts-ignore
export default function ToggleButton({onClickToggle}) {
  const [isActiveRaw, setActiveRaw] = useState(false);
  const [isActiveParsed, setActiveParsed] = useState(true);

  const toggleClassRaw = () => {
    isActiveRaw ? "" : setActiveRaw(!isActiveRaw);
    setActiveParsed(false);
    onClickToggle('Raw')
  };

  const toggleClassParsed = () => {
    isActiveParsed ? "" : setActiveParsed(!isActiveParsed);
    setActiveRaw(false);
    onClickToggle('Parsed')
  };
  return (
    <>
      <div id="optionBar">
        <button
          id="buttonPlain"
          className={isActiveRaw ? "selected" : ""}
          onClick={toggleClassRaw}
        >
          <span>Raw</span>
        </button>

        <button
          id="buttonFormatted"
          className={isActiveParsed ? "selected" : ""}
          onClick={toggleClassParsed}
        >
          <span>Parsed</span>
        </button>
      </div>
    </>
  );
}
