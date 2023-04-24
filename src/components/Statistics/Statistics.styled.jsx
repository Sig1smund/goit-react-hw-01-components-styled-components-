import styled from "styled-components";
import {getRandomHexColor} from '../../utils/randomHexFunc'

export const Container = styled.section`
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 5px;
  width: 316px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
`;

export const StatsList = styled.ul`
  width: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const StatsItem = styled.li`
  margin: 5px;
  padding: 5px;
  width: 40px;
  height: 40px;
  box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.2),
  0px 1px 1px 0px rgba(0, 0, 0, 0.14),
  0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  text-align: center;
  align-items: center;
  justify-content: center;
  transform: scale(1);
  transition: transform 250ms ease-in-out;
  background-color: ${getRandomHexColor};
  &:first-child{
    margin-left: 0;
  }
  &:last-child{
    margin-right: 0px;
  }
  &:hover {
    transform: scale(1.10);
    cursor: pointer;
  }
`;

export const Label = styled.span`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: black;
`;

export const Percentage = styled.span`
  font-size: 12px;
  text-align: center;
  color: black;
`;
