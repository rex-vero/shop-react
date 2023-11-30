import { useContext } from "react";
import { useState } from "react";
import Cart from "../contexts/Cart";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const { cart, add, remove, count, setCount } = useContext(Cart);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`).then(res => res.json()).then(resData => {
            setData(resData); counter()
        })
    }, [])
    const counter = () => {
        if (cart.filter(el => el.id === +id).length) {
            const item = cart.filter(el => el.id === +id);
            setCount(item[0].count);
        } else {
            setCount(0);
        }
    }
    return (
        <div className="comtainer-fluid mt-3">
            <div className="d-flex">
                <div className="row">
                    <div className="card colbg-black">
                        <img style={{ height: '500px' }} src={data.image} className="img-fluid" />
                    </div>
                </div>
                <div className="col">
                    <div style={{ height: '100%' }} className="card bg-black">
                        <div className="card-body">
                            <p className="card-text mb-4 text-white">{data.description}</p>
                            <h4 className="text-white mb-4">${data.price}</h4>
                        </div>
                        <div className="card-footer">
                            <input className="mx-3" type="text" readOnly value={count} />
                            <button className="mx-1 rounded-circle" onClick={() => { add(data) }}>+</button>
                            <button className="mx-1 rounded-circle" onClick={() => { remove(data) }}>-</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}
export default Product;