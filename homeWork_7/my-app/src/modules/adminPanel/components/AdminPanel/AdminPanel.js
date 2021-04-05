import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import { themeContext } from '../../../../context/themeContext';
import Users from '../Users/Users';
import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';
import Albums from '../Albums/Albums';
import './AdminPanel.scss';

export default function AdminPanel() {
  const { theme } = useContext(themeContext);
  return (
    <div className={theme}>
      <Header />
      <Route path="/" exact component={Dashboard} />
      <Route path="/users" component={Users} />
      <Route path="/albums" component={Albums} />
    </div>
  );
}
