import React from "react";
import Column from "./column";
import Input from "./input";
import Button from "./button";
import Label from "./label";
import Row from "./row";

const User = ({ setUserData, userData, getUserData, register, logout }) => {
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
              value={userData.name}
              onChange={event => {
                const val = event.target.value;
                setUserData({ ...userData, name: val });
              }}
            />
          </Row>
          <Row>
            <Label>Password</Label>
            <Input
              type="text"
              name="password"
              value={userData.password}
              onChange={event =>
                setUserData({ ...userData, password: event.target.value })
              }
            />
          </Row>
          <Row>
            <Button onClick={getUserData}>Log in</Button>
            <Button onClick={register}>Register</Button>
          </Row>
        </>
      )}
    </Column>
  );
};

export default User;
