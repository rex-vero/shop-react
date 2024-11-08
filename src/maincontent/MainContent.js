import { useContext, useEffect } from "react";
import Products from "./Products";
import DataContext from "../contexts/DataContext";
import { useLoaderData, useNavigation } from "react-router-dom";

const MainContent = () => {
    const products = useLoaderData();
    const nav = useNavigation();
    return (
        <div className="container-fluid">
            <div className="row">
                {nav.state === 'loading' ? <h1>rd3e4r43rere</h1> : products.map(item => <Products item={item} key={item.id} />)}
            </div>
        </div>
    );
}
export default MainContent;
