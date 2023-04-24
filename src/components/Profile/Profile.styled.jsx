import styled from "styled-components";

export const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  `;

export const ProfileBox = styled.div`
  width: 316px;
  height: auto;
  align-items: center;
  justify-content: center;
  padding: 15px 0 0 0;

  border-radius: 4px;

  box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.2),
  0px 1px 1px 0px rgba(0, 0, 0, 0.14),
  0px 1px 3px 0px rgba(0, 0, 0, 0.12);

  background-color: #fff;
  `;

export const Avatar = styled.img`
  display: block;
  border-radius: 50%;
  margin-top: 50px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 150px;
  height: 150px;  
`;

export const ProfileDetails = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ProfileDetailsItem = styled.li`
  margin: 0;
  padding: 5px;
  font-size: 18px;
  font-weight:bold;
  text-align: center;
  font-size: 15px;
  color: grey;
  transition: color 250ms ease-in-out;

  &:first-child {
    font-weight:bold;
    font-size: 20px;
    color: #000;
  };

    &:hover {
     color: burlywood;
  };
`;

export const Stats = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0 0 0;
  padding: 0;
  width: auto;
  list-style: none;
  align-items: left;
`;

export const StatsItem = styled.li`
border: 1px solid #ececec;
  flex-direction: column;
  width: 100px;
  display: flex;
  height: 50px;
  justify-content: center;
  background-color: #ccc;
  border-radius: 4px;
  transition: background-color 250ms ease-in-out;
  
  &:hover {
      background-color: burlywood;
  }
`;

export const Label = styled.span`
  font-size: 10px;
  color: grey;
  text-align: center;
`;

export const Quantity = styled.span`
  color: #000;
  font-size: 15px;
  text-align: center;
`;


