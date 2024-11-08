import { Link } from "react-router-dom";
import Buttons from "../components/Buttons";

const Products = ({ item }) => {


    return (
        <div className="col-lg-4 col-6">
            <div className="card">
                <Link to={`/admin/${item.id}`}><img src={item.image} className="img img-fluid" alt={item.title} /></Link>
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <Buttons item={item} />
                </div>
            </div>
        </div>
    );
}

export default Products;