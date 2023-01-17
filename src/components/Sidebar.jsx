// import React from "react";

// const Sidebar = () => {
//   return <div>This is sidebar</div>;
// };

// export default Sidebar;
import React from "react";

import "../assets/css/sidebar.css";

export default function Side() {
  return (
    <div id="sidebar">
        <ul className="list-group">
          <li className="list-group-item bold">
            All Items<span className="badge bg-primary rounded-pill">3</span>
          </li>
          <li className="list-group-item">
            Tagged Items<span className="badge bg-primary rounded-pill">3</span>
          </li>
          <li className="list-group-item">
            Untagged Items
            <span className="badge bg-primary rounded-pill">0</span>
          </li>
          <li className="list-group-item">
            <div className="d-grid gap-2">
              <button type="button" className="btn btn-dark my-3">
                Add New Item
              </button>
            </div>
          </li>
        </ul>
        <ol className="list-group list-group my-3">
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto transparent-bg">
              <div className="fw-bold transparent-bg">Filter by collection</div>
              No applied filters yet
              <button className="mx-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  className="bi bi-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
              </button>
            </div>
          </li>
        </ol>

        <ol className="list-group list-group">
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto transparent-bg">
              <button className="transparent-bg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-cloud-upload transparent-bg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"
                  />
                </svg>
              </button>
              Import your items here
            </div>
          </li>
        </ol>
    </div>
  );
}
