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
import { t } from "i18next";



const Footer = () => {
    return (
        <footer>
            <div className='footer'>


                <div className='info'>
                    <b>{t("Информация")}</b>
                    <p>{t("Часто задаваемые вопросы")}</p>
                    <p>{t("Новости")}</p>
                    <p>{t("Блог")}</p>
                    <p>{t("Наши бренды")}</p>
                    <p>{t("Карьера в Asaxiy ")}</p>
                    <p>{t("Оферта для рассрочки")}</p>
                    <p>{t("О нас")}</p>
                    <p>{t("Карта Сайта")}</p>
                </div>
                <div className='contact'>

                    <div>
                        <b>{t("Для связи")}</b>
                        <p>{t("Телефон: +998 71 200 01 05")}</p>
                        <p>{t("info@asaxiy.uz")}</p>
                        <p>{t("Telegram bot")}</p>
                        <p>{t("Улица Чиланзар 45/2, Ташкент")}</p>
                    </div>
                    <div>
                        <b>{t("Программы лояльности")}</b>
                        <p>{t("Статус \"El-yurt ishonchi\"")}"</p>
                        <p>{t("Оферта 'Asaxiy plus'")}</p>
                        <p>Оферта "Asaxiy plus"</p>
                    </div>
                </div>
                <div className='delivery'>
                    <b>{t("Доставка и магазины")}</b>
                    <button><AiOutlineShop size={20} />{t("Наши Магазины ")} <FaAngleRight /></button>
                    <button><FaMapLocationDot size={20} />{t("Пункты выдачи ")}<FaAngleRight /></button>
                    <button><FaTruckFast  size={20}/> {t("Доставка ")}<FaAngleRight /></button>
                </div>
                <div className='payment'>

                    <div className='cards'>
                        <b>{t("Виды оплаты")}</b>
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
                            {t("Мы в соц. сетях")}
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
                {t("2015 - 2025 Интернет-магазин asaxiy.uz: Бытовая техника и др. Доставка товаров осуществляется во все регионы. Все права защищены.")}
            </p>

        </footer>
    )
}

export default Footer;