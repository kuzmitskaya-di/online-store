import './App.css';
import Header from "./features/header/Header";
import Navbar from "./features/navbar/Navbar";
import Footer from "./features/footer/Footer";
import Slider from "./features/slider/Slider";
import BestSeller from "./features/best-seller/BestSeller";
import StaticBlock from "./features/static-block/StaticBlock";
import Categories from "./features/categories/Categories";
import ProductList from "./features/product-list/ProductList";
import PromoCode from "./features/promo-code/PromoCode";


function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Slider/>
            <BestSeller/>
            <StaticBlock/>
            <Categories/>
            <ProductList/>
            <PromoCode/>
            <Footer/>
        </div>
    );
}

export default App;
