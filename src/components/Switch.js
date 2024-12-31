import React, { useState, useEffect } from "react";

const Switch = () => {
  const [color, setColor] = useState("white");

  const onClick = () => {
    // Toggle between light and dark mode
    if (color === "white") {
      setColor("#F0E27B");
      document.body.classList.add("dark-mode"); // Add dark mode class to body
    } else {
      setColor("white");
      document.body.classList.remove("dark-mode"); // Remove dark mode class from body
    }
  };

  // Optional: Persist dark mode across page reloads
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setColor("#F0E27B");
      document.body.classList.add("dark-mode");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", color === "#F0E27B" ? "dark" : "light");
  }, [color]);

  return (
    <div>
      <div className="form-check form-switch mx-4">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={onClick}
          style={{ color: color, cursor: "pointer" }}
        />
        <label
          className="form-check-label"
          htmlFor="flexSwitchCheckDefault"
          style={{ color: color, cursor: "pointer" }}
        >
          Dark Mode
        </label>
      </div>
    </div>
  );
};

export default Switch;
