import React from "react";
import styled from "styled-components";

const RollDice = ({ currentDice, rollDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice-1" />
      </div>
      <p style={{ fontSize: "2rem" }}>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem;
  gap: 30px;
`;
