import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
 return (
 <div className="Header">

 <Link to="/">
     <button type="button" class="button">
     JavaScript Seminars
     </button>
 </Link>

 </div>
 );
}
export default Header;
