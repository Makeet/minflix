import React, { useState } from "react";
import { faAngleDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "logos/logo.png";
import "./NavBar.css";

function NavBar() {
  const [isOpen, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle((isOpen) => !isOpen);
  };

  return (
    <div>
      <header className="header">
        <ul>
          <li>
            <img src={logo} className="logo" alt="logo" />
          </li>
          <li className="navigation-menu">
            <a href="#" onClick={() => toggleMenu()}>
              메뉴 <FontAwesomeIcon icon={faAngleDown} />
            </a>
            <ul class={isOpen ? "show-menu" : "hide-menu"}>
              <li>
                <a href="#">홈</a>
              </li>
              <li>
                <a href="#">카테고리</a>
              </li>
              <li>
                <a href="#">찜한 콘텐츠</a>
              </li>
              <li>
                <a href="#">설정</a>
              </li>
            </ul>
          </li>
        </ul>

        <ul class="left_menu">
          <li>
            <a href="#">홈</a>
          </li>
          <li>
            <a>카테고리</a>
          </li>
          <li>
            <a href="#">찜한 콘텐츠</a>
          </li>
        </ul>

        <ul class="right_menu">
          <li>
            <FontAwesomeIcon icon={faSearch} />
          </li>
          <li>
            <a href="#">로그아웃</a>
          </li>
        </ul>
      </header>

      <footer className="footer">
        <a href="https://github.com/Makeet/minflix">Minflix</a> &copy;Makeet{" "}
        {new Date().getFullYear()}.
      </footer>
    </div>
  );
}

export default NavBar;
