import PropTypes from 'prop-types';
import {Friend, Status, Avatar, FriendName} from './FriendList.styled';

export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
      <Friend>
       <Status isOnline={isOnline}></Status>
       <Avatar src={avatar} alt={name}/>
       <FriendName>{name}</FriendName>
      </Friend>
      )
}

FriendListItem.propTypes= {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}


