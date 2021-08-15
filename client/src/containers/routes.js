import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Homepage from "./Homepage";
import ProductsList from "./ProductsList";
import ProductDetails from "./ProductDetails";
import Search from "./Search";
import Login from "./Login";
import Register from "./Register";

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
                        <Route path="/login" exact component={Login} />
                        <Route path="/register" exact component={Register} />
                    </div>
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;