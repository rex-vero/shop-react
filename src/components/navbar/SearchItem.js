import { useContext } from "react";
import DataContext from "../../contexts/DataContext";

const SearchItem = ({ product }) => {
    const { handleAdd } = useContext(DataContext);
    return (
        <div className="col-lg-4 col-6">
            <div className="card">
                <img src={product.image} className="img-fluid img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <a href="#" onClick={() => { handleAdd(product) }} className="btn btn-primary">${product.price}</a>
                </div>
            </div>
        </div>
    );
}

export default SearchItem;