import React, { useState } from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "images/logos/logo.png";
import Category from "./Category";
import { useHistory } from "react-router";
import { authService } from "./Fbase";
import Search from "./Search";

function NavBar() {
  const [isOpenMenu, setToggleMenu] = useState(false);
  const history = useHistory();

  const toggleMenu = () => {
    setToggleMenu((isOpenMenu) => !isOpenMenu);
  };

  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
};


  return (
    <div>
      <header className="header">
        <ul>
          <li>
          <a id="logo" href="/">
            <img src={logo} className="header-logo" alt="logo" />
          </a>
          </li>
          <li className="navigation-menu">
            <a href="#!" onClick={() => toggleMenu()}>
              메뉴 <FontAwesomeIcon icon={faAngleDown} />
            </a>
            <ul className={isOpenMenu ? "show-menu" : "hide-menu"}>
              <li>
                <a href="/">홈</a>
              </li>
              <li>
                <a href="#!">카테고리</a>
              </li>
              <li>
                <a href="/like">찜한 콘텐츠</a>
              </li>
            </ul>
          </li>
        </ul>

        <ul className="left_menu">
          <li>
            <a href="/">홈</a>
          </li>
            <Category />
          <li>
            <a href="/like">찜한 콘텐츠</a>
          </li>
        </ul>

        <ul className="right_menu">
          <Search />
          <li>
            <span  onClick={onLogOutClick}>로그아웃</span>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default NavBar;
