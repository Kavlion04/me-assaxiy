import "./style.css"
import { FaBoxesPacking } from "react-icons/fa6";
import { FaTruckFast } from "react-icons/fa6";
import { FaBox } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";

const Crud = () => {
    return (
        <div className="footer-toop">
            <div className="all-card">
                <div className="card1">
                    <FaBoxesPacking size={40} />
                    <div>
                        <b>Больше не нужно ходить на базар</b>
                        <p>У нас выгодные цены и доставка до дома
                        </p>
                    </div>
                </div>
                <div className="card1">
                    <FaTruckFast size={40} />
                    <div>
                        <b>Быстрая доставка</b>
                        <p>delivery
                            Наш сервис удивит вас
                        </p>
                    </div>
                </div>
                <div className="card1">
                    <FaBox size={40}/>
                    <div>
                        <b>Удобства для вас</b>
                        <p>
                            Быстрое оформление и гарантия на возврат в случае неисправности
                        </p>
                    </div>
                </div>
                <div className="card1">
                    <FaRegCreditCard  size={40}/>
                    <div>
                        <b>Рассрочка</b>
                        <p>
                            Без предоплаты на 3, 6 или 12 месяцев
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Crud