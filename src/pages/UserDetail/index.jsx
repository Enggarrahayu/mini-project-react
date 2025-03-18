import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaBriefcase } from "react-icons/fa";
import UserdetailSection from "../../components/UserdetailSection";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  const getSingleUser= () => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then(res => {
        console.log("ini data", res);
        const dataUser = res.data.data;
        setUser(dataUser);
      })
      .catch(err => {
        console.log("ini data gagal", err);
      });
  };

  useEffect(() => {
    getSingleUser();
  }, []);
  
  return (
    <>
      <Navbar />   
      <div className="flex flex-col items-center pt-6 bg-white shadow-xl mtext-center lg:text-left lg:mt-0">
           <h2 className="text-3xl font-semibold text-gray-800 lg:text-4xl">
              View User Detail
           </h2>
           <p className="mt-3 text-gray-600">
              Get detailed information about each user, including their profile and contact details.
           </p>
        </div>
      <div className="flex flex-col items-center px-6 py-10 bg-white shadow-xl rounded-xl lg:flex-row lg:px-12 lg:py-16">
        <UserdetailSection user={user}/>
      </div>


      <Footer/>
    </>
  );
};

export default UserDetail;
