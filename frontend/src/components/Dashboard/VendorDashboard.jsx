/* eslint-disable no-unused-vars */
// VendorDashboard.jsx
import React from 'react';
import { Card, Button, Row, Col } from 'antd';

const { Meta } = Card;

const VendorDashboard = () => {
  // Dummy data for vendor
  const vendorData = {
    companyName: 'Vendor Books',
    products: 30,
    sales: '$2000',
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ marginBottom: '20px' }}>Vendor Dashboard</h2>

      <Card>
        <Meta title={`Welcome, Vendor of ${vendorData.companyName}!`} description={`You have ${vendorData.products} products available.`} />
        <Button type="primary" style={{ marginTop: '10px' }}>
          Manage Products
        </Button>
      </Card>

      <Card style={{ marginTop: '20px' }}>
        <Meta title="Sales Stats" description={`Total Sales: ${vendorData.sales}`} />
      </Card>
    </div>
  );
};

export default VendorDashboard;
