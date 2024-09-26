import React from "react";
import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;
const ScoreContainer = styled.div`
  max-width: 25rem;
  background-color: #e2dfd2;
  border-radius: 20px;
  padding: 0.5rem;
  h1 {
    font-size: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 500px;
  }
`;
