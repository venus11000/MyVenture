import ProductImageCarosel from "./ProductImageCarosel";

const ProductDetails = ({ product }) => {
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
                {/* <Link className="btn-primary" to={"product-details__details?productId=" + product._id}>View More Details</Link> */}
            </div>
        </div>
    );
}

export default ProductDetails;