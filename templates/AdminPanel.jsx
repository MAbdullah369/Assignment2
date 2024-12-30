import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Content from './Content';

const AdminPanel = () => {
  return (
    <div className="admin-panel">
      <Navbar />
      <div className="panel-body">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
};

export default AdminPanel;
