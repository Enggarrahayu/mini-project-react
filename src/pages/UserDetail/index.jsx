import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaBriefcase } from "react-icons/fa";

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
        {/* User Image Section */}       
        <div className="flex justify-center lg:w-1/2">
          <div className="relative group">
            <img
              className="object-cover w-40 h-40 mx-auto transition-transform duration-300 border-4 border-gray-300 rounded-full shadow-lg group-hover:scale-110"
              src={user?.avatar}
              alt="User Avatar"
            />
            <h3 className="mx-auto text-center text-xxl">{user?.first_name} {user?.last_name}</h3>
            <div className="flex">
            <FaBriefcase size={18} />  
            <p className="mx-auto text-sm text-center text-gray-500"> Account Officer</p>
            </div>           
          </div>
        </div>

        {/* User Details Section */}
        <div className="mt-6 text-center lg:w-1/2 lg:text-left lg:mt-0">
          
          <ul className="mt-6 space-y-3 text-dark">
            <li className="flex items-center px-4 py-2 bg-gray-100 rounded-lg shadow-sm">
              <span className="font-medium text-gray-700">First Name: </span>
              <span className="ml-2 text-gray-900">{user?.first_name}</span>
            </li>
            <li className="flex items-center px-4 py-2 bg-gray-100 rounded-lg shadow-sm">
              <span className="font-medium text-gray-700">Last Name: </span>
              <span className="ml-2 text-gray-900">{user?.last_name}</span>
            </li>
            <li className="flex items-center px-4 py-2 bg-gray-100 rounded-lg shadow-sm">
              <span className="font-medium text-gray-700">Email: </span>
              <span className="ml-2 text-gray-900">{user?.email}</span>
            </li>
          </ul>

          {/* Action Buttons */}
          <div className="flex justify-center mt-8 space-x-4 lg:justify-start">
            <button className="px-5 py-2 text-white transition rounded-lg shadow-md bg-primary hover:bg-blue-600">
              Edit Profile
            </button>
            <button className="px-5 py-2 transition border rounded-lg shadow-md text-primary border-primary hover:bg-blue-100">
              Contact User
            </button>
          </div>
        </div>
      </div>


      <Footer/>
    </>
  );
};

export default UserDetail;
