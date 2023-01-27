import React, { Component } from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import { Link } from "react-router-dom";
import { getStudentDetail } from "../services/students";
import Loading from "./Loading";

class Profile extends Component {
  state = { student: null };

  componentDidMount() {
    getStudentDetail(window.location.pathname.split("/")[1]).then((student) => {
      this.setState({ student });

      console.log(student);
    });
  }

  handleLogOut() {
    localStorage.clear();

    window.location.href = "http://localhost:3000";
  }

  render() {
    const { student } = this.state;
    return this.state.student ? (
      <React.Fragment>
        <Header studentName={student.name} studentId={student._id} />
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
                <Link className="list-profile" to={"/projects"}>
                  Your Projects
                </Link>
              </li>
              <li>
                <Link className="list-profile" to={"/assets"}>
                  Your Assets
                </Link>
              </li>
              <li>
                <Link className="list-profile" onClick={this.handleLogOut}>
                  Log Out
                </Link>
              </li>
            </ul>
          </div>
          <div className="user-name">
            <h1 className="bold-text username">{student.name} </h1>
            <p className="white-text">
              {student.faculty} | {student.batch}
            </p>
          </div>
          <div className="container-user-desc">
            <h1 className="bold-text user-desc-details">Interests</h1>
            <p className="user-desc-details">
              {student.interest}, Programmer, Motivational Speaker
            </p>
            <h1 className="bold-text user-desc-details">Bio</h1>
            <p className="user-desc-details">
              {student.bio} Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Recusandae vitae voluptatum quasi vero officiis tenetur
              necessitatibus ut voluptas cum! Sequi laboriosam ipsam corporis,
              quod molestias quisquam accusamus repellendus laudantium ducimus
              aliquam accusantium tempore, aspernatur ab error et fugiat quo
              quia?
            </p>
            <h1 className="bold-text user-desc-details">Contact Details</h1>
            <p className="user-desc-details">{student.email}</p>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    ) : (
      <Loading />
    );
  }
}

export default Profile;
