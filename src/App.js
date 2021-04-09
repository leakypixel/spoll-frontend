import React, { useState, useCallback } from "react";
import User from "./components/user";
import Factions from "./components/factions";
import FactionChoices from "./components/faction-choices";
import Column from "./components/column";
import Main from "./components/main";
import Label from "./components/label";
import Row from "./components/row";
import axios from "axios";

const API_URL = "https://spoll.longurl.co.uk";
const USER_INITIAL_STATE = {
  isLoggedIn: false,
  name: "",
  password: "",
  factions: []
};

const CHOICE_INITIAL_STATE = {};

function App() {
  const [userData, setUserData] = useState(USER_INITIAL_STATE);
  const [choiceData, setChoiceData] = useState(CHOICE_INITIAL_STATE);
  const [message, setMessage] = useState(null);

  const getChoiceData = useCallback(
    async () => {
      const { data } = await axios.get(`${API_URL}/votes`);
      if (data.error) {
        setMessage(
          `The following players have voted: ${data.voted.join(", ")}`
        );

        setChoiceData(data.voted);
      } else {
        setMessage(null);
        setChoiceData(data);
      }
    },
    [setChoiceData]
  );
  const getUserData = useCallback(
    async () => {
      const { data } = await axios.post(`${API_URL}/user/${userData.name}`, {
        password: userData.password
      });
      if (data.error) {
        setMessage(data.error.message);
      } else {
        setMessage(null);
        setUserData({ ...userData, factions: data.factions, isLoggedIn: true });
      }
    },
    [setUserData, userData]
  );

  const saveUserData = useCallback(
    async () => {
      const { data } = await axios.put(`${API_URL}/vote/${userData.name}`, {
        password: userData.password,
        factions: userData.factions
      });
      if (data.error) {
        setMessage(data.error.message);
      } else {
        setMessage("data saved");
        setUserData({ ...userData, factions: data.factions });
      }
    },
    [userData, setUserData]
  );

  const register = useCallback(
    async () => {
      const { data } = await axios.put(`${API_URL}/register/${userData.name}`, {
        password: userData.password
      });
      if (data.error) {
        setMessage(data.error.message);
      } else {
        setMessage(null);
        setUserData({ ...userData, factions: data.factions, isLoggedIn: true });
      }
    },
    [userData, setUserData]
  );

  const logout = () => {
    setMessage(null);
    setUserData(USER_INITIAL_STATE);
  };

  const updateUserData = userData => {
    setMessage(null);
    setUserData(userData);
  };

  const revealDate = 1618077600 * 1000;
  const reveal = Date.now() >= revealDate;

  return (
    <Main>
      <Column maxWidth="90vw">
        <User
          setUserData={updateUserData}
          userData={userData}
          register={register}
          getUserData={getUserData}
          logout={logout}
        />
        {message && (
          <Row>
            <Label>{message}</Label>
          </Row>
        )}
        <Row />
        {userData.isLoggedIn &&
          !reveal && (
            <Factions
              selectedFactions={userData.factions}
              userData={userData}
              getUserData={getUserData}
              saveUserData={saveUserData}
              setUserData={updateUserData}
            />
          )}
        {userData.isLoggedIn && (
          <FactionChoices
            choiceData={choiceData}
            getChoiceData={getChoiceData}
          />
        )}
      </Column>
    </Main>
  );
}

export default App;
