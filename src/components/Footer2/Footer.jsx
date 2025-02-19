import { FaTruckFast } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { AiOutlineShop } from "react-icons/ai";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import "./Footer.css";



const Footer = () => {
    return (
        <footer>
            <div className='footer'>


                <div className='info'>
                    <b>Информация</b>
                    <p>Часто задаваемые вопросы</p>
                    <p>Новости</p>
                    <p>Блог</p>
                    <p>Наши бренды</p>
                    <p>Карьера в Asaxiy </p>
                    <p>Оферта для рассрочки</p>
                    <p>О нас</p>
                    <p>Карта Сайта</p>
                </div>
                <div className='contact'>

                    <div>
                        <b>Для связи</b>
                        <p>Телефон: +998 71 200 01 05</p>
                        <p>info@asaxiy.uz</p>
                        <p>Telegram bot</p>
                        <p>Улица Чиланзар 45/2, Ташкент</p>
                    </div>
                    <div>
                        <b>Программы лояльности</b>
                        <p>Статус "El-yurt ishonchi"</p>
                        <p>"Asaxiy plus"</p>
                        <p>Оферта "Asaxiy plus"</p>
                    </div>
                </div>
                <div className='delivery'>
                    <b>Доставка и магазины</b>
                    <button><AiOutlineShop size={20} />Наши Магазины <FaAngleRight /></button>
                    <button><FaMapLocationDot size={20} />Пункты выдачи <FaAngleRight /></button>
                    <button><FaTruckFast  size={20}/>Доставка <FaAngleRight /></button>
                </div>
                <div className='payment'>

                    <div className='cards'>
                        <b>Виды оплаты</b>
                        <div className='cards2'>
                            <button>< FaCcMastercard size={30} /></button>
                            <button><FaCcVisa size={30} /></button>
                            <button>< FaCcMastercard size={30} /></button>
                            <button><FaCcVisa size={30} /></button>
                            <button>< FaCcMastercard size={30} /></button>
                            <button><FaCcVisa size={30} /></button>
                        </div>
                    </div>
                    <div className='social'>
                        <b>
                            Мы в соц. сетях
                        </b>
                        <div className='social2'>
                            <FaFacebook size={30} />
                            <FaTelegram size={30} />
                            <FaInstagram size={30} />
                            <FaYoutube size={30} />
                            <FaWifi size={30} />
                        </div>
                    </div>
                </div>
            </div>
            <p className='copy'>
                2015 - 2025 Интернет-магазин asaxiy.uz: Бытовая техника и др. Доставка товаров осуществляется во все регионы. Все права защищены.
            </p>

        </footer>
    )
}

export default Footer;