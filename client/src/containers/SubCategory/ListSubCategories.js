import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSubCategories, deleteSubCategoryById } from "../../core/category";
import "./ListCategories.css";

const ListProduct = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getSubCategories()
            .then((categories) => {
                if (categories && categories.length > 0) setCategories(categories);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const deleteCategory = async (id) => {
        let response = await deleteSubCategoryById(id)

        if (response.ok === 1) {
            getSubCategories()
                .then((categories) => {
                    if (categories && categories.length > 0) setCategories(categories);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    return (
        <div className="category-list__container">
            <div className="page-header">All Sub Categories ({categories.length})</div>
            <table className="category-list__card">
                <thead>
                    <tr className="category-list__tr">
                        <th className="category-list__th">Id</th>
                        <th className="category-list__th">Name</th>
                        <th className="category-list__th">Key</th>
                        <th className="category-list__th">Category Name</th>
                        <th className="category-list__th">Created At</th>
                        <th className="category-list__th">Actions</th>
                    </tr>
                </thead>
                {categories.length > 0 ?
                    categories.map(category => <tr className="category-list__tr">
                        <td className="category-list__td">{category._id}</td>
                        <td className="category-list__td">{category.name}</td>
                        <td className="category-list__td">{category.key}</td>
                        <td className="category-list__td">{category.categoryId}</td>
                        <td className="category-list__td">{category.createdAt}</td>
                        <td className="category-list__td">
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