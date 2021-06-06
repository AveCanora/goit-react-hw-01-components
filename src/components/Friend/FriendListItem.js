import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../default.jpg";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <div>
    <span
      className={isOnline ? styles.friendIsOnline : styles.friendIsOffline}
    ></span>
    <img className={styles.avatar} src={avatar} alt="" width="48" />
    <p className={styles.name}>{name}</p>
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
