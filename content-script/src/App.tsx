/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import ReactJson from "react-json-view";
import { useState } from "react";
import ToggleButton from "./ToggleButton";
import ConfigPanel from "./ConfigPanel";

interface HookObject {
  collapseStringsAfter: {
    value: any;
    label: any;
  };
  onAdd: {
    value: any;
    label: any;
  };
  onEdit: {
    value: any;
    label: any;
  };
  onDelete: {
    value: any;
    label: any;
  };
  displayObjectSize: {
    value: any;
    label: any;
  };
  enableClipboard: {
    value: any;
    label: any;
  };
  theme: {
    value: any;
    label: any;
  };
  iconStyle: {
    value: any;
    label: any;
  };
  collapsed: {
    value: any;
    label: any;
  };
  indentWidth: {
    value: any;
    label: any;
  };
  displayDataTypes: {
    value: any;
    label: any;
  };
}

//@ts-ignore
function App({ json }) {
  const [showParsed, setShowParsed] = useState("Parsed");
  const [configPopup, setConfigPopup] = useState(false);
  const [configObject, setConfigObject] = useState<HookObject>();

  function getConfigObject(obj: any) {
    setConfigObject(obj);
  }

  const showConfigPanel = () => {
    setConfigPopup(!configPopup);
  };

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
      <ToggleButton onClickToggle={onClickToggle} />
      <button onClick={showConfigPanel} className="config-button">
        Edit Config
      </button>
      {configPopup && <ConfigPanel getConfigObject={getConfigObject} />}
      {showParsed == "Parsed" ? (
        <div style={{ padding: "16px", zIndex: "0" }}>
          <ReactJson
            src={json}
            theme={configObject?.theme.value}
            iconStyle={configObject?.iconStyle.value}
            indentWidth={configObject?.indentWidth.value}
            collapsed={configObject?.collapsed.value}
            collapseStringsAfterLength={
              configObject?.collapseStringsAfter.value
            }
            enableClipboard={configObject?.enableClipboard.value}
            displayDataTypes={configObject?.displayDataTypes.value}
            displayObjectSize={configObject?.displayObjectSize.value}
            onAdd={configObject?.onAdd.value}
            onEdit={configObject?.onEdit.value}
            onDelete={configObject?.onDelete.value}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
