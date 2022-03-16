import { Link, Outlet } from "react-router-dom";

import "./NavBar.scss";

export const NavBar = () => {
  return (
    <>
      <div className="flex-column nav-bar">
        <div>
          <Link to="/home">Home Page</Link>
        </div>
        <div>
          <Link to="/about">About Page</Link>
        </div>
        <div>
          <Link to="/dashboard">DashBoard Page</Link>
        </div>
      </div>
      <div className="main">
        <Outlet />
      </div>
    </>
  );
};
