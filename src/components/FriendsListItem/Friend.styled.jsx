import styled from "styled-components";

export const Friend = styled.li`
  margin-top: 5px;
  margin-bottom: 5px;
  width: 306px;
  height: auto;
  padding: 5px;
  box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  background-color: #ccc;
  border-radius: 4px;
  transform: scale(1);
  transition: transform 250ms ease-in-out;
  &:hover {
      transform: scale(1.1);
  };  
`;

export const Avatar = styled.img`
  border-radius: 4%;
  display: inline-block;
  margin-right: 20px;
  width: 48px;
`;

export const Status = styled.span`
  border-radius: 50%;
  background-color: ${props => {
    switch (props.status) {
        case true:
            return 'green';
        case false:
            return 'red';
        default:
            return 'grey';
    }
  }};
  width: 15px;
  height: 15px;
  margin-right: 20px;
  margin-left: 20px;
`;

export const Name = styled.p`
  margin: 0;
  padding: 5px;
  font-size: 18px;
  font-weight:bold;
  text-align: center;
  font-size: 15px;
  color: #000;
  `;