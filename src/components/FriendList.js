import React from "react";
import FriendListItem from "./FriendListItem";
const FriendList = ({ friends }) => (
  <div>
    <h1>Список друзей</h1>
    <ul class="friend-list">
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem
            name={friend.name}
            tag={friend.tag}
            location={friend.location}
            avatar={friend.avatar}
            stats={friend.stats}
          />
        </li>
      ))}
    </ul>
  </div>
);
export default FriendList;
