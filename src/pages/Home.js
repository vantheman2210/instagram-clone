import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import MainBody from "../components/MainBody";
import "../styles/Home.css"

const Home = () => { 
  return (
    <div className="containerHome">
      <Nav/>
      <MainBody/>
      <Footer/>
    </div>
  )
}; 

export default Home;