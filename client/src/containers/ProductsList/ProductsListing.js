import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { createAPpointment } from "../../core/appointment";

const ProductsListing = ({ products = [], user }) => {
    return (
        <div className="product-list-container">
            {products && (products.length === 0 ?
                <div className="no-products">No Products Found...</div>
                : products.map(product => <ProductCard product={product} user={user} />))}
        </div>
    );
}

export default ProductsListing;

const ProductCard = ({ product, user }) => {
    const [appointment, setAppointment] = useState();

    const bookAppointment = (productId) => {
        let payload = {
            productId,
            userId: user._id
        }
        createAPpointment(payload)
            .then((appointment) => {
                setAppointment(appointment);
            })
    }

    return (
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
                {user && <div className="btn-primary" onClick={() => bookAppointment(product._id)}>Book Appointment</div>}
                {appointment && <button
                    className="btn-primary-outlined"
                    style={{
                        color: appointment._id ? "green" : "#d8232a",
                        borderColor: appointment._id ? "green" : "#d8232a"
                    }}
                    disabled={true}
                >
                    {appointment._id ? "Appointment booked!" : "Error while booking appointment!"}
                </button>}
            </div>
        </div>
    );
}