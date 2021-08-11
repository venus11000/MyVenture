import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Homepage from "./Homepage";
import ProductsList from "./ProductsList";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Switch>
                    <div className="container">
                        <Route path="/" exact component={Homepage} />
                        <Route path="/products" exact component={ProductsList} />
                    </div>
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;