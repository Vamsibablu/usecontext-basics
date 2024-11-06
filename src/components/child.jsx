import Profile1 from "./profile1";
import Profile2 from "./profile2";

export default function ChildFn() {
  console.log("child");
  return (
    <div>
      This is a Child component
      <Profile1 />
      <Profile2 />
    </div>
  );
}
