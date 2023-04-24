import PropTypes from 'prop-types';
import {Container, Title, StatsList, StatsItem, Label, Percentage} from './Statistics.styled'

export function Statistics({ title, stats }) {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <StatsList>
        {stats.map(elem => (
          <StatsItem key={elem.id}>
            <Label>{elem.label}</Label>
            <br />
            <Percentage>{elem.percentage}%</Percentage>
          </StatsItem>
        ))}
      </StatsList>
    </Container>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
