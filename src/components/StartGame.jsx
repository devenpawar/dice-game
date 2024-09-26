import React from "react";
import styled from "styled-components";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <img
        src="/images/dices.png"
        alt=""
        style={{ height: "522px", width: "649px" }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "188px",
          width: "528px",
        }}
      >
        <h1
          style={{ fontWeight: "bold", fontSize: "96px", whiteSpace: "nowrap" }}
        >
          Dice Game!
        </h1>
        <Button onClick={toggle}>Play Now!</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;
  max-width: 1180px;
  align-items: center;
`;

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 1rem;
  border-radius: 10px;
  min-width: 200px;
  border: none;
  font-size: 30px;
  transition: 0.4s background ease-in;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    border: black solid 1px;
    transition: 0.3s background ease-in;
  }
`;
