import { useRef } from "react";

function RefApp() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} placeholder="Focus Input" />
      <button onClick={handleClick}>Focus Input</button>
    </>
  );
}

export default RefApp;