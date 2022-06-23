import PropTypes from 'prop-types';
import css from './UserProfile.module.css';

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
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={avatar}
          alt={username}
          className={css.avatar}
        />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.statsList}>
        <li className={css.statsItem}>
         <span>Followers</span>
         <span className={css.statsNumber}>{followers}</span>
        </li>
        <li className={css.statsItem}>
         <span>Views</span>
         <span className={css.statsNumber}>{views}</span>
        </li>
        <li className={css.statsItem}>
         <span>Likes</span>
         <span className={css.statsNumber}>{likes}</span>
        </li>
      </ul>
    </div>
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
