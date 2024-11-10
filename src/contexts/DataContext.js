import { createContext, useState } from "react";
import { toast } from "react-toastify";

const DataContext = createContext(null);
export const DataProvider = ({ children }) => {
    const [filterData, setFilterData] = useState([]);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const handleAdd = (item) => {
        const temp = [...cart];
        const index = temp.findIndex(product => product.id === item.id);
        if (index === -1) {
            setCart(prevState => [...prevState, { ...item, count: 1 }]);
            localStorage.setItem('cart', JSON.stringify([...temp, { ...item, count: 1 }]));

        } else {
            const temp = [...cart];
            temp[index].count++;
            setCart(temp);
            localStorage.setItem('cart', JSON.stringify(temp));
        }
        toast.success(`${item.title} added`)
    }

    const handleRemove = (item) => {
        const temp = [...cart];
        const index = temp.findIndex(product => product.id === item.id);
        if (temp[index].count === 1) {
            const newCard = temp.filter(product => product.id !== item.id);
            setCart(newCard);
            localStorage.setItem('cart', JSON.stringify(newCard));
        } else {
            temp[index].count--;
            setCart(temp);
            localStorage.setItem('cart', JSON.stringify(temp));
        }
    };
    return <DataContext.Provider value={{ filterData, setFilterData, products, setProducts, cart, setCart, handleAdd, handleRemove }}>{children}</DataContext.Provider>
};

export default DataContext;