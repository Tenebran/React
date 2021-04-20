import React from 'react';
import UserListItem from '../UserListItem/UserListItem';
import './UserList.scss';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default function UserList({ usersList, onDelete }) {
  return (
    <ul>
      <h3 className="users">USERS:</h3>

      <Link to="users/form">
        <Button variant="contained" className="button">
          Add
        </Button>
      </Link>
      {usersList.map((list, index) => (
        <UserListItem key={list.id} list={list} index={++index} onDelete={onDelete} />
      ))}
    </ul>
  );
}
