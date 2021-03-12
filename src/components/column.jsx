import styled from "styled-components";
import React, { useState, useEffect, useCallback } from "react";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: ${props => (props.maxWidth ? props.maxWidth : "100%")};
`;

export default Column;
