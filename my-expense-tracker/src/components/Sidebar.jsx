import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="nav flex-column">
        <li className="nav-item">
          {/* <Link to="/dashboard" className="nav-link">
            Dashboard
          </Link> */}
          <a href="">
            Dashboard
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
