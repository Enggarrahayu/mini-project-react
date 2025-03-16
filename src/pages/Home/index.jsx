import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FaUser, FaClock, FaDollarSign, FaMoneyBillWave } from "react-icons/fa";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import axios from "axios";
import ReactPaginate from "react-paginate";
const Home = () => {

  const [user, setUser] = useState([])
  const usersPerPage = 6
  const [currentPage, setCurrentPage] = useState(0)
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
 
  const payrollSummary = [
    { title: "Total Employees", value: "150", icon: <FaUser className="text-2xl text-blue-600" /> },
    { title: "Pending Payrolls", value: "5", icon: <FaClock className="text-2xl text-yellow-600" /> },
    { title: "Total Payroll Cost", value: "$150,000", icon: <FaDollarSign className="text-2xl text-green-600" /> },
    { title: "Upcoming Tax Deductions", value: "$10,000", icon: <FaMoneyBillWave className="text-2xl text-red-600" /> },
  ];

  const transactions = [
    { employeeId: 1, date: "Mar 26, 2025", amount: "$4800", status: "Processing" },
    { employeeId: 2, date: "Mar 28, 2025", amount: "$5200", status: "Failed" },
    { employeeId: 3, date: "Mar 25, 2025", amount: "$5000", status: "Paid" },
    { employeeId: 4, date: "Mar 26, 2025", amount: "$4800", status: "Processing" },
    { employeeId: 5, date: "Mar 28, 2025", amount: "$5200", status: "Failed" },
    { employeeId: 6, date: "Mar 25, 2025", amount: "$5000", status: "Paid" },
    { employeeId: 7, date: "Mar 26, 2025", amount: "$4800", status: "Processing" },
    { employeeId: 8, date: "Mar 28, 2025", amount: "$5200", status: "Failed" },
    { employeeId: 9, date: "Mar 25, 2025", amount: "$5000", status: "Paid" },
    { employeeId: 10, date: "Mar 26, 2025", amount: "$4800", status: "Processing" },
    { employeeId: 11, date: "Mar 28, 2025", amount: "$5200", status: "Failed" },
    { employeeId: 12, date: "Mar 28, 2025", amount: "$5200", status: "Failed" },
  ];

  const leaveRequests = ["Alice - Sick Leave", "Bob - Annual Leave", "Charlie - Remote Work"];

  const mergedData = transactions.map(t => ({
    ...t,
    employeeName: user.find(u => u.id === t.employeeId)?.first_name || "Unknown"
  }));

  const offset = currentPage * usersPerPage;
  const paginatedData = mergedData.slice(offset, offset + usersPerPage);
  const pageCount = Math.ceil(mergedData.length / usersPerPage);
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected)
  }
       
  useEffect(() => {
    getUser()
  }, [])
    
    return (
    <>
      <Navbar />
      <div className="min-h-screen px-12 py-6 bg-white">
        <h1 className="mt-8 mb-5">Payroll Dashboard</h1>

        {/* Payroll Summary */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {payrollSummary.map((item, index) => (
            <div key={index} className="flex items-center p-4 space-x-4 bg-white rounded-lg shadow">
              {item.icon}
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-2xl font-bold">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Transactions */}
        <div className="p-4 mt-6 bg-white rounded-lg shadow">
          <h2 className="mb-3 text-xl font-semibold">Recent Payroll Transactions</h2>
          <table className="w-full border border-collapse border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border border-gray-300">Employee</th>
                <th className="p-2 border border-gray-300">Date</th>
                <th className="p-2 border border-gray-300">Amount</th>
                <th className="p-2 border border-gray-300">Status</th>
              </tr>
            </thead>
            <tbody>
            {paginatedData.map((t, index) => (
              <tr key={index} className="text-center">
                <td className="p-2 border border-gray-300">{t.employeeName}</td>
                <td className="p-2 border border-gray-300">{t.date}</td>
                <td className="p-2 border border-gray-300">{t.amount}</td>
                <td className={`border border-gray-300 p-2 font-semibold 
                  ${t.status === "Paid" ? "text-green-600" : t.status === "Processing" ? "text-yellow-600" : "text-red-500"}`}>
                  {t.status}
                </td>
              </tr>
            ))}
            </tbody>
            </table>
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
        </div>

        {/* Payroll Calendar */}
        <div className="p-4 mt-6 bg-white rounded-lg shadow">
          <h2 className="mb-3 text-xl font-semibold">Payroll Calendar</h2>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={[
              { title: "Payroll Processing", start: "2025-03-25", color: "blue" },
              { title: "Salary Disbursement", start: "2025-03-30", color: "green" },
            ]}
          />
        </div>

        {/* Employee Attendance & Leave Status */}
        <div className="p-4 mt-6 bg-white rounded-lg shadow">
          <h2 className="mb-3 text-xl font-semibold">Employees on Leave</h2>
          <ul className="pl-5 list-disc">
            {leaveRequests.map((leave, index) => (
              <li key={index}>{leave}</li>
            ))}
          </ul>
        </div>

        {/* Payroll Compliance & Alerts */}
        <div className="p-4 mt-6 text-red-700 bg-red-100 rounded-lg shadow">
          <p className="font-semibold">⚠️ Upcoming Tax Deadline on April 5!</p>
        </div>

        {/* Quick Actions */}
        <div className="flex mt-6 space-x-4">
          <button className="px-4 py-2 rounded-lg btn btn-primary">
            Add Employee
          </button>
          <button className="px-4 py-2 rounded-lg shadow btn btn-outline-primary">
            View Reports
          </button>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
