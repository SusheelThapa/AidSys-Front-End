import React from "react";

const NavItem = ({ item }) => {
  /* 
          <==== IMPORTANT =====>
          * The below code is necessary as in future we are going to apply those is the
          * tab the is current active


          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              All Items
            </a>
          </li> 
    */

  return (
    <li key={item} className="nav-item">
      <a href="#" className="nav-link">
        {item}
      </a>
    </li>
  );
};

export default NavItem;
