import React from 'react'

export default function Header() {
  return (
      <div>
        <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
          <div className="navbar container-fluid">
            <div
              className="navbar collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    All Items
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Collections
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Locations
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Reminders
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Bookings
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Issues
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Devices
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Reports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Users
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
  )
}
