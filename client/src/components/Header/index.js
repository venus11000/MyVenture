import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories, getSubCategoriesByCategoryId } from "../../core/category";
import "./style.css";

const SubCategory = ({ categoryId }) => {
    const [subCategories, setSubCategories] = useState([]);

    useEffect(() => {
        getSubCategoriesByCategoryId(categoryId)
            .then((subCategories) => {
                if (subCategories && subCategories.length > 0) setSubCategories(subCategories);
            })
            .catch((error) => {
                console.log(error);
            })

    }, []);

    return (
        <div className="sub-category-wrapper">
            {subCategories.map(subCategory =>
                <Link
                    to={"/products?categoryId=" + categoryId + "&subCategoryId=" + subCategory._id}
                    key={subCategory._id}
                >
                    <div
                        className="sub-category-menu"
                    >
                        {subCategory.name}
                    </div>
                </Link>)}
        </div>
    );
}

const Header = () => {
    const [categories, setCategories] = useState([]);
    const [activeCategoryId, setActiveCat] = useState(null);
    let user = localStorage.getItem("user");
    user = user ? JSON.parse(user) : null;

    useEffect(() => {
        getCategories()
            .then((categories) => {
                if (categories && categories.length > 0) setCategories(categories);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])

    return (
        <div>
            {/* Primary Header */}
            <div className="header-container">
                <Link to="/"><div className="header_logo">My Venture</div></Link>
                <div>
                    <Link className="menu-item" to="/search"><i class="fas fa-search"></i> Search</Link>
                    {user ?
                        <>
                            <Link className="menu-item" to="/appointments">My Appointment</Link>
                            <Link className="menu-item" to="/account"><i class="far fa-user-circle"></i> Account</Link>
                        </>
                        : <>
                            <Link className="menu-item" to="/register">Register</Link>
                            <Link className="menu-item" to="/login">Login</Link>
                        </>
                    }
                </div>
            </div>

            {/* Secondary Header */}
            {!user && <div className="category-items">
                {categories.map(category => (
                    <div className="category-wrapper" key={category._id}
                        onMouseEnter={() => setActiveCat(category._id)}
                        onMouseLeave={() => setActiveCat(null)}
                    >
                        <Link
                            to={"/products?categoryId=" + category._id}
                        >
                            <div
                                className="category-menu"
                            >
                                {category.name} <i class="fas fa-chevron-down"></i>
                            </div>
                        </Link>
                        {category._id === activeCategoryId && <SubCategory categoryId={category._id} />}
                    </div>
                ))}
            </div>}

            {user && user.isAdmin === "1" &&
                <div className="category-items">
                    <div class="dropdown">
                        <button class="dropbtn">Category</button>
                        <div class="dropdown-content">
                            <Link to={"/category/create"}>Create</Link>
                            <Link to={"/category/list"}>List</Link>
                        </div>
                    </div>
                    
                    <div class="dropdown">
                        <button class="dropbtn">Sub Category</button>
                        <div class="dropdown-content">
                            <Link to={"/sub-category/create"}>Create</Link>
                            <Link to={"/sub-category/list"}>List</Link>
                        </div>
                    </div>
                    
                    <div class="dropdown">
                        <button class="dropbtn">Products</button>
                        <div class="dropdown-content">
                            <Link to={"/product/create"}>Create</Link>
                            <Link to={"/product/list"}>List</Link>
                        </div>
                    </div>
                </div>}
        </div>
    );
}

export default Header;