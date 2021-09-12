import { useState } from "react";
import { createAPpointment } from "../../core/appointment";
import ProductImageCarosel from "./ProductImageCarosel";

const ProductDetails = ({ product }) => {
    const [appointment, setAppointment] = useState();

    const user = JSON.parse(localStorage.getItem("user"))

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
        <div className="product-details__card">
            <div className="product-details__image-container">
                {product.attachments.length > 0 ?
                    <ProductImageCarosel images={product.attachments} /> :
                    <i class="fas fa-images"></i>}
            </div>
            <div className="product-details__details">
                <div className="product-details__title">{product.name}</div>
                <div className="product-details__description">{product.description}</div>
                <div className="product-details__features">
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
                {/* <Link className="btn-primary" to={"product-details__details?productId=" + product._id}>View More Details</Link> */}
            </div>
        </div>
    );
}

export default ProductDetails;