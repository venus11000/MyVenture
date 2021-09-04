import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts, deleteProductById } from "../../core/product";
import "./ListProducts.css";

const ListProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then((products) => {
                if (products && products.length > 0) setProducts(products);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const deleteCategory = async (id) => {
        let response = await deleteProductById(id)

        if (response.ok === 1) {
            getProducts()
                .then((products) => {
                    if (products && products.length > 0) setProducts(products);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    return (
        <div className="product-list__container">
            <div className="page-header">All Products ({products.length})</div>
            <table className="product-list__card">
                <thead>
                    <tr className="product-list__tr">
                        <th className="product-list__th">Id</th>
                        <th className="product-list__th">Image</th>
                        <th className="product-list__th">Name</th>
                        <th className="product-list__th">Key</th>
                        <th className="product-list__th">Category Name</th>
                        <th className="product-list__th">Created At</th>
                        <th className="product-list__th">Actions</th>
                    </tr>
                </thead>
                {products.length > 0 ?
                    products.map(category => <tr className="product-list__tr">
                        <td className="product-list__td">{category._id}</td>
                        <td className="product-list__td product-list__product-image-container">
                            {category.attachments && category.attachments.length > 0 &&
                                <img
                                    className="product-list__product-image"
                                    src={"http://localhost:8000/api/static/images/products/" + category.attachments[0]}
                                />
                            }
                        </td>
                        <td className="product-list__td">{category.name}</td>
                        <td className="product-list__td">{category.key}</td>
                        <td className="product-list__td">{category.categoryId}</td>
                        <td className="product-list__td">{category.createdAt}</td>
                        <td className="product-list__td">
                            <Link className="action-btn" to={"/sub-category/edit/" + category._id}><i class="far fa-edit"></i></Link>
                            <button className="action-btn" onClick={() => deleteCategory(category._id)}><i class="far fa-trash-alt"></i></button>
                        </td>
                    </tr>) :
                    <tr>No Data...</tr>}
            </table>
        </div>
    );
}

export default ListProduct;