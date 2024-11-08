import { useContext, useState } from "react";
import DataContext from "../../contexts/DataContext";

const SearchBar = () => {
    const [inputData, setInputData] = useState('');
    const { products, setFilterData } = useContext(DataContext);

    const handleData = e => {
        setInputData(e.target.value);
        if (e.target.value.trim() !== '') {
            const fArray = products.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()));
            console.log(fArray);
            setFilterData(fArray);
        } else {
            setFilterData([]);
        }

    }
    return (
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={inputData} onChange={handleData} />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    );
}

export default SearchBar;