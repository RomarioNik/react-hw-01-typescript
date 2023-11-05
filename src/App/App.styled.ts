import styled from "styled-components";
import { Tabs, TabPanel } from "react-tabs";
import { GlobalStyleTypes } from "../constants/theme.types";

interface Theme {
  theme: GlobalStyleTypes;
}

export const Container = styled.div`
  max-width: 991px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
`;

export const TabsStyled = styled(Tabs)<Theme>`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondText};
  background-color: ${({ theme }) => theme.colors.bg};
  user-select: none;

  & .tabHead {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.mainText};
    border-radius: 5px 5px 0 0;
    border-color: #aaa;
    background-color: ${({ theme }) => theme.colors.bg};
  }

  & .tabHead:focus:after {
    background: transparent;
  }
`;

export const TabPanelStyled = styled(TabPanel)`
  display: flex;
  justify-content: center;
`;
