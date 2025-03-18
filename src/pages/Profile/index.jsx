import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import UserdetailSection from "../../components/UserdetailSection";


const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return <p>Loading profile...</p>;
  }

 
  return (
    <>
      <Navbar />   
      <div className="flex flex-col items-center pt-6 bg-white shadow-xl mtext-center lg:text-left lg:mt-0">
           <h2 className="text-3xl font-semibold text-gray-800 lg:text-4xl">
              View User Profile
           </h2>
           <p className="mt-3 text-gray-600">
              View your personal information, including your profile details and contact information.
           </p>
        </div>
      <div className="flex flex-col items-center px-6 py-10 bg-white shadow-xl rounded-xl lg:flex-row lg:px-12 lg:py-16">
      <UserdetailSection user={ user }/>     
        
      </div>


      <Footer/>
    </>
  );
};

export default Profile;
