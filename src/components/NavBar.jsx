import React from "react";
import NavItem from "./common/NavItem";

const NavBar = () => {
  const navItems = [
    "All items",
    "Collections",
    "Locations",
    "Reminders",
    "Bookings",
    "Devices",
    "Reports",
    "Users",
  ];

  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
      <div className="navbar container-fluid">
        <div
          className="navbar collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
            {navItems.map((item) => {
              return <NavItem item={item} />;
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
