import { useContext } from "react";
import DataContext from "../contexts/DataContext";

const Buttons = ({ item }) => {
    const { handleAdd, cart, handleRemove } = useContext(DataContext);
    const [secetedItems] = cart.filter(product => product.id === item.id);
    return (
        <>
            <a href="#" className="btn btn-primary" onClick={() => { handleAdd(item) }}>${item.price}</a>
            {secetedItems && <>
                <span>{secetedItems.count}</span>
                <a href="#" className="btn btn-danger" onClick={() => { handleRemove(item) }}>remove</a>
            </>}
        </>
    );
}

export default Buttons;