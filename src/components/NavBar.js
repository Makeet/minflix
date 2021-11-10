import React, { useState } from "react";
import { faAngleDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "logos/logo.png";
import Category from "./Category";

function NavBar() {
  const [isOpenMenu, setToggleMenu] = useState(false);
  const [isOpenSearch, setToggleSearch] = useState(false);

  const toggleMenu = () => {
    setToggleMenu((isOpenMenu) => !isOpenMenu);
  };
  const toggleSearch = () => {
    setToggleSearch((isOpenSearch) => !isOpenSearch);
  };


  return (
    <div>
      <header className="header">
        <ul>
          <li>
            <img src={logo} className="logo" alt="logo" />
          </li>
          <li className="navigation-menu">
            <a href="#!" onClick={() => toggleMenu()}>
              메뉴 <FontAwesomeIcon icon={faAngleDown} />
            </a>
            <ul className={isOpenMenu ? "show-menu" : "hide-menu"}>
              <li>
                <a href="#!">홈</a>
              </li>
              <li>
                <a href="#!">카테고리</a>
              </li>
              <li>
                <a href="#!">찜한 콘텐츠</a>
              </li>
              <li>
                <a href="#!">설정</a>
              </li>
            </ul>
          </li>
        </ul>

        <ul className="left_menu">
          <li>
            <a href="#!">홈</a>
          </li>
            <Category />
          <li>
            <a href="#!">찜한 콘텐츠</a>
          </li>
        </ul>

        <ul className="right_menu">
          <li onClick={() => toggleSearch()} className="search">
            <input
              className={"searchInput" + (isOpenSearch ? " toggle" : "")}
              type="text"
              placeholder="제목, 장르, 사람"
            />
            <span className="searchIcon">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </li>
          <li>
            <a href="#!">로그아웃</a>
          </li>
        </ul>
      </header>

      <footer className="footer">
        {/* TO DO: link 고쳐야함 */}
        <a href="https://github.com/Makeet/minflix">
          Minflix
        </a> &copy;Makeet {new Date().getFullYear()}.
      </footer>
    </div>
  );
}

export default NavBar;
