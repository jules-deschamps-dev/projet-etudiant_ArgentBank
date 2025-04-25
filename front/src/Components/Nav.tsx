import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store.ts";
import { logout } from "../store/authSlice.ts";
import { useNavigate } from "react-router-dom";

const Nav: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const user = useSelector((state: RootState) => state.user.identity);
  const username = user ? user.firstName : "";

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="/">
        <img
          className="main-nav-logo-image"
          src="../../img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div className="flex flex-row">
        {token ? (
          <>
            <a className="main-nav-item" href="/profil">
              <i className="fas fa-user-circle"></i> {username}
            </a>


            <div className="main-nav-item" onClick={handleLogout}>
              <i className="fa fa-sign-out"></i> Sign Out
            </div>
          </>
        ) : (
          <div className="main-nav-item">
            <i className="fa fa-user-circle"></i> Sign In
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
