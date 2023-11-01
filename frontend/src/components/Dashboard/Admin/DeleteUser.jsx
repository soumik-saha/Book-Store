/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import BackButton from './BackButtonForAdmin';
import Spinner from '../../Spinner';
import { useSnackbar } from "notistack";

const DeleteUser = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteUser = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/users/${id}`)
      .then((response) => {
        setLoading(false);
        enqueueSnackbar('User Deleted Successfully', { variant: 'success' })
        navigate("/dashboard/admin");
      })
      .catch((error) => {
        setLoading(false);
        // alert("An error happened. Please check console");
        enqueueSnackbar('Error', { variant: 'error' })
        console.log(error);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl">Delete User</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Are you sure to delete this user?</h3>

        <button
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={handleDeleteUser}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteUser;
