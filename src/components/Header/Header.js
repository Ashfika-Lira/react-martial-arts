import React from 'react';
import "./Header.css";
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.jpg';

const Header = () => {
	return (
	<div className="MenuBar-container">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="logo-img">
			   <img className="w-75" src={logo} alt="" />
			   <h2 className="fst-italic text-success">Un Dojo</h2>
			</div>
	    <div>
      </div>
    </div>
			<div className="col-md-10">
            <div className="menu-container ">
			<nav className="d-flex align-items-end justify-content-end">
                <NavLink to="/home" className="items">Home</NavLink>
                <NavLink to="/about" className="items">About Us</NavLink>
                <NavLink to="/services" className="items">All Services</NavLink>
                <NavLink to="/coaches" className="items">Coaches</NavLink>
            </nav>
		   </div>
		</div>
	  </div>
    </div>
  </div>
	);
};

export default Header;