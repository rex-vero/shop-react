import { useContext, useEffect, useState } from "react";
import Products from "./Products";
import DataContext from "../contexts/DataContext";
import { useLoaderData, useNavigation } from "react-router-dom";

const MainContent = () => {
    const products = useLoaderData();
    const nav = useNavigation();
    const [page, setPage] = useState(1);
    const getPages = (products) => {
        const pages = [];
        let currPage = 1;
        products.map((_, index) => {
            if (index % 10 === 0) {
                pages.push(currPage);
                currPage++;
            }
        })
        return (
            pages.map((item, key) => {
                return (
                    <li key={key} className={`page-item ${page === item ? 'active' : ''}`} aria-current="page" onClick={() => { setPage(item) }}>
                        <span className="page-link">{item}</span>
                    </li>
                );
            })
        );
    }
    return (
        <div className="container-fluid">
            <div className="row">
                {nav.state === 'loading' ? <h1>rd3e4r43rere</h1> : products.map((item, index) => {
                    if (index >= page * 10 - 10 && index <= page * 10) {
                        return (
                            <Products item={item} key={item.id} />
                        )
                    } else {
                        return;
                    }
                })}
                <div className="row my-5 align-self-center justify-content-center">
                    <div className="col-4">
                        <nav aria-label="...">
                            <ul className="pagination pagination-lg">
                                {getPages(products)}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MainContent;
