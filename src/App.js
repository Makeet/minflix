import logo from './logos/logo.png';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faSearch } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul><li><img src={logo} className="App-logo" alt="logo" /></li>
        <a href="#" id="menu">메뉴 <FontAwesomeIcon icon={faAngleDown} /></a>
        </ul>
        <ul class="left_menu">
          <li><a href="#">홈</a></li>
          <li><a>카테고리</a></li>
          <li><a href="#">찜한 콘텐츠</a></li>
        </ul>

        <ul class="right_menu">
          <li><FontAwesomeIcon icon={faSearch} /></li>
          <li ><a href="#">로그아웃</a></li>
        </ul>
      </header>

      <footer className="App-footer"><a href="https://github.com/Makeet/minflix">Minflix</a> &copy;Makeet {new Date().getFullYear()}.</footer>

    </div>
      );
    }
    
    export default App;