import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <p className="text-2xl font-bold text-center">This is a home page</p> <br/> <br/>
      <Footer/>
    </>
  );
};

export default Home;
