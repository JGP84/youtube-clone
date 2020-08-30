import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import { useStateValue } from "../datalayer/StateProvider";
import { useHistory } from "react-router-dom";

function Header() {
  const [state, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault(); // stop refresh page
    dispatch({
      type: "SET_SEARCH_TERM",
      term: input,
    });
    history.push("/search/:searchTerm");
  };

 /*  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      
        
    }
  }; */

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/245px-YouTube_Logo_2017.svg.png"
            alt=""
          />
        </Link>
      </div>
      <div className="header__input">
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="Search"
          type="text"
          //onKeyDown={handleKeyDown}
        />

        <SearchIcon onClick={search} className="header__inputButton" />
      </div>

      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
