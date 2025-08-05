import { useEffect, useMemo, useState } from "react";
import React from "react";

export const User1Context = React.createContext();

export default function User1Provider({ children }) {
  const [user1, setUser1] = useState(0);
  const [independetState, setIndState] = useState(false);
  useEffect(() => {
    console.log("user1 function changed"); // just checking if setuser1 is chaning every time or not
  }, [setUser1]);
  // we need to memoize the value because changing independent state also change value object hence it rerenders its consuming components
  const value = useMemo(() => {
    return { user1, setUser1 };
  }, [user1, setUser1]);

  console.log("context1 provider");
  console.log(independetState, "independent state");
  return (
    <User1Context.Provider value={value}>
      <button
        onClick={() => {
          setIndState(!independetState);
        }}
      >
        Change the independent state
      </button>

      {/* Children wont re render on changing state of user1 */}
      {children}
    </User1Context.Provider>
  );
}
