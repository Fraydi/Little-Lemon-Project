import React from "react";
import { useNavigate } from "react-router-dom";
import "./Button.css";

function Button({ title, navigateTo }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(navigateTo);
  }

  return (
    <button className="button" onClick={handleClick} aria-label="On Click">
      {title}
    </button>
  );
}

export default Button;
