import PropTypes from 'prop-types';
import { Friend, Avatar, Status, Name} from './Friend.styled'

export function FriendsListItem({ avatar, name, isOnline }) {
  return (
    <Friend>
      <Status status={isOnline}>{isOnline}</Status>
      <Avatar src={avatar} alt={name}/>
      <Name>{name}</Name>
    </Friend>
  );
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
