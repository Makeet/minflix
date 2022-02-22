import React, { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Search(props) {
  const [isOpenSearch, setToggleSearch] = useState(false);
  const [search, setSearch] = useState("");
  const movies = props.movies;

  const toggleSearch = (e) => {
    if(!isOpenSearch) setToggleSearch((isOpenSearch) => !isOpenSearch);
    // console.log(e.currentTarget.name);
  };

  const onBlur = (e) => {
    if(isOpenSearch) setToggleSearch((isOpenSearch) => !isOpenSearch);
    // console.log(e);
  }

  return (
    <div>
        <li onBlur={onBlur} onClick={toggleSearch} className="search">
            <input
              onChange={(e) => { setSearch(e.target.value); }}

              className={"searchInput" + (isOpenSearch ? " toggle" : "")} 
              type="text"
              placeholder="제목, 장르, 사람"
              autoFocus
            />
            <span  className="searchIcon">
              <FontAwesomeIcon icon={faSearch} />
            </span>
        </li>
    </div>
  );
}

export default Search;
