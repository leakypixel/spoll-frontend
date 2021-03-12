import React, { useState, useCallback } from "react";
import User from "./components/user";
import Factions from "./components/factions";
import Column from "./components/column";
import Main from "./components/main";
import Label from "./components/label";
import Row from "./components/row";
import axios from "axios";

const API_URL = "http://localhost:8082";
const INITIAL_STATE = {
  isLoggedIn: false,
  name: "",
  password: "",
  factions: []
};

function App() {
  const [userData, setUserData] = useState(INITIAL_STATE);
  const [message, setMessage] = useState(null);

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
    [userData, setUserData]
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
        setMessage(null);
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
    setUserData(INITIAL_STATE);
  };

  return (
    <Main>
      <Column maxWidth="700px">
        <User
          setUserData={setUserData}
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
        {userData.isLoggedIn && (
          <Factions
            selectedFactions={userData.factions}
            userData={userData}
            getUserData={getUserData}
            saveUserData={saveUserData}
            setUserData={setUserData}
          />
        )}
      </Column>
    </Main>
  );
}

export default App;
