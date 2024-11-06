import { useRef, useState } from "react";

export default function DebounceFn() {
  const [value, setValue] = useState("");
  const timer = useRef(null);
  function debounce(text) {
    console.log(text);
  }
  const handleChange = (e) => {
    // console.log('timer')
    setValue(e.target.value);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      debounce(e.target.value);
    }, 3000);
  };
  return (
    <div>
      <label htmlFor="search"></label>
      <input id="search" value={value} onChange={handleChange} />
    </div>
  );
}
