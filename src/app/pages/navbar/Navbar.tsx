import { useState } from "react";
import {Link, NavLink} from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
  const [ menuOpen, setMenuOpen ] = useState<Boolean>(false);

  return (
 <nav>
  <Link to="/" className="title">
    Dashboard
  </Link>
  <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
    <span></span>
    <span></span>
    <span></span>
  </div>
  <ul className={menuOpen ? "open" : ""}>
    <li>
      <NavLink to="/contactus">Contactame</NavLink>
    </li>
  </ul>
 </nav>
  )
}

export default Navbar