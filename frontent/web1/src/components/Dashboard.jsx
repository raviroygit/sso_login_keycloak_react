import React from 'react';

const Dashboard = () => {


    return (
      <div className="dashboard">
        <h1>Company Dashboard</h1>
        <div className="summary">
          <div className="summary-item">
            <h2>Total Employees</h2>
            <p>500</p>
          </div>
          <div className="summary-item">
            <h2>Projects in Progress</h2>
            <p>15</p>
          </div>
          <div className="summary-item">
            <h2>Upcoming Events</h2>
            <p>Company Picnic on Dec 15</p>
          </div>
        </div>
        <div className="recent-activity">
          <h2>Recent Activity</h2>
          <ul>
            <li>User1 completed Project A</li>
            <li>User2 submitted a leave request</li>
            <li>New project kickoff meeting scheduled</li>
          </ul>
        </div>
      </div>
    ); 
};

export default Dashboard;
