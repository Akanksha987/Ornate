import React from "react";
import "./Navbar.css";
import "../../App.css";
import logoImg from "../../Images/logon.png";
import { Link, useNavigate } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogout } from "react-icons/ai";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const location = useLocation();

  const handleClick = () => {
    logout();
    navigate("/");
  };

  return (
    // NAVBAR ELEMENT
    <nav id="navbar">
      {/* Logo Divison */}
      <div id="logo">
        <div to="/" className="">
          <img src={logoImg} alt="site logo" className="logo" />
        </div>
      </div>

      {/* Quick Links Divison */}
      <div id="quick_links">
        <div id="navbar_links">
          <div className="elements">
            <Link to="/" className="link_text">
              Home
            </Link>
          </div>
          <div className="elements">
            <a href="/#design_list" className="link_text">
              Discover
            </a>
          </div>

          {user && (
            <div className="elements">
              {location.pathname !== "/Profile" ? (
                <button
                  className=" gradient_button "
                  id="profile_btn"
                  onClick={() => navigate("/Profile ")}
                >
                  Profile&nbsp;
                  <CgProfile />
                </button>
              ) : (
                <div></div>
              )}
              <button
                // className=" gradient_button"
                id="logout_btn"
                onClick={handleClick}
              >
                Logout&nbsp;
                <AiOutlineLogout fill="white" />
              </button>
            </div>
          )}

          {!user && (
            <div>
              <button
                className="upload_button gradient_button"
                style={{ width: "9vw" }}
                onClick={() => navigate("/Form")}
              >
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
