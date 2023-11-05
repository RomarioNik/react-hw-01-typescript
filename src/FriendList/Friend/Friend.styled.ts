import styled from "styled-components";
import { GlobalStyleTypes } from "../../constants/theme.types";

interface Theme {
  theme: GlobalStyleTypes;
}

interface ColorStatus {
  $status: string;
}

export const ListItem = styled.li<Theme>`
  width: 300px;
  padding: 15px;
  display: flex;
  gap: 15px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.bgComponent};
  box-shadow: ${({ theme }) => theme.shadow.shadowComponent};
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Indikator = styled.span<ColorStatus>`
  width: 20px;
  height: 20px;
  align-self: center;
  border-radius: 50%;
  background-color: ${({ $status }) => $status};
`;

export const Avatar = styled.img`
  width: 48px;
  border-radius: 7px;
`;

export const UserName = styled.span<Theme>`
  align-self: center;
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.mainText};
`;
