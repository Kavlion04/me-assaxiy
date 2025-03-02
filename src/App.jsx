import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/index';
import Product from "./pages/PDP/ProductDetailPage";
import NotFound from "./components/Not-found/index"
import ProductDetailModal from './pages/PDM/ProductDetailModal';
import Cart from './pages/Cart/index';
import { CartProvider } from './context';
import Payment from "./pages/Payment/index"
import PDP from "./pages/PDP/ProductDetailPage"
import "./utils/i18n"



const App = () => {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
        
        </Route>
        <Route path='product/:id' element={<Product />} onClick={(e) => e.stopPropagation()} />
        {/* <Route path='/' element={<ProductDetailModal />}></Route> */}
        <Route path="/cart" element={<Cart />} /> 
        <Route path='*' element={<NotFound />} />
        <Route path='/payment' element={<Payment />} />
        
        
      </Routes>
    </CartProvider>

  )
}

export default App;
