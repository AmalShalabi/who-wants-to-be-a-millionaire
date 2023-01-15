import { useRef } from "react";
import image from '../assets/millionaire.png'

export default function Start({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (
    <div className="start">
        <img src={image} alt="" />
      <input
        className="startInput"
        placeholder="Enter Your Name"
        ref={inputRef}
      />
      <button className="startButton" onClick={handleClick}>
        Start
      </button>
    </div>
  );
}
