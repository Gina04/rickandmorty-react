import { Link } from "react-router-dom";
const Menu = () => {
    return (
        <div>
            <ul>
                <Link to="/">
                    <li>Inicio</li>
                </Link>
                <Link to="/user">
                    <li>Users</li>
                </Link>
                <Link to="/r&m">
                    <li>R&M</li>
                </Link>
                <Link to="/contact">
                    <li>Contact</li>
                </Link>
            </ul>
        </div>
    )
}

export default Menu;