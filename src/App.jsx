import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/index';
// import Modal from "./pages/PDM/ProductDetailModal"
import Product from "./pages/PDP/ProductDetailPage";
import NotFound from "./components/Not-found/index"
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        </Route>
        <Route path='product/:id' element={<Product />} onClick={(e) => e.stopPropagation()} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>

  )
}

export default App;
