import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import UsersListPage from './UserListPage/UserListPage';
import From from '../Form/UserForm';

export default function UserListPage() {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={match.path + '/'} exact component={UsersListPage}></Route>
      <Route path={match.path + '/form'} exact component={From}></Route>
    </Switch>
  );
}
