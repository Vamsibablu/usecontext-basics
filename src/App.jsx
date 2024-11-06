import "./App.css";
import ParentFn from "./components/parent";
import User1Provider from "./context/contextProvider1";
import User2Provider from "./context/contextProvider2";

function App() {
  console.log("app");
  return (
    <>
      <User1Provider>
        <User2Provider>
          <ParentFn />
        </User2Provider>
      </User1Provider>
    </>
  );
}

export default App;
