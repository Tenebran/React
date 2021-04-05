import React from 'react';
import DashboardMenu from './DashboardMenu/DashboardMenu';
import './Dashboard.scss';

export default function Dashboard() {
  return (
    <div className="pannel__content">
      <div className="dashboard-welcome">
        <div className="dashboard-left">
          Welcome,
          <span className="dashboard-welcome__admin"> Admin</span>
        </div>
        <div className="dashboard-admin__settings">
          <input className="dashboard-admin__input" placeholder="Search...." />
          <div className="dashboard-admin__notifications">
            <span className="dashboard-admin__notifications_icon"></span>
          </div>
          <div className="dashboard-admin__profile"></div>
        </div>
      </div>
      <DashboardMenu />
      <div className="dashboard-sales"></div>
    </div>
  );
}
