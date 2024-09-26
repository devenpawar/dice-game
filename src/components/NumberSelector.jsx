import React, { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({
  selectedNumber,
  setSelectedNumber,
  error,
  setError,
}) => {
  const numberArray = [1, 2, 3, 4, 5, 6];
  const numberSelectorHandler = (boxNumber) => {
    setSelectedNumber(boxNumber);
    setError("");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p style={{ color: "red", margin: "1rem", fontWeight: "bold" }}>
        {error}
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {numberArray.map((boxNumber, i) => (
          <Box
            key={i}
            isSelected={selectedNumber === boxNumber} // Check if the box is selected
            onClick={() => numberSelectorHandler(boxNumber)}
          >
            <h2>{boxNumber}</h2>
          </Box>
        ))}
      </div>
      <p style={{ fontSize: "24px", fontWeight: "bold", marginTop: "0.5rem" }}>
        Select Number
      </p>
    </div>
  );
};

export default NumberSelector;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  transition: background-color 0.3s ease, color 0.3s ease;

  h2 {
    margin: 0;
  }
`;
