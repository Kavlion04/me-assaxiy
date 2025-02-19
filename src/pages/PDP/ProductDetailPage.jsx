import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../../API';
import './PDP.css'
import { FaBasketShopping } from "react-icons/fa6";
import { FaShoppingCart, FaTruck, FaStar, FaRegHeart, FaHeart } from "react-icons/fa";
import { RiScales3Fill } from "react-icons/ri";
const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({})
  useEffect(() => {
    api.get(`/product/${id}`)
      .then(res => setProduct(res.data))
  }, [id])
  const navigate = useNavigate();
  return (
    <div className='products-detail'>
      <img src={product.thumbnail} alt="" />
      <div className='btnsss rur'>
        <button onClick={() => setheart(heart + 1)} className='heart'><FaHeart size={20} /></button>
        <button className='scale'><RiScales3Fill size={30} /></button>
      </div>
      <div className='bt'>
        <button className='super'>Супер цена</button>
        <button className='date'>01.03.2025</button>
      </div>
      <div className='products-detail-info'>
        <button className='btn' onClick={() => navigate("/")}>back</button>
        <b>
          {product.description}
        </b>
        <div>
          <FaStar className="rating" size={15} color="orange" />
          <FaStar className="rating" size={15} color="orange" />
          <FaStar className="rating" size={15} color="orange" />
          <FaStar className="rating" size={15} color="orange" />
          <FaStar className="rating" size={15} color="orange" />
        </div>
        <p><del>{product.price * 13000}сум</del></p>
        <p className='price'>
          {product.price * 13000 / 2}сум
        </p>
        
        <div className='buying'>
        <button className='buy2'><FaBasketShopping color='white' size={30} />Добавить в корзину</button>
        <button className='buy'>Купить в один клик</button>
        </div>
      </div>
    </div>
  )
}


export default ProductDetailPage