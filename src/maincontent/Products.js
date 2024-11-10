import { Link } from "react-router-dom";
import Buttons from "../components/Buttons";
import ProductSlider from "./ProductSlider";


const Products = ({ item }) => {

    return (
        <div className="col-lg-4 col-md-6 col-12">
            <div className="card h-100 my-3">
                <ProductSlider item={item} page='p' />
                <div className="card-body">
                    <Link to={`/${item.id}`}>
                        <h5 className="card-title">{item.title}</h5>
                    </Link>
                    <p className="card-text">{item.description}</p>
                    <Buttons item={item} />
                </div>
            </div>
        </div>
    );
}

export default Products;