/* eslint-disable no-unused-vars */
// CustomerDashboard.jsx
import React from 'react';
import { Card, Button, Row, Col } from 'antd';
// import 'antd/dist/antd.css';

const { Meta } = Card;

const CustomerDashboard = () => {
  // Dummy product data
  const products = [
    { id: 1, title: 'Product 1', description: 'Description of Product 1' },
    { id: 2, title: 'Product 2', description: 'Description of Product 2' },
    { id: 3, title: 'Product 3', description: 'Description of Product 3' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ marginBottom: '20px' }}>Customer Dashboard</h2>

      <Row gutter={16}>
        <Col span={12}>
          <Card>
            <Meta title="Welcome, [Customer Name]!" description="Your recent orders and activities will be displayed here." />
            <Button type="primary" style={{ marginTop: '10px' }}>
              View Orders
            </Button>
          </Card>
        </Col>

        <Col span={12}>
          <Card>
            <Meta title="Recommended Products" description="Discover new products based on your preferences." />

            {/* Product Cards */}
            {products.map((product) => (
              <Card key={product.id} style={{ marginTop: '10px' }}>
                <Meta title={product.title} description={product.description} />
                <Button type="primary" style={{ marginTop: '10px' }}>
                  Add to Cart
                </Button>
              </Card>
            ))}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CustomerDashboard;
