import React from "react";
import "../css/Navbar.css"
import {Link, BrowserRouter as Router, Switch, Route} from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar1 navbar-expand-lg  bg-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand logo-font" to="/">
            Awesome!
          </Link>
            <ul className="nav">
      <Link to="/" className="nav-link nav1">Home</Link>
                <Link to="/posts" className="nav-link nav1">Posts</Link>
                {/* <Link to="/comments" className="nav-link nav1">Comments</Link> */}
                <Link to="/about" className="nav-link nav1">About</Link>

            </ul>
          </div>
      </nav>
    </div>
  );
}

export default Navbar;
