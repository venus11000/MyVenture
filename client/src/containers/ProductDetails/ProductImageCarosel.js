import { useState } from "react"

const ProductImageCarosel = ({ images = [] }) => {
    const [activeImage, setActiveImage] = useState(0);
    return (
        <div className="image-carosel__container">
            <div
                className="image-carosel__main-image"
                style={{
                    backgroundImage: `url(http://localhost:8000/api/static/images/products/${images[activeImage]}`
                }}
            ></div>
            <div className="image-carosel__thumbnail-container">
                {images.map((image, index) => (
                    <div
                        key={`images-thumbnail-${index}`}
                        className="image-carosel__thumbnail"
                        style={{
                            backgroundImage: `url(http://localhost:8000/api/static/images/products/${image}`,
                            opacity: activeImage === index ? 1 : 0.7,
                        }}
                        onClick={() => setActiveImage(index)}
                    ></div>
                ))}
            </div>
        </div>
    )
}

export default ProductImageCarosel;