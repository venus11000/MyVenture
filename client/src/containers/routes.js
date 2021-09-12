import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Homepage from "./Homepage";
import ProductsList from "./ProductsList";
import ProductDetails from "./ProductDetails";
import Search from "./Search";
import Login from "./Login";
import Register from "./Register";
import CreateCategory from "./CategoryCRUD/CreateCategory";
import ListCategory from "./CategoryCRUD/ListCategories";
import EditCategory from "./CategoryCRUD/EditCategory";
import CreateSubCategory from "./SubCategoryCRUD/CreateSubCategory";
import EditSubCategory from "./SubCategoryCRUD/EditSubCategories";
import ListSubCategory from "./SubCategoryCRUD/ListSubCategories";
import CreateProduct from "./ProductCRUD/CreateProduct";
import EditProduct from "./ProductCRUD/EditProduct";
import ListProduct from "./ProductCRUD/ListProducts";
import { ContactUs } from "./ContactUs";
import { About } from "./About";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Switch>
                    <div className="container">
                        <Route path="/" exact component={Homepage} />
                        <Route path="/products" exact component={ProductsList} />
                        <Route path="/product-details" exact component={ProductDetails} />
                        <Route path="/search" exact component={Search} />
                        <Route path="/contact-us" exact component={ContactUs} />
                        <Route path="/about" exact component={About} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/register" exact component={Register} />
                        <Route path="/category/create" exact component={CreateCategory} />
                        <Route path="/category/edit/:id" exact component={EditCategory} />
                        <Route path="/category/list" exact component={ListCategory} />
                        <Route path="/sub-category/create" exact component={CreateSubCategory} />
                        <Route path="/sub-category/edit/:id" exact component={EditSubCategory} />
                        <Route path="/sub-category/list" exact component={ListSubCategory} />
                        <Route path="/product/create" exact component={CreateProduct} />
                        <Route path="/product/edit/:id" exact component={EditProduct} />
                        <Route path="/product/list" exact component={ListProduct} />
                    </div>
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;