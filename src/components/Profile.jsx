import React from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    //************* 09 *****************
    <React.Fragment>
      <Header />
      <div className="background-img-09">
        <div className="user-photo">
          <img
            src="https://th.bing.com/th/id/OIP.rrH-N7kJWcFhYxecmYpCaQHaHa?w=207&h=207&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt=""
          ></img>
        </div>
        <div className="container-left-09">
          <ul>
            <li>
              <Link className="list-profile" href="#">
                Profile Info
              </Link>
            </li>
            <li>
              <Link className="list-profile" href="#">
                Your Projects
              </Link>
            </li>
            <li>
              <Link className="list-profile" href="#">
                Your Assets
              </Link>
            </li>
            <li>
              <Link className="list-profile" href="#">
                Wishlist
              </Link>
            </li>
            <li>
              <Link className="list-profile" href="#">
                Log Out
              </Link>
            </li>
          </ul>
        </div>
        <div className="user-name">
          <h1 className="bold-text username">Ujjwal Jha</h1>
          <p className="white-text">Faculty Here XXXX year</p>
        </div>
        <div className="container-user-desc">
          <h1 className="bold-text user-desc-details">Interests</h1>
          <p className="user-desc-details">
            FrontEnd, BackEnd, Graphics Designing
          </p>
          <h1 className="bold-text user-desc-details">Bio</h1>
          <p className="user-desc-details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget
            arcu dictum varius duis at consectetur lorem. Porttitor lacus luctus
            accumsan tortor posuere. Tellus id interdum velit laoreet id donec
            ultrices tincidunt arcu. Massa tempor nec feugiat nisl pretium fusce
            id velit ut. Etiam erat velit scelerisque in dictum non consectetur
            a. Lacinia at quis risus sed vulputate odio ut. Vulputate dignissim
            suspendisse in est ante in nibh mauris.
          </p>
          <h1 className="bold-text user-desc-details">Contact Details</h1>
          <p className="user-desc-details">example@gmail.com</p>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Profile;
