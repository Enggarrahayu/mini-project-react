import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import UserCard from "../../components/UserCard";
import axios from "axios";
import ReactPaginate from "react-paginate";

const UserList = () => {
  
  const [user, setUser] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const usersPerPage = 6
  const getUser = () => {
    axios.get("https://reqres.in/api/users?per_page=12")
      .then(res =>
        {
          const dataUser = res.data.data
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

  const offset = currentPage * usersPerPage
  const currentUsers = user.slice(offset, offset + usersPerPage)
  const pageCount = Math.ceil(user.length / usersPerPage)

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected)
  }
  
  return (
    <>
      <Navbar />
      <section>
        <div className="container">                           
          <div className="row">
            <div className="mx-auto mt-8 text-center lg:col-6 md:mt-0">
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
              <UserCard users={currentUsers} />                  
            </div>
          </div>
        </div>
        <div className="flex justify-center m-8">
          <ReactPaginate
            previousLabel={"← Prev"}
            nextLabel={"Next →"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName="flex items-center space-x-2"
            pageClassName="bg-white border border-gray-300 text-gray-700 rounded-md px-3 py-1 hover:bg-gray-200 transition"
            activeClassName="bg-primary text-white border border-primary"
            previousClassName="px-4 py-2 bg-gray-300 border border-gray-400 rounded-md hover:bg-gray-200 transition"
            nextClassName="px-4 py-2 bg-gray-300 border border-gray-400 rounded-md hover:bg-gray-200 transition"
            disabledClassName="opacity-50 cursor-not-allowed"
          />
        </div>
        
      </section>
      <Footer/>
    </>
  );
};

export default UserList;
