import { useContext } from "react";
import Cart from "../contexts/Cart";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
    const { cart, setCart, add } = useContext(Cart);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products').then(res => res.json()).then(resData => {
            setData(resData);
        })
    }, [])
    return (
        <div className="comtainer-fluid mt-3">
            <div className="row">
                <div className="d-flex card-group flex-lg-row flex-column">
                    {data.map(item => (
                        <div className="col-lg-6 col-12 d-flex" key={item.id}>
                            <div className="card mx-2 my-lg-1 my-2 bg-black align-self-center">
                                <Link to={`/products/${item.id}`}>
                                    <img src={item.image} style={{ height: "300px" }} className="card-img-top img-fluid" />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title text-white">{item.title}</h5>
                                    <p style={{ height: '200px', overflow: "hidden" }} className="card-text text-white">{item.description}</p>
                                    <h4 className="text-white">${item.price}</h4>
                                    <div className="card-footer">
                                        <a href="#" className="btn btn-primary" onClick={() => { add(item) }} >Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Shop;