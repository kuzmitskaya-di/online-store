import './App.css';
import Header from "./features/header/Header";
import Navbar from "./features/navbar/Navbar";
import Footer from "./features/footer/Footer";


function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
