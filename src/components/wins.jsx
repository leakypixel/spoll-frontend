import React, { useEffect } from "react";
import Row from "./row";
import Column from "./column";
import Label from "./label";
import Button from "./button";

const LeaderboardEntry = ({ playerName, playerData }) => {
  const wins = Object.keys(playerData).reduce((acc, gameId) => {
    return Object.keys(playerData[gameId]).length > 1 ? acc + 1 : acc;
  }, 0);
  return (
    <Row>
      <Column>
        <Label>{playerName}</Label>
      </Column>
      <Column>
        <Label>{wins}</Label>
      </Column>
    </Row>
  );
};

const Wins = ({ winData, getWinData, addWin, games }) => {
  useEffect(
    () => {
      getWinData();
    },
    [getWinData]
  );

  return (
    <Row justifyContent={"space-between"} alignItems={"flex-start"}>
      <Column maxWidth="450px">
        <Row>
          <Label>{games[0].name}</Label>
        </Row>
        {games[0].players.map(player => (
          <Row>
            <Button onClick={() => addWin(games[0].id, player)}>
              {player} won
            </Button>
          </Row>
        ))}
      </Column>
      <Column maxWidth="800px">
        <Row>
          <Label>LEADERBOARD</Label>
        </Row>
        {Object.keys(winData).map(player => (
          <LeaderboardEntry playerData={winData[player]} playerName={player} />
        ))}
      </Column>
    </Row>
  );
};

export default Wins;
