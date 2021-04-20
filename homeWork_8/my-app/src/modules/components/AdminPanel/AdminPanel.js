import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { themeContext } from '../../../context/themeContext';
import Users from '../Users/Users';
import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';
import PageNotFound from '../PageNotFound/PageNotFound';
import Albums from '../Albums/Albums';
import './AdminPanel.scss';

export default function AdminPanel() {
  const { theme } = useContext(themeContext);

  return (
    <div className={theme}>
      <Header />
      <Switch>
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/users" component={Users} />
        <Route path="/albums" component={Albums} />
        <Route path="/error" component={PageNotFound}></Route>
        <Route path="/" exact>
          <Redirect to="/dashboard" />
        </Route>
        <Route path="*" exact>
          <Redirect to="/error" />
        </Route>
      </Switch>
    </div>
  );
}
