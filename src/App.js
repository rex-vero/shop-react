import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom";
import Shop from './pages/Shop';
import Product from './pages/Product';
import Checkout from './pages/Checkout';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/products/:id' element={<Product />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
