import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import queryString from 'query-string';
import { getProducts } from "../../core/product";
import "./style.css";

const ProductsListing = ({ products = [] }) => {
    return (
        <div className="product-list-container">
            {products && (products.length === 0 ?
                <div className="no-products">No Products Found...</div>
                : products.map(product => (
                    <div className="product-card">
                        <div className="product-image-container">
                            {product.attachments.length > 0 ?
                                <img
                                    className="product-image"
                                    src={"http://localhost:8000/api/static/images/products/" + product.attachments[0]}
                                /> :
                                <i class="fas fa-images"></i>}
                        </div>
                        <div className="product-details">
                            <div className="product-title">{product.name}</div>
                            <div className="product-description">{product.description}</div>
                            <div className="product-features">
                                <div className="feature">
                                    <div>Bedrooms: {product.bedrooms}</div>
                                </div>
                                <div className="feature">
                                    <div>Bathrooms: {product.bathrooms}</div>
                                </div>
                                <div className="feature">
                                    <div>Area Occupied: {product.areaOccupied}</div>
                                </div>
                            </div>
                            <Link className="btn-primary" to={"product-details?productId=" + product._id}>View More Details</Link>
                        </div>
                    </div>
                )))}
        </div>
    );
}

export default ProductsListing;