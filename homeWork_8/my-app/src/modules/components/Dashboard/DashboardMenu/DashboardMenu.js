import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardMenu.scss';

export default function DashboardMenu() {
  return (
    <div className="dashboard-menu">
      <Link to="/users" className="dashboard-menu__users">
        <span className="dashboard-menu__title">Users</span>
      </Link>

      <Link to="/albums" className="dashboard-menu__albums">
        <span className="dashboard-menu__title">Albums</span>
      </Link>
    </div>
  );
}
