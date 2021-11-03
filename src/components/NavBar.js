import React, { useState } from "react";
import { faAngleDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "logos/logo.png";
import "./NavBar.css";
import categoryData from "components/CategoryData.json";

function NavBar() {
  const [isOpenMenu, setToggleMenu] = useState(false);
  const [isOpenSearch, setToggleSearch] = useState(false);
  const [isOpenCategory, setToggleCategory] = useState(false);

  const toggleMenu = () => {
    setToggleMenu((isOpenMenu) => !isOpenMenu);
  };
  const toggleSearch = () => {
    setToggleSearch((isOpenSearch) => !isOpenSearch);
  };
  const toggleCategory = () => {
    setToggleCategory((isOpenCategory) => !isOpenCategory);
  }; /* 추후 수정 예정 api추가하여 fetch로 받아온 다음 작업해야함 */
  // categoryData.category.map((item)=>{console.log("item: "+item)});
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
          <li>
            <a onClick={() => toggleCategory()}>카테고리</a>
            <ul className={isOpenCategory ? "show-menu" : "hide-menu"}>
              {categoryData.category.map((item, index) => {
                console.log(item);
                return (<li key={index}>{item}</li>)
              })}
            </ul>
          </li>
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
        <a href="https://github.com/Makeet/minflix">Minflix</a> &copy;Makeet{" "}
        {new Date().getFullYear()}.
      </footer>
    </div>
  );
}

export default NavBar;
