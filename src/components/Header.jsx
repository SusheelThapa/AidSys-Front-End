import React, { useState } from "react";

export default function Header() {
  const [navItems] = useState([
    "All items",
    "Collections",
    "Locations",
    "Reminders",
    "Bookings",
    "Devices",
    "Reports",
    "Users",
  ]);

  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
        <div className="navbar container-fluid">
          <div
            className="navbar collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
              {/* 
              <==== IMPORTANT =====>
              * The below code is necessary as in future we are going to apply those is the
              * tab the is current active


              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  All Items
                </a>
              </li> 
              */}

              {navItems.map((item) => {
                return (
                  <li key={item} className="nav-item">
                    <a href="#" className="nav-link">
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
