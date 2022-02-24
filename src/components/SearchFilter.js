import React, { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchFilter(props) {
  const [isOpenSearch, setToggleSearch] = useState(false);
  // const [searchResults, setSearchResults] = useState([]);
  // const [isSearching, setIsSearching] = useState(false);
  const isSearch = props.isSearch;
  const searchResults = props.searchResults;
  const movies = [];

  props.movies.map((movie)=>(movies.push(movie.title)));

  const toggleSearch = () => {
    if(!isOpenSearch) setToggleSearch((isOpenSearch) => !isOpenSearch);
  };

  const onBlur= () => {
    if(isOpenSearch) setToggleSearch((isOpenSearch) => !isOpenSearch);
  }

  const filter  = (e) => {
    const keyword =e.target.value;
  
      if (keyword !== "") {
        const results = movies.filter((mv) => {
          return mv.toLowerCase().startsWith(keyword.toLowerCase());
        });
        searchResults(results);
        isSearch(true);
      } else {
        searchResults([]);
        isSearch(false);
      }
  }


  return (
    <div>
        <li onBlur={onBlur} onClick={toggleSearch} className="search">
            <input
              onChange={filter}
              className={"searchInput" + (isOpenSearch ? " toggle" : "")} 
              type="text"
              placeholder="제목을 검색하세요."
              autoFocus
            />
            <span  className="searchIcon">
              <FontAwesomeIcon icon={faSearch} />
            </span>
        </li>
    </div>
  );
}

export default SearchFilter;
