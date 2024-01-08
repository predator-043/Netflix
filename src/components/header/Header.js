import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img
            className="header__icon"
            src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png"
            alt=""
          />
        </Link>
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span>Top Rated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>Upcoming</span>
        </Link>
      </div>
      <div className="headerRight">
        <button onClick={() => navigate(props.login ? "/login" : "/signup")}>
          {props.login ? "Log In " : "Sign In"}
        </button>
      </div>
    </div>
  );
};

export default Header;
