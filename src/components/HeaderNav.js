import { Link, NavLink } from 'react-router-dom';

function HeaderNav() {
  return (
  <div className="Header__nav">
        <NavLink to="/">
          <img className="Header__logo" src="https://upload.wikimedia.org/wikipedia/vi/9/9f/Logo_lmht.png"/>
        </NavLink>
        
        
        <ul className="nav__list hide-on-mobie">
          <li className="nav__list-item">
            <NavLink to="/News">Tin tức</NavLink>
          </li>
          <li className="nav__list-item">
            <NavLink to="/Events">Sự kiện</NavLink>
          </li>
          <li className="nav__list-item">
            <NavLink to="/Games">Trò chơi</NavLink>
          </li>
          <li className="nav__list-item">
            <NavLink to="/Communities">Cộng đồng</NavLink>
          </li>
          <li className="nav__list-item">
            <NavLink to="/Handbooks">Cẩm nang</NavLink>
          </li>
        </ul>
    </div>
)}

export default HeaderNav;

