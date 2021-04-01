import React, { useEffect } from "react";
import Row from "./row";
import Column from "./column";
import ChoiceList from "./choice-list";
import Label from "./label";
import styled from "styled-components";

const Divider = styled.hr`
  display: block;
  color: #5e5edb;
  width: 100%;
`;

const Factions = ({ choiceData, getChoiceData }) => {
  useEffect(
    () => {
      getChoiceData();
    },
    [getChoiceData]
  );

  if (Array.isArray(choiceData)) {
    return (
      <>
        <Column maxWidth="900px">
          <Row>
            <Label>I can't show you the faction choices yet.</Label>
          </Row>
        </Column>
      </>
    );
  } else {
    const selectedChoices = Object.keys(choiceData).map(playerName => {
      const playerChoices = choiceData[playerName].choices;
      const activeChoice = choiceData[playerName].selected;
      return (
        <>
          <Column
            style={{
              marginTop: "1em",
              marginBottom: "1em",
              padding: "1em"
            }}
          >
            <Row>
              <Label>{playerName}</Label>
            </Row>
            <Row style={{ flex: "1.5" }}>
              <ChoiceList playerChoices={playerChoices} />
              <Label style={{ textAlign: "right" }}>{activeChoice.name}</Label>
            </Row>
          </Column>
          <Divider />
        </>
      );
    });
    return (
      <>
        <Column maxWidth="900px">{selectedChoices}</Column>
      </>
    );
  }
};

export default Factions;
