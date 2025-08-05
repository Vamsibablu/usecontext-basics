import { useState } from "react";
import "./App.css";
import DebounceFn from "./components/debounce";
import ParentFn from "./components/parent";
import User1Provider from "./context/contextProvider1";
import User2Provider from "./context/contextProvider2";

function App() {
  const [appState, setAppState] = useState(false); // this state change triggers entire app to re-render even the children
  console.log("app");
  return (
    <>
      <button
        onClick={() => {
          setAppState(!appState);
        }}
      >
        Change App State
      </button>
      <User1Provider>
        <User2Provider>
          <ParentFn />
        </User2Provider>
      </User1Provider>
    </>
  );
}

export default App;
