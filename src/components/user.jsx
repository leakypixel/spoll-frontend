import React, { useEffect, useState } from "react";
import Column from "./column";
import Input from "./input";
import Button from "./button";
import Label from "./label";
import Row from "./row";

const User = ({
  setUserData,
  userData,
  getUserData,
  register,
  logout,
  getLogin
}) => {
  const [formData, setFormData] = useState({ name: "", password: "" });
  useEffect(() => {
    const savedDetails = getLogin();
    if (savedDetails && savedDetails.name && savedDetails.password) {
      setUserData({ ...savedDetails, isLoggedIn: true });
    }
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Column>
      {userData.isLoggedIn ? (
        <Row>
          <Label>{userData.name}</Label>
          <Button onClick={logout}>Log out</Button>
        </Row>
      ) : (
        <>
          <Row>
            <Label>Username</Label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={event => {
                const val = event.target.value;
                setFormData({ ...userData, name: val });
              }}
            />
          </Row>
          <Row>
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={event =>
                setFormData({ ...formData, password: event.target.value })
              }
            />
          </Row>
          <Row>
            <Button
              onClick={() => {
                setUserData(formData);
                getUserData();
              }}
            >
              Log in
            </Button>
            <Button onClick={register}>Register</Button>
          </Row>
        </>
      )}
    </Column>
  );
};

export default User;
