import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/NavbarMenu';
import NavbarMenu from './components/NavbarMenu';
import Products from './components/Products';
import SingleProduct from './components/SingleProduct';
import AddNewProduct from './components/AddNewProduct';
import {BrowserRouter, Routes, Route} from "react-router-dom" 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavbarMenu />
      <Routes>
        <Route exact path="/" element={<Products />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:productId" element={<SingleProduct />}></Route>
        <Route path="/addproduct" element={<AddNewProduct />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
