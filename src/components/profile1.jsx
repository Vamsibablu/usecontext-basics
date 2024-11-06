import { useContext } from "react";
import { User1Context } from "../context/contextProvider1";

const Profile1 = () => {
  const { user1, setUser1 } = useContext(User1Context);
  console.log("profile1");
  return (
    <div>
      User1 = {user1}
      <button
        onClick={() => {
          setUser1(user1 + 1);
        }}
      >
        change user1
      </button>
    </div>
  );
};

export default Profile1;
