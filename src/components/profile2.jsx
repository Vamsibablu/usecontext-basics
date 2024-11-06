import { useContext } from "react";
import { User2Context } from "../context/contextProvider2";

const Profile2 = () => {
  const { user2, setUser2 } = useContext(User2Context);
  console.log("profile2");
  return (
    <div>
      User1 = {user2}
      <button
        onClick={() => {
          setUser2(user2 + 1);
        }}
      >
        change user2
      </button>
    </div>
  );
};

export default Profile2;
