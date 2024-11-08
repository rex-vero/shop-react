import { useContext, useLayoutEffect } from "react";
import DataContext from "../contexts/DataContext";
import CartItem from "./CartItem";

const Cart = () => {
    const { cart } = useContext(DataContext);
    useLayoutEffect(() => {
        document.title = 'Cart';
    }, []);
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-8">
                    {cart.length > 0 && <ul className="list-group">
                        {cart.map((item, key) => <CartItem key={key} item={item} />)}
                        <li className="list-group-item d-flex justify-content-between">
                            <span>total:</span>
                            <button className="btn btn-outline-success">YES</button>
                        </li>
                    </ul>}
                    {cart.length === 0 && <h1>Cart Empty</h1>}
                </div>
            </div>
        </div>
    );
}

export default Cart;