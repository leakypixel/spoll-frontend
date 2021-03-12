import styled from "styled-components";
import React, { useState, useEffect, useCallback } from "react";

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: stretch;
  align-items: center;
  flex: 1;
  width: 100%;
  margin: 0.6em 0;
`;

export default Row;
