/* eslint-disable no-unused-vars */
import React from 'react';
import { Card, Button, Row, Col } from 'antd';

const { Meta } = Card;

const ShopkeeperDashboard = () => {
  // Dummy data for shopkeeper
  const shopData = {
    shopName: 'My Bookstore',
    orders: 15,
    revenue: '$5000',
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ marginBottom: '20px' }}>Shopkeeper Dashboard</h2>

      <Card>
        <Meta title={`Welcome, Shopkeeper of ${shopData.shopName}!`} description={`You have ${shopData.orders} new orders.`} />
        <Button type="primary" style={{ marginTop: '10px' }}>
          Manage Orders
        </Button>
      </Card>

      <Card style={{ marginTop: '20px' }}>
        <Meta title="Shop Stats" description={`Total Revenue: ${shopData.revenue}`} />
      </Card>
    </div>
  );
};

export default ShopkeeperDashboard;
