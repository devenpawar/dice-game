import React, { useState } from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 1);
    }
    setSelectedNumber(null); // Use null instead of undefined for consistency
  };

  // Reset Score Function
  const resetScore = () => {
    setScore(0);
  };

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          background: "#F1EFE8",
          width: "100%",
          padding: "1rem",
        }}
      >
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice} />
      <div
        className="btns"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "1rem",
        }}
      >
        <StyledButton onClick={resetScore}>Reset Score</StyledButton>
        <StyledButton onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide Rules" : "Show Rules"}
        </StyledButton>
      </div>
      {showRules && (
        <Rules>
          <p style={{ fontWeight: "bolder", fontSize: "20px" }}>
            How to play the DICE GAME!{" "}
          </p>
          <p style={{ fontSize: "20px" }}>
            <ul>
              <li>Select any number of your choice from 1 - 6</li>
              <li>Click on Dice Image</li>
              <li>
                After clicking on dice image if selected number is equal to the
                dice number you will get the selected number points else -1 will
                be deducted from your total score
              </li>
            </ul>
          </p>
        </Rules>
      )}
    </div>
  );
};

export default GamePlay;

// Styled Button Component with transition effects
const StyledButton = styled.button`
  width: 15rem;
  font-size: 1.5rem;
  padding: 15px;
  background: black;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transform: scale(1.05); /* Smooth scaling on hover */
  }

  &:active {
    transform: scale(0.95); /* Slight shrink on click */
  }
`;

const Rules = styled.div`
  padding: 10px;
  margin-top: 10px;
  background-color: #e2dfd2;
  border: 1px solid #e2dfd2;
  border-radius: 5px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0.5rem;
  text-align: center;
`;
