import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import queryString from 'query-string';
import { getProductByProductId } from "../../core/product";
import "./style.css";
import ProductDetails from "./ProductDetails";

const ProductDetailsWrapper = () => {
    const [product, setProduct] = useState();
    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname;
        console.log(currentPath, location.search);

        const parsed = queryString.parse(location.search);
        console.log(parsed);

        getProductByProductId(parsed)
            .then((product) => {
                setProduct(product);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [location]);

    return (
        <div className="product-list-container">
            {product ?
                <ProductDetails product={product} />
                : <div className="no-products">No Products Found...</div>}
        </div>
    );
}

export default ProductDetailsWrapper;