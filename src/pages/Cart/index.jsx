import React, { useState, useEffect } from 'react';
import { FaHeart, FaStar } from 'react-icons/fa6';
import { RiScales3Fill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import "./index.css";
import likedProducts from "../../components/Header/Header"
import handleAddToCart from "../../components/Header/Header"
import { MdOutlineRemoveShoppingCart, MdOutlineShoppingCart } from 'react-icons/md';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // LocalStorage'dan cart ma'lumotlarini olish
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(cart);
    }, []);

    return (
        <div >
            <h1>Ваши товары в корзине</h1>
            <div className='cart'>
                {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                        <div key={item.id}>
                            <ul className='product-lists'>


                                <li onClick={() => navigate(`/product/${item.id}`)} className="product" key={item.id}>
                                    <div>
                                        <img className="product-image" src={item.thumbnail} alt={item.title} />
                                        <div className='btnsss'>
                                            <button onClick={() => setheart(heart + 1)} className='heart'><FaHeart size={20} /></button>
                                            <button className='scale'><RiScales3Fill size={30} /></button>
                                        </div>
                                    </div>
                                    <div className="product-info">
                                        <button className='btna'>Супер цена</button>
                                        <p className='titles'>{item.title}</p>
                                        <div className='stars'>
                                            <div>
                                                <FaStar className="rating" size={15} color="orange" />
                                                <FaStar className="rating" size={15} color="orange" />
                                                <FaStar className="rating" size={15} color="orange" />
                                                <FaStar className="rating" size={15} color="orange" />
                                                <FaStar className="rating" size={15} color="orange" />
                                            </div>
                                            <p className='reviews'>19 отзывов</p>
                                        </div>
                                        <p className='skidka'><del>{Math.floor(item.price * 13000)} сум</del></p>
                                        <p className="prices">{Math.floor(item.price * 13000 / 2)} сум</p>
                                        <div className='pricess'>
                                            250.000 сум x 12 мес
                                        </div>
                                        <div className='btni'>
                                            <button className='btn1'>Купить в один клик</button>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleAddToCart(item);
                                                    setCount(count + 1);
                                                }}
                                                className="btns"
                                            >

                                                {likedProducts[item.id] ? (

                                                    <MdOutlineRemoveShoppingCart size={20} color="black" />

                                                ) : (
                                                    <MdOutlineShoppingCart color='white' size={20} />

                                                )}

                                            </button>
                                        </div>

                                    </div>
                                </li>
                            </ul>
                        </div>
                    ))
                ) : (
                    <p>Корзина пуста</p>
                )}
            </div>
        </div>
    );
};

export default Cart;
