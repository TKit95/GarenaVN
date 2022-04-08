import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';


function HeaderNav() {
  const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
  setActive(!isActive); 
 };
  return (
  <div>
        <div className={isActive ? "nav__div" : "nav__div-hide"}>
          <ul className="nav__list2 hide-on-tablet hide-on-pc">
            <li className="nav__list-item2">
              <NavLink to="/News">Tin tức</NavLink>
            </li>
            <li className="nav__list-item2">
              <NavLink to="/Events">Sự kiện</NavLink>
            </li>
            <li className="nav__list-item2">
              <NavLink to="/Games">Trò chơi</NavLink>
            </li>
            <li className="nav__list-item2">
              <NavLink to="/Communities">Cộng đồng</NavLink>
            </li>
            <li className="nav__list-item2">
              <NavLink to="/Handbooks">Cẩm nang</NavLink>
            </li>
            <li className="nav__list-item2">
              <NavLink to="/Login">Đăng nhập</NavLink>
            </li>
          </ul>
        </div>

      

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

        

        <div>
              <span onClick={ToggleClass} className='Header__icon-justify-item hide-on-tablet hide-on-pc'>
                <i class="fa-solid fa-align-justify"></i>
              </span>
        </div>
    </div>
  </div>
    
)}

export default HeaderNav;

