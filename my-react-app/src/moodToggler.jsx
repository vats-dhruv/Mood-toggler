import React, { useState } from "react";

function MoodToggler({ name }) {
  const [mood, setMood] = useState("Happy");

  const toggleMood = () => {
    setMood((prevMood) => (prevMood === "Happy" ? "Sad" : "Happy"));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Hello, {name}!</h2>
      <h3>Current Mood: {mood}</h3>
      <button
        onClick={toggleMood}
        style={{
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#4caf50",
          color: "white",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Change Mood
      </button>
    </div>
  );
}

export default MoodToggler;

