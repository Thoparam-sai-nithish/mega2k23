import React from "react";
import {Link} from "react-router-dom"
const NavigationBar = () => {
  return (
    <div className="d-flex justify-content-between ">
      <div className="m-3">
          <Link className="m-3"><img src="" alt="Konneect" /></Link>
          <Link className="m-3 text-decoration-none text-dark">Jobs</Link>
          <Link className="m-3 text-decoration-none text-dark">Post Jobs</Link>
          <Link className="m-3 text-decoration-none text-dark">About Us</Link>
      </div>
      <div>
        <Link className="btn btn-primary m-3">Sign In</Link>
        <Link className="btn btn-danger m-3">Sign Up</Link>
      </div>
    </div>
  );
};

export default NavigationBar;
