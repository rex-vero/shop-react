import Links from "./Links";
import logo from '../../logo.svg';
import './Navbar.css';
import { useContext } from "react";
import DataContext from "../../contexts/DataContext";
import SearchBar from "./SearchBar";

const Navbar = () => {
    const { inputData } = useContext(DataContext);
    return (
        <nav className="navbar navbar-expand-lg bg-nav">
            <div className="container-fluid">
                <img src={logo} className="navbar-brand img2" />
                <p>{inputData}</p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Links />
                    <SearchBar />
                </div>
            </div>
        </nav>
    );
}
export default Navbar;