import { getRandomHexColor } from "../utils";
import {
  StatContainer,
  Title,
  StatList,
  StatListItem,
  Label,
  Percentage,
} from "./Statistics.styled";
import { DataProfile } from "../data";

interface Data {
  data: DataProfile[];
  title: string;
}

export const Statistics = ({ data, title }: Data) => {
  return (
    <StatContainer>
      {title && <Title>{title}</Title>}

      <StatList>
        {data.map(({ id, label, percentage }) => (
          <StatListItem
            key={id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatListItem>
        ))}
      </StatList>
    </StatContainer>
  );
};
