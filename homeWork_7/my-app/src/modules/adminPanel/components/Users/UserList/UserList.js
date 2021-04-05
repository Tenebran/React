import React from 'react';
import UserListItem from '../UserListItem/UserListItem';
import './UserList.scss';

export default function UserList({ usersList }) {
  return (
    <ul>
      <h3 className="users">Users:</h3>
      {usersList.map((list, index) => (
        <UserListItem key={list.id} list={list} index={++index} />
      ))}
    </ul>
  );
}
