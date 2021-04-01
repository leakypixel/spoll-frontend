import styled from "styled-components";

const List = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  flex: 1;
  padding: 0.3em 0.6em;
`;

const ListItem = styled.li`
  flex: 1;
  flex-basis: 100%;
  padding: 0.2em;
  align-self: stretch;
`;

const ChoiceList = ({ playerChoices }) => {
  const revealed = playerChoices.map(choice => {
    return (
      <ListItem
        style={{
          backgroundColor: choice.unique ? "#2ad18b" : "#d13b3c"
        }}
      >
        <span style={{ color: "black" }}>{choice.name}</span>
      </ListItem>
    );
  });

  return <List>{revealed}</List>;
};
export default ChoiceList;
