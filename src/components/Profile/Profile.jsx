import PropTypes from 'prop-types';
import { Container, ProfileBox, Avatar, ProfileDetails, ProfileDetailsItem, Stats, StatsItem, Label, Quantity } from './Profile.styled.jsx';

export function Profile({ avatar, tag, location, username, stats }) {
  return (
    <Container>
      <ProfileBox>
        <Avatar src={avatar} alt={username}/>
        <ProfileDetails>
          <ProfileDetailsItem>{username}</ProfileDetailsItem>
          <ProfileDetailsItem>@{tag}</ProfileDetailsItem>
          <ProfileDetailsItem>{location}</ProfileDetailsItem>
        </ProfileDetails>
        <Stats>
          <StatsItem>
            <Label>Followers</Label>
            <Quantity>{stats.followers}</Quantity>
          </StatsItem>
          <StatsItem>
            <Label>Views</Label>
            <Quantity>{stats.views}</Quantity>
          </StatsItem>
          <StatsItem>
            <Label>Likes</Label>
            <Quantity>{stats.likes}</Quantity>
          </StatsItem>
        </Stats>
      </ProfileBox>
    </Container>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
