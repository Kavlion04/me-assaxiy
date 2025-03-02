import "./style.css"
import { FaBoxesPacking } from "react-icons/fa6";
import { FaTruckFast } from "react-icons/fa6";
import { FaBox } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import { t } from "i18next";

const Crud = () => {
    return (
        <div className="footer-toop">
            <div className="all-card">
                <div className="card1">
                    <FaBoxesPacking size={40} />
                    <div>
                        <b>{t("Больше не нужно ходить на базар")}</b>
                        <p>{t("У нас выгодные цены и доставка до дома")}
                        </p>
                    </div>
                </div>
                <div className="card1">
                    <FaTruckFast size={40} />
                    <div>
                        <b>{t("Быстрая доставка")}</b>
                        <p>
                            {t("Наш сервис удивит вас")}
                        </p>
                    </div>
                </div>
                <div className="card1">
                    <FaBox size={40} />
                    <div>
                        <b>{t("Удобства для вас")}</b>
                        <p>
                            {t("Быстрое оформление и гарантия на возврат в случае неисправности")}
                        </p>
                    </div>
                </div>
                <div className="card1">
                    <FaRegCreditCard  size={40}/>
                    <div>
                        <b>{t("Рассрочка")}</b>
                        <p>
                            {t("Без предоплаты на 3, 6 или 12 месяцев")}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Crud