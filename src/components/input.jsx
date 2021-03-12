import styled from "styled-components";
import React, { useState, useEffect, useCallback } from "react";

const Input = styled.input`
  background-color: #282c34;
  display: inline-block;
  color: white;
  font-size: 1em;
  line-height: 1em;
  margin: 0.6em;
  padding: 0.3em;
  flex: 2;
  min-width: 300px;
`;

export default Input;
