import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/mainimg.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>  DECENTRALISED F.I.R </h1>
        <p> "ACCOUNTABILITY ,TRANSPERANCY AND TRUST"  </p>
        <Link to="/Contact">
          <button> FIR FORM </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
