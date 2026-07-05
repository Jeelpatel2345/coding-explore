import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <h2>Coding Club</h2>

            <ul>
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
            </ul>
        </nav>
    );
}

export default Navbar;