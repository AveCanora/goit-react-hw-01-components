import React from "react";
import PropTypes from "prop-types";
import defaultImage from "./default.jpg";
const FriendListItem = ({ avatar, name, isOnline }) => (
  <div>
    <ul className="friend-list">
      <li className="item">
        <span className="status">{isOnline}</span>
        <img className="avatar" src={avatar} alt="" width="48" />
        <p className="name">{name}</p>
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
};
export default FriendListItem;
