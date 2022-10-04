import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import MainBody from "../components/MainBody";
import "../styles/Home.css"
import LogIn from "../components/LogIn";

const Home = () => { 
  return (
    <div className="containerHome">
      <Nav/>
      <LogIn />
      <MainBody/>
      <Footer/>
    </div>
  )
}; 

export default Home;