import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import UserCard from "../../components/UserCard";
import axios from "axios";

const UserList = () => {
  
  const [user, setUser] = useState([])
  const getUser = () => {
    axios.get("https://reqres.in/api/users?page=2")
      .then(res =>
        {
          console.log(res)
          const dataUser = res.data.data
          console.log(dataUser)
          setUser(dataUser)
        }
      ).catch(err =>
        {
          console.log(err)
        }
      )
    }
  
  useEffect(() => {
    getUser()
  }, [])
  
  return (
    <>
      <Navbar />
      <section>
        <div class="container">                           
          <div className="row">
            <div className="mx-auto text-center lg:col-6">
              <h2>User List</h2>
              <p className="mt-4">
                View all the registered users in the payroll system, including employees and administrators. 
              </p>
            </div>
          </div>
        </div>
        <div className="justify-center p-4 mt-12 mb-0 row bg-gradient">
          <div className="lg:col-10">
            <div className="row">
              <UserCard users={ user } />
            </div>
          </div>
         </div>
      </section>
      <Footer/>
    </>
  );
};

export default UserList;
