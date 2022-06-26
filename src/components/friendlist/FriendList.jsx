import PropTypes from 'prop-types';
import {List} from './FriendList.styled';
import {FriendListItem} from './FriendListItem';
import friends from 'data/friends.json';

export const FriendList = () => {
    return (
      <List friends={friends}>
        {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
        />
       ))}
      </List>
    )
};

FriendList.propTypes= {friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  )
};

