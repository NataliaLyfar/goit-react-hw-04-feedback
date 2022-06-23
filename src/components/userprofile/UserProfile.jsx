import PropTypes from 'prop-types';
import {Profile, Description, Avatar, Name, Tag, Location, StatsList, StatsItem, StatsNumber, StatsLabel} from './UserProfile.styled';

export const UserProfile = ({userData}) => {
  const {avatar,
         username,
         tag,
         location,
          stats: {
            followers,
             views,
             likes
          }
        } = userData;
  return (
    <Profile>
      <Description>
        <Avatar src={avatar} alt={username}/>
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <StatsList>
        <StatsItem>
         <StatsLabel>Followers</StatsLabel>
         <StatsNumber>{followers}</StatsNumber>
        </StatsItem>
        <StatsItem>
         <StatsLabel>Views</StatsLabel>
         <StatsNumber>{views}</StatsNumber>
        </StatsItem>
        <StatsItem>
         <StatsLabel>Likes</StatsLabel>
         <StatsNumber>{likes}</StatsNumber>
        </StatsItem>
      </StatsList>
    </Profile>
    );
    }

    UserProfile.propTypes = {
userData: PropTypes.shape({
avatar: PropTypes.string.isRequired,
username: PropTypes.string.isRequired,
tag: PropTypes.string.isRequired,
location: PropTypes.string.isRequired,
stats: PropTypes.shape(PropTypes.number.isRequired),
    })
}
