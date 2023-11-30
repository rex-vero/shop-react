import { useState } from "react";
import { createContext } from "react";
import {toast } from 'react-toastify';

const Cart = createContext(null);
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [count, setCount] = useState('');
    const add = (item) => {
        const itemIndex = cart.findIndex(el => item.id === el.id)
        if (itemIndex === -1) {
            setCart(prevState => [...prevState, { ...item, count: 1 }]);
            setCount(1);
        } else {
            const temp = [...cart];
            temp[itemIndex].count += 1;
            setCart(temp);
            setCount(cart[itemIndex].count);
        }
    }
    const remove = (item) => {
        const temp = cart.filter(element => element.id === item.id)
        if (temp.length === 0) {
            toast('not allowed')
        }
        else if (temp[0].count > 1) {
            const index = cart.findIndex(el => el.id === item.id)
            const tempCart = [...cart];
            tempCart[index].count -= 1;
            setCount(tempCart[index].count)
            setCart(tempCart);
        } else if (temp[0].count === 1) {
            const tempCart = cart.filter(element => element.id !== item.id)
            setCart(tempCart);
            setCount(0);
        }
    }
    return (
        <Cart.Provider value={{ cart, setCart, add, count, setCount, remove }}>
            {children}
        </Cart.Provider>
    )
}
export default Cart;