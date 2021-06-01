import React from "react";
import PropTypes from "prop-types";
import defaultImage from "./default.jpg";
const FriendListItem = ({ avatar, name, isOnline }) => (
  <div>
    <ul class="friend-list">
      <li class="item">
        <span class="status">{isOnline}</span>
        <img class="avatar" src={avatar} alt="" width="48" />
        <p class="name">{name}</p>
      </li>
    </ul>
  </div>
);
FriendListItem.defaultProps = {
  avatar: defaultImage,
};
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendListItem;
