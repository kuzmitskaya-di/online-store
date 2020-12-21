import './App.css';
import Header from "./features/header/Header";
import Navbar from "./features/navbar/Navbar";
import Footer from "./features/footer/Footer";
import Slider from "./features/slider/Slider";


function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
