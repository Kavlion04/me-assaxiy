import React from 'react'
import "./acordion.css"
import { IoIosArrowDown } from "react-icons/io";
import { t } from "i18next";

const Acordion = () => {
  return (
    <div className='boxs'>
        <h1>{t("О компании Asaxiy.uz")}</h1>
        <p>
        {t("Главное преимущество нашей компании, которая занимается поставками бытовой техники и электроники в Узбекистане – многолетний опыт работы и заслуженное доброе имя. С момента своего развития интернет-магазин Asaxiy и его команда неустанно следит за тенденциями спроса потребительского рынка, что дает нам возможность всегда быть в курсе самых последних технологий и инновационных решений. Специалисты компании внимательно изучают желания наших клиентов, поэтому ресурс постоянно обновляется качественными новинками, имеющими доступную стоимость.")}
        </p>
        <hr />
        <div className='div'>
            <b>{t("Принцип работы компании")}</b>
            < IoIosArrowDown size={20} />
        </div>
        <div className='div'>
            <b>{t("Наши преимущество")}</b>
            < IoIosArrowDown size={20} />
        </div>
        <hr />
        <div className='div-b'>
            <b>
                "Asaxiy Books" OOO
            </b>
            <b>{t("Регистрация: 646439")}</b>
            <b>{t("ИНН :305829008")}</b>
            <b>{t("Директор: Allayev Firuz Abdunasimovich")}</b>
        </div>

    </div>
  )
}

export default Acordion