import { Link } from "react-router-dom";
import styles from "../Styles/app.module.css"
const Menu = () => {
    return (
        <div className={styles.navbar}>
            <ul>
                <Link to="/">
                    <li>Inicio</li>
                </Link>
                <Link to="/user">
                    <li>Users</li>
                </Link>
                <Link to="/character">
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