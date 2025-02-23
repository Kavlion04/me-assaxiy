import React from 'react'
import logo from "../../assets/icons/idZ3IrJ-df_1739656568667.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import App2 from "../Input/Input";
import { RiScales3Fill } from "react-icons/ri";
import { SlCreditCard, SlBasket } from "react-icons/sl";
import { FaTruck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import uzbFlag from "../../assets/icons/—Pngtree—uzbekistan flag png with transparent_6742219.png";
import { CiUser } from "react-icons/ci";

import { FaShoppingCart,  FaStar, FaRegHeart, FaHeart } from "react-icons/fa";




const CartHeader = () => {
    return (
        <div>
            <div className='header-top'>
                <img style={{ cursor: "pointer" }} onClick={() => navigate("/")} src={logo} alt="" />
                <button className='burger'><GiHamburgerMenu />Категории</button>
                <App2 
                    onChange={(e) => setSearchTerm(e.target.value)} width={'400px'} />
                <div className='navv-1'>
                    <RiScales3Fill className='icon' size={20} />
                    <p>
                        Сравнение
                    </p>

                </div>
                <div className='navv-1'>
                    <SlCreditCard className='icon' size={20} />
                    <p>
                        Оплатить
                    </p>

                </div>
                <div className='navv-1'>
                    <FaTruck className='icon' size={20} />
                    <p>
                        Отследить
                    </p>

                </div>
                <div className='navv-1' onClick={() => navigate("/cart")}>
                    <SlBasket className='icon' size={20} />
                    <p>Корзина</p>
                    <button className='navv-1-btn'>{}</button>
                </div>
                <div className='navv-1'>
                    <FaRegHeart className='icon' size={20} />
                    <p>
                        Избранное
                    </p>
                    <button className='navv-1-btn'>0</button>
                </div>
                <div className='navv-1'>
                    <div>
                        <img width={20} height={20} src={uzbFlag} alt="" />
                    </div>
                    <p>
                        o'zbekcha
                    </p>

                </div>
                <div onClick={() => setOpen(true)} className='navv-1'>
                    <CiUser className='icon' size={20} />
                    <p>
                        Войти
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CartHeader