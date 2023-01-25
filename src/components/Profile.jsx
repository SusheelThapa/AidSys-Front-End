import React from "react";
import Header from "./common/Header";

const Profile = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="background-image">
        <img id='graduate' src='https://cdn4.iconfinder.com/data/icons/education-business-part-1/513/1-512.png'></img>
        {/* <img src="E:\Locus\AidSys-Front-End\src\assets\img\classroompic.jpg"></img> */}
      <button type="button-y" class="btn btn-warning">EXPLORE NOW</button>
      <div className="motto">Our Motto is.....</div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
