// /* eslint-disable no-unused-vars */
// import React from 'react';
// import { Card, Button, Row, Col } from 'antd';

// const { Meta } = Card;

// const ShopkeeperDashboard = () => {
//   // Dummy data for shopkeeper
//   const shopData = {
//     shopName: 'My Bookstore',
//     orders: 15,
//     revenue: '$5000',
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2 style={{ marginBottom: '20px' }}>Shopkeeper Dashboard</h2>

//       <Card>
//         <Meta title={`Welcome, Shopkeeper of ${shopData.shopName}!`} description={`You have ${shopData.orders} new orders.`} />
//         <Button type="primary" style={{ marginTop: '10px' }}>
//           Manage Orders
//         </Button>
//       </Card>

//       <Card style={{ marginTop: '20px' }}>
//         <Meta title="Shop Stats" description={`Total Revenue: ${shopData.revenue}`} />
//       </Card>
//     </div>
//   );
// };

// export default ShopkeeperDashboard;


/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import BooksTable from "../Books/BooksTable";
import BooksCard from "../Books/BooksCard";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books`)
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
