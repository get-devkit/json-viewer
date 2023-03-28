/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import ReactJson from "react-json-view";

//@ts-ignore
function App({ json }) {
  return (
    <div style={{ padding: "16px" }}>
      <ReactJson src={json} />
    </div>
  );
}

export default App;
