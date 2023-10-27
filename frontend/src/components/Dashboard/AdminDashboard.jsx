/* eslint-disable no-unused-vars */
import React from 'react';
import { Card, Button, Row, Col } from 'antd';

const { Meta } = Card;

const AdminDashboard = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ marginBottom: '20px' }}>Admin Dashboard</h2>

      <Card>
        <Meta title="Welcome, Admin!" description="Manage users, roles, and system settings." />
        <Button type="primary" style={{ marginTop: '10px' }}>
          Manage Users
        </Button>
      </Card>

      <Card style={{ marginTop: '20px' }}>
        <Meta title="System Stats" description="View overall system statistics and analytics." />
      </Card>
    </div>
  );
};

export default AdminDashboard;
