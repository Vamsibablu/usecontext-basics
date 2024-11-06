import { useState } from "react";
import React from "react";

export const User1Context = React.createContext();

export default function User1Provider({ children }) {
  const [user1, setUser1] = useState(0);
  console.log("context1 provider");
  return (
    <User1Context.Provider value={{ user1, setUser1 }}>
      {children}
    </User1Context.Provider>
  );
}
