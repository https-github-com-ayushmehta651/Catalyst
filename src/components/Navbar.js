import React, { useState } from "react";
import Logo from "../assets/fir.png";
import { Link } from "react-router-dom";
// import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/Menu"> Menu</Link>
          <Link to="/contact"> Contact </Link>
          <Link to="/search"> Search </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Features </Link>
        <Link to="/contact"> FIR Form </Link>
        <Link to="/search"> Search FIR </Link>
        <button onClick={toggleNavbar}>
          {/* <ReorderIcon /> */}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
