import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import UserCard from "../../components/UserCard";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { FaSearch } from "react-icons/fa";

const UserList = () => {
  
  const [user, setUser] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [search, setSearch] = useState("")
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
  
  const filteredUsers = user.filter(item => 
    `${item.first_name} ${item.last_name}`.toLowerCase().includes(search.toLowerCase())
  );
  
  useEffect(() => {
    getUser()
  }, [])

  const offset = currentPage * usersPerPage
  const currentUsers = filteredUsers.slice(offset, offset + usersPerPage)
  const pageCount = Math.ceil(filteredUsers.length / usersPerPage)

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected)
  }
  
  return (
    <>
      <Navbar />
      <section>
        <div className="container mt-4">                           
          <div className="row">
            <div className="mx-auto mt-8 text-center lg:col-6 md:mt-0">
              <h2>User List</h2>
              <p className="mt-4">
                View all the registered users in the payroll system, including employees and administrators. 
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-6 item">
            <div className="p-3 m-1 rounded-md bg-theme-light/90">
              <FaSearch size={20} className="text-primary"/>
            </div>
            <input
              type="text"
              placeholder="Search users..."
              className="w-full max-w-md px-4 py-2 border border-gray-200 rounded-md"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
        </div>
        <div className="justify-center p-4 mt-8 mb-0 row bg-gradient">
        
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
            activeClassName="bg-black text-white"
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
