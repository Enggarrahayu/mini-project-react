import React from "react";
import { Link } from "react-router-dom";
import { FaBriefcase } from "react-icons/fa";
const UserdetailSection = ({user}) => {
  return (
    <>
<div className="flex justify-center lg:w-1/2">
          <div className="relative group">
            <img
              className="object-cover w-40 h-40 mx-auto transition-transform duration-300 border-4 border-gray-300 rounded-full shadow-lg group-hover:scale-110"
              src={user.avatar}
              alt="User Avatar"
            />
            <h3 className="mx-auto text-center text-xxl">{user.first_name} {user.last_name}</h3>
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
            <button className="px-5 py-2 text-white transition rounded-lg shadow-md bg-primary hover:bg-orange-200 hover:text-primary hover:border hover:border-primary">
              Edit Profile
            </button>
            <button className="px-5 py-2 transition border rounded-lg shadow-md text-primary border-primary hover:bg-blue-100">
              Contact User
            </button>
          </div>
        </div>
      
    </>
  );
};

export default UserdetailSection;
