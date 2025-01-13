import React, { useState, useEffect } from "react";

const Switch = () => {
  const [color, setColor] = useState("white");

  const onClick = () => {
    // Toggle dark mode
    if (color === "white") {
      setColor("#F0E27B"); // Set text color to yellow
      document.body.style.backgroundColor = "#121212"; // Dark background
      document.body.style.color = "white"; // Light text color
      localStorage.setItem("mode", "dark"); // Save mode in localStorage
    } else {
      setColor("white"); // Set text color to white
      document.body.style.backgroundColor = "white"; // Light background
      document.body.style.color = "black"; // Dark text color
      localStorage.setItem("mode", "light"); // Save mode in localStorage
    }
  };

  // On initial load, check for saved mode from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("mode");
    if (savedMode === "dark") {
      setColor("#F0E27B");
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "white";
    } else {
      setColor("white");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      <div className="form-check form-switch mx-4">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={onClick}
          checked={color === "#F0E27B"} // Set the checkbox checked if in dark mode
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
