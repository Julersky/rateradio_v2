import "./Navbar.scss";
import React from 'react';
import { Link, useLocation} from 'react-router-dom';


const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <nav className="navbar">
      <ul>
      {isHomePage ? null : (
          <li className="nav-link">
            <Link to="/">Accueil</Link>
          </li>
        )}
        <li className={location.pathname === "/replay" ? "nav-link-active" : "nav-link"}>
          <Link to="replay">Replay</Link>
        </li>
        <li className={location.pathname === "/a-propos" ? "nav-link-active" : "nav-link"}>
          <Link to="a-propos">A propos</Link>
        </li>
        <li className={location.pathname === "/contact" ? "nav-link-active" : "nav-link"}>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

// const Navbar = () => {
//   const location = useLocation();

//   // Check if the current URL is the homepage
//   const isHomePage = location.pathname === '/';

//   return (
//     <nav className="navbar">
//       <ul>
//         {isHomePage ? null : (
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//         )}
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//           <Link to="/contact">Contact</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };


