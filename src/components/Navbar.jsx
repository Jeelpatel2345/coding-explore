import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo"> Coding Club</div>

            <ul className="nav-links">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/team"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Team
                    </NavLink>
                </li>
                <NavLink to="/events">

                    Events

                </NavLink>
            </ul>
        </nav>
    );
}

export default Navbar;