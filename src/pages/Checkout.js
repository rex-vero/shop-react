import { useContext } from "react";
import Cart from "../contexts/Cart";

const Checkout = () => {
    const { cart, add, remove } = useContext(Cart)
    return (
        <div className="container-fluid mt-3">
            <div className="row justify-content-center align-items-center vh-75">
                <div className="col-10">
                    <div className="card">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Count</th>
                                    <th scope="col">Total</th>
                                    <th colSpan={2}>Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(item => (<tr key={item.id}>
                                    <td scope="col">{item.title}</td>
                                    <td scope="col">{item.price}</td>
                                    <td scope="col">{item.count}</td>
                                    <td scope="col">{item.price * item.count}</td>
                                    <td><button onClick={()=>{add(item)}}>+</button></td>
                                    <td><button onClick={()=>{remove(item)}}>-</button></td>
                                </tr>))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Checkout;