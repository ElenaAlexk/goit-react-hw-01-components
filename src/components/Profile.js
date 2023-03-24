import PropTypes from 'prop-types';

export default function Profile({
  avatar,
  username,
  tag,
  location,
  followers,
  views,
  likes,
}) {
  return (
    <div class="profile">
      <div class="description">
        <img src={avatar} alt={username} width="200" class="avatar" />
        <p class="name">{username}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers {followers}</span>
          <span class="quantity">1000</span>
        </li>
        <li>
          <span class="label">Views {views}</span>
          <span class="quantity">2000</span>
        </li>
        <li>
          <span class="label">Likes {likes}</span>
          <span class="quantity">3000</span>
        </li>
      </ul>
    </div>
  );
}
Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
