import React from 'react';
import useUsers from '../../../hooks/useUsers';
import UserList from '../UserList/UserList';

export default function UsersListPage() {
  const { usersList, deleteUsers } = useUsers();
  const deleteUser = userDelet => deleteUsers(userDelet);

  return (
    <div className="pannel__content">
      <UserList usersList={usersList} onDelete={deleteUser} />
    </div>
  );
}
