import React from "react";
import FriendListItem from "./FriendListItem";
import styles from "./FriendList.module.css";
const FriendList = ({ friends }) => (
  <div className={styles.container}>
    <h1>Список друзей</h1>
    <ul className={styles.friendlist}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem
            name={friend.name}
            avatar={friend.avatar}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  </div>
);
export default FriendList;
