import styled from "styled-components";

export const Table = styled.table`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 25px;
  width: 600px;
`;

export const Head = styled.th`
  border: 1px solid black;
  text-align: center;
  background-color: blue;
  color: white;
`;

export const Data = styled.td`
  border: 1px solid black;
  text-align: center;
`;

export const Row = styled.tr`
&:hover {
    background-color: blue;
    color: white;
};
`;