import React from "react";
import { factions } from "common";
import { Multiselect } from "multiselect-react-dropdown";
import Row from "./row";
import Button from "./button";

const Factions = ({
  selectedFactions,
  userData,
  setUserData,
  saveUserData
}) => {
  console.log("userData", userData);
  return (
    <>
      <Row>
        <p>
          Choose 3 factions in preference order. The top one which nobody else
          has picked will be your faction for the game.
        </p>
      </Row>
      <Row />
      <Row>
        <Multiselect
          onSelect={selectedList =>
            setUserData({ ...userData, factions: selectedList })
          }
          selectedValues={userData.factions}
          options={factions}
          selectionLimit="3"
          displayValue="name"
          placeholder=""
          style={{
            chips: { background: "#a631a6", color: "black" },
            searchBox: {
              border: "none",
              borderBottom: "1px solid #5e5edb",
              borderRadius: "0px"
            },
            optionContainer: {
              background: "#21242b",
              border: "none",
              borderRadius: "2px"
            }
          }}
        />
      </Row>
      <Row>
        <Button onClick={saveUserData}>Save</Button>
      </Row>
    </>
  );
};

export default Factions;
