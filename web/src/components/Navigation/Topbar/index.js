import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../../middlewares/auth";
import { useHistory } from 'react-router';
import { useAuth } from "../../../hooks/useAuth";

const Topbar = () => {
  const history = useHistory();
  const { session, signOut } = useAuth();

  const onLogout = () => {
    logout();
    signOut();
    history.push("/");
  };

  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      {/* <!-- Topbar Navbar --> */}
      <ul className="navbar-nav ml-auto">
        {/* <!-- Nav Item - User Information --> */}
        <div className="topbar-divider d-none d-sm-block"></div>
        <li className="nav-item dropdown no-arrow">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">
              {session && `${session.firstName} ${session.lastName}`}
            </span>
            <img
              className="img-profile rounded-circle"
              src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile.svg"
            />
          </a>
          {/* <!-- Dropdown - User Information --> */}
          <div
            className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="userDropdown"
          >
            <Link className="dropdown-item" href="#" onClick={onLogout}>
              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
              Logout
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Topbar;
