import { useState } from "react";
import React from "react";

export const User2Context = React.createContext();

export default function User2Provider({ children }) {
  const [user2, setUser2] = useState(1);
  console.log("context2 provider");
  return (
    <User2Context.Provider value={{ user2, setUser2 }}>
      {children}
    </User2Context.Provider>
  );
}
