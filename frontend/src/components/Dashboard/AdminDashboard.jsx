/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import React from 'react';
// import { Card, Button, Row, Col } from 'antd';

// const { Meta } = Card;

// const AdminDashboard = () => {
//   return (
//     <div style={{ padding: '20px' }}>
//       <h2 style={{ marginBottom: '20px' }}>Admin Dashboard</h2>

//       <Card>
//         <Meta title="Welcome, Admin!" description="Manage users, roles, and system settings." />
//         <Button type="primary" style={{ marginTop: '10px' }}>
//           Manage Users
//         </Button>
//       </Card>

//       <Card style={{ marginTop: '20px' }}>
//         <Meta title="System Stats" description="View overall system statistics and analytics." />
//       </Card>
//     </div>
//   );
// };

// export default AdminDashboard;



// VendorDashboard.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import UserTable from "./Admin/UserTable"; // You'll need to create a UserTable component for displaying users
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    // Fetch user count and user data for the admin
    axios
      .get("http://localhost:5555/users")
      .then((response) => {
        setUserCount(response.data.count);
        setUsers(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Admin Dashboard</h1>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">User Count: {userCount}</h2>
      </div>

      <UserTable users={users} />
    </div>
  );
};

export default AdminDashboard;
