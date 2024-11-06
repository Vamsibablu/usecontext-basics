import ChildFn from "./child";

export default function ParentFn() {
  console.log("parent");
  return (
    <div>
      This is a parent component
      <ChildFn />
    </div>
  );
}
