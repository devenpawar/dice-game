import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    if (selectedNumber) setError(""); // Clear error when number is selected
  }, [selectedNumber]);

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
      alert("Congratulations! You guessed right!"); // Feedback for correct guess
    } else {
      setScore((prev) => prev - 1);
    }
    setSelectedNumber(null); // Use null instead of undefined for consistency
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <Container>
      <Header>
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </Header>
      <RollDice currentDice={currentDice} rollDice={rollDice} />
      <ButtonContainer>
        <StyledButton onClick={resetScore}>Reset Score</StyledButton>
        <StyledButton onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide Rules" : "Show Rules"}
        </StyledButton>
      </ButtonContainer>
      {showRules && <RulesComponent />}
    </Container>
  );
};

export default GamePlay;

// Styled components

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  box-sizing: border-box; /* Include padding in total width */
`;

const Header = styled.div`
  display: flex;
  flex-direction: column; /* Stack elements on small screens */
  align-items: center; /* Center items on small screens */
  background: #f1efe8;
  width: 100%;
  padding: 1rem;

  @media (min-width: 768px) {
    flex-direction: row; /* Horizontal layout on larger screens */
    justify-content: space-between;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    flex-direction: row; /* Horizontal layout on larger screens */
    justify-content: space-around;
  }
`;

const StyledButton = styled.button`
  width: 80%; /* Full width on small screens */
  max-width: 15rem; /* Limit width on larger screens */
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
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Rules = styled.div`
  padding: 10px;
  margin-top: 10px;
  background-color: #e2dfd2;
  border: 1px solid #e2dfd2;
  border-radius: 5px;
  width: 80%;
  margin: 0 auto;
  text-align: center;

  @media (min-width: 768px) {
    width: 60%; /* Wider on larger screens */
  }
`;

const RulesComponent = () => (
  <Rules>
    <p style={{ fontWeight: "bolder", fontSize: "20px" }}>
      How to play the DICE GAME!
    </p>
    <p style={{ fontSize: "20px" }}>
      <ul>
        <li>Select any number of your choice from 1 - 6</li>
        <li>Click on Dice Image</li>
        <li>
          After clicking on dice image if selected number is equal to the dice
          number you will get the selected number points else -1 will be
          deducted from your total score
        </li>
      </ul>
    </p>
  </Rules>
);
