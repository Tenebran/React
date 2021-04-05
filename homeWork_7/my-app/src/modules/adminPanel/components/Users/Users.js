import React from 'react';
import useUsers from '../../hooks/useUsers';
import UserList from './UserList/UserList';

export default function Users() {
  const { usersList } = useUsers();

  return (
    <div className="pannel__content">
      <UserList usersList={usersList} />
    </div>
  );
}
