import { useContext } from "react";
import DataContext from "../../contexts/DataContext";
import SearchItem from "./SearchItem";

const SearchItems = () => {
    const { filterData } = useContext(DataContext);
    return (
        filterData.map(item => <SearchItem product={item} key={item.id} />)
    );
}

export default SearchItems;