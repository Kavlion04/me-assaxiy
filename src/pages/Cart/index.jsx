import React, { useState, useEffect } from 'react';
import { MdOutlineDiscount } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import "./index.css";
import { CiHeart } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import notprocuct from "../../assets/images/basket_no_page.webp";
import Footer from '../../components/Footer/index';
import CartHeader from '../../components/Header2/index';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(cart.map(item => ({ ...item, count: item.count || 1 })));
    }, []);

    // Mahsulot sonini o'zgartirish
    const updateCount = (id, newCount) => {
        if (newCount < 1) return;
        const updatedCart = cartItems.map(item =>
            item.id === id ? { ...item, count: newCount } : item
        );
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart)); // LocalStorage'ni yangilash
    };

    return (
        <div>
            <CartHeader />
            <div className='cart'>
                {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                        <div key={item.id}>
                            <ul className='product-lists sss'>
                                <li onClick={() => navigate(`/product/${item.id}`)} className="surfic">
                                    <img className="product-image" src={item.thumbnail} alt={item.title} />

                                    <div className='alls-p'>
                                        <p className='titles'>{item.title}</p>
                                        <p className='description'>{item.brand}</p>
                                        <button className='surfic-btn'>{item.category}</button>
                                    </div>

                                    <div className='count-box' onClick={(e) => e.stopPropagation()}>
                                        <button onClick={() => updateCount(item.id, item.count - 1)}>-</button>
                                        <p>{item.count}</p>
                                        <button onClick={() => updateCount(item.id, item.count + 1)}>+</button>
                                    </div>

                                    <div className='all-p'>
                                        <p className='skidka'><del>{Math.floor(item.price * 13000)} сум</del></p>
                                        <p className="prices">{Math.floor(item.price * 13000 / 2)} сум</p>
                                        <div className='pricess'>
                                            {Math.floor(item.price * 13000 / 6) * item.count} сум  x 12 мес
                                        </div>
                                    </div>
                                    <div className='dvi-ss'>
                                        <CiHeart size={15} color='gray' />
                                        <button className='delete' onClick={(e) => {
                                            e.stopPropagation();
                                            const updatedCart = cartItems.filter((i) => i.id !== item.id);
                                            setCartItems(updatedCart);
                                            localStorage.setItem("cart", JSON.stringify(updatedCart));
                                        }}><RiDeleteBin5Line size={15} color='gray' /></button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    ))
                ) : (
                    <div className='not'>
                        <img src={notprocuct} alt="" />
                        <b>В вашей корзине пока нет товаров</b>
                        <p>Начните с основ или найдите продукт с помощью функции поиска.</p>
                        <button className='btn' onClick={() => navigate("/")}>Начать покупки</button>
                    </div>
                )}


                {cartItems.length > 0 && (
                    <>
                        <div className='fixed'>
                            <div className='fixe'>
                                <p>В корзине {cartItems.length} товара</p>
                                <MdOutlineDiscount title='скидка' size={25} />
                            </div>
                            <p className='sum'>
                                Общая сумма: <span>
                                    {Math.floor(cartItems.reduce((total, item) => total + item.price * item.count * 13000 / 2, 0))} сум
                                </span>
                            </p>
                            <hr className='hr' />
                            <button onClick={() => navigate("/payment")} className='bta'>Оформить</button>
                            <button onClick={() => navigate("/")} className='bta '>Добавить еще</button>
                        </div>
                    </>
                )}

            </div>
            <Footer />
        </div>
    );
};

export default Cart;
