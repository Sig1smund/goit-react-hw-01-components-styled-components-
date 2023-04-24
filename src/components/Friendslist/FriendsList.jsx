import PropTypes from 'prop-types';
import { FriendsListItem } from '../FriendsListItem/FriendsListItem';
import { FriendsBox } from './FriendsList.styled';

export function FriendsList({ friends }) {
  return (
    <FriendsBox>
      {friends.map(friend => (
        <FriendsListItem
          key={friend.id}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
          name={friend.name}
        />
      ))}
    </FriendsBox>
  );
}

FriendsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
