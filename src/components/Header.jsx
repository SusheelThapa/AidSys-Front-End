// import React from "react";

// const Header = () => {
//   return <div>This is header</div>;
// };

// export default Header;
import React from 'react'

export default function Header() {
  return (
    <>
    <div>
      <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">All Items</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Collections</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Locations</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Reminders</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Bookings</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Issues</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Devices</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Reports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Users</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </div>
    </>
  )
}
