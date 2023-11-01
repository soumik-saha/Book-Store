/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// // VendorDashboard.jsx
// import React from 'react';
// import { Card, Button, Row, Col } from 'antd';

// const { Meta } = Card;

// const VendorDashboard = () => {
//   // Dummy data for vendor
//   const vendorData = {
//     companyName: 'Vendor Books',
//     products: 30,
//     sales: '$2000',
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2 style={{ marginBottom: '20px' }}>Vendor Dashboard</h2>

//       <Card>
//         <Meta title={`Welcome, Vendor of ${vendorData.companyName}!`} description={`You have ${vendorData.products} products available.`} />
//         <Button type="primary" style={{ marginTop: '10px' }}>
//           Manage Products
//         </Button>
//       </Card>

//       <Card style={{ marginTop: '20px' }}>
//         <Meta title="Sales Stats" description={`Total Sales: ${vendorData.sales}`} />
//       </Card>
//     </div>
//   );
// };

// export default VendorDashboard;


// VendorDashboard.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import BookTable from "./Vendor/BookTable"; // You'll need to create a BookTable component for displaying books
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";

const VendorDashboard = () => {
  const [books, setBooks] = useState([]);
  const [bookCount, setBookCount] = useState(0);

  useEffect(() => {
    // Fetch book count and book data for the vendor
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        setBookCount(response.data.count);
        setBooks(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Vendor Dashboard</h1>
        <Link to="/books/vendor/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">Book Count: {bookCount}</h2>
      </div>

      <BookTable books={books} />
    </div>
  );
};

export default VendorDashboard;
