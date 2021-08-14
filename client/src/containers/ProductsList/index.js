import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import queryString from 'query-string';
import { searchProducts } from "../../core/product";
import "./style.css";
import ProductsListing from "./ProductsListing";

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname;
        console.log(currentPath, location.search);

        const parsed = queryString.parse(location.search);
        console.log(parsed);

        searchProducts(parsed)
            .then((products) => {
                setProducts(products || []);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [location]);

    return (
        <div className="product-list-container">
            <ProductsListing products={products} />
        </div>
    );
}

export default ProductsList;