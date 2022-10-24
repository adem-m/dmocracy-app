import { NavLink } from "react-router-dom";
import styles from "./navbar.module.scss";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <NavLink 
        className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink }
        to={"/"} end>
          Home
      </NavLink>
      <NavLink 
        className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink }
        to={"/voting-sessions"}>
          Voting Sessions
      </NavLink>
    </nav>
  )
}

export default Navbar;