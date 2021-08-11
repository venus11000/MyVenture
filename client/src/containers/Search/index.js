import { useEffect, useState } from "react";
import "./style.css";
import { searchProducts } from "../../core/product";
import queryString from "query-string";
import { useHistory, useLocation } from "react-router-dom";
import ProductsList from "../ProductsList/ProductsListing";

const Search = () => {
    const [search, setSearchStr] = useState("");
    const [products, setProducts] = useState([]);
    const location = useLocation();
    const history = useHistory();


    useEffect(() => {
        const parsed = queryString.parse(location.search);
        console.log(parsed);

        if (parsed.search) {
            setSearchStr(parsed.search);

            searchProducts(parsed)
                .then((product) => {
                    setProducts(product);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, []);

    const submit = (event) => {
        event.preventDefault();
        searchProducts({ search: search })
            .then((product) => {
                setProducts(product);
            })
            .catch((error) => {
                console.log(error);
            });
        history.push("/search?search=" + search);
    }

    return (
        <div className="search-container">
            <div className="search-container__form">
                <input className="search-container__form-input" type="text" onChange={(e) => setSearchStr(e.target.value)} placeholder="Enter product name..." value={search} />
                <button className="search-container__form-btn" onClick={submit}><i class="fas fa-search"></i></button>
            </div>
            <ProductsList products={products} />
        </div>
    );
}

export default Search;