import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "stretch"};
  align-items: ${props => (props.alignItems ? props.alignItems : "center")};
  box-sizing: border-box;
  flex: 1;
  width: 100%;
  margin: 0.6em 0;
`;
export default Row;
