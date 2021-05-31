import React from "react";
const FriendListItem = ({ avatar, name, isOnline }) => (
  <div>
    <ul class="friend-list">
      <li class="item">
        <span class="status">isOnline</span>
        <img class="avatar" src={avatar} alt="" width="48" />
        <p class="name">{name}</p>
      </li>
    </ul>
  </div>
);
export default FriendListItem;
