import { useContext } from "react";
import DataContext from "../../contexts/DataContext";
import { Link } from "react-router-dom";

const NavLinks = ({ ali }) => {
    const { cart } = useContext(DataContext);
    return (
        <li className="nav-item">
            <Link to={ali.href} className="nav-link position-relative">{ali.text}
                {ali.text === 'cart' && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {cart.length}
                    </span>
                )}
            </Link>
        </li>
    );
}
export default NavLinks;