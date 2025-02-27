import { useForm, FormProvider, set } from "react-hook-form";
import { useState, useEffect } from "react";
import "./payment.css";
import { IoCardOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import PAymentHeader from "../../components/Header2/index";
import PaymentFooter from "../../components/Footer/index";
import PaymentCrud from "../../components/CRUDD/Crud";
import PaymentCart from "../../pages/Cart/index";
import cartItems from "../../pages/Cart/index";
import { TbCards } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";
import masterVisa from "../../assets/images/visa-master.webp";
import humoUzcard from "../../assets/images/humo-uzcard.webp";
import dddd from "../../assets/images//free-icon-empty-archive-13982857.png"
export default function App() {
  const methods = useForm();
  const { register, handleSubmit, formState: { errors } } = methods;
  const [region, setRegion] = useState("");
  const [cityOptions, setCityOptions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [actives, setActives] = useState(false);
  const [address, setAddress] = useState('')
  const [opens, setOpens] = useState(false);

  const regions = {
    "Toshkent": ["Chilonzor", "Yunusobod", "Mirzo Ulug‘bek", "Bektemir", "Sergeli"],
    "Samarqand": ["Samarqand shahri", "Urgut", "Kattaqo‘rg‘on", "Jomboy", "Payariq"],
    "Farg‘ona": ["Farg‘ona shahri", "Marg‘ilon", "Qo‘qon", "Rishton", "Oltiariq"],
    "Andijon": ["Andijon shahri", "Asaka", "Xonobod", "Shahrixon", "Marhamat"],
    "Namangan": ["Namangan shahri", "Chortoq", "Chust", "Uchqo‘rg‘on", "Pop"],
    "Buxoro": ["Buxoro shahri", "G‘ijduvon", "Kogon", "Vobkent", "Olot"],
    "Xorazm": ["Urganch", "Xiva", "Pitnak", "Gurlan", "Shovot"],
    "Qashqadaryo": ["Qarshi", "Shahrisabz", "Kitob", "Koson", "G‘uzor"],
    "Surxondaryo": ["Termiz", "Denov", "Sherobod", "Muzrabot", "Boysun"],
    "Jizzax": ["Jizzax shahri", "G‘allaorol", "Paxtakor", "Zomin", "Do‘stlik"],
    "Sirdaryo": ["Guliston", "Shirin", "Yangiyer", "Sirdaryo", "Sayxunobod"],
    "Navoiy": ["Navoiy shahri", "Zarafshon", "Karmana", "Qiziltepa", "Konimex"],
    "Qoraqalpog‘iston": ["Nukus", "Beruniy", "To‘rtko‘l", "Chimboy", "Mo‘ynoq"]
  };
  const [isSecondDeliveryVisible, setIsSecondDeliveryVisible] = useState(false);
  const handleRegionChange = (e) => {
    const selectedRegion = e.target.value;
    setRegion(selectedRegion);
    setCityOptions(regions[selectedRegion] || []);

    // Viloyat tanlangan bo'lsa, qo'shimcha dostavka blokini ko'rsatish
    setIsSecondDeliveryVisible(selectedRegion !== "");
  };




  const handleRegionChange2 = (e) => {
    const selectedRegion = e.target.value;
    setRegion(selectedRegion);
    setCityOptions(regions[selectedRegion] || []);
  };

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.startsWith("998")) {
      value = value.slice(3);
    }
    if (value.length > 9) {
      value = value.slice(0, 9);
    }
    e.target.value = `+998 (${value.slice(0, 2)}) ${value.slice(2, 5)}-${value.slice(5, 7)}-${value.slice(7, 9)}`;
  };

  const onSubmit = (data) => {
    console.log("Form data:", data);
    setIsModalOpen(true);
  };
  useEffect(() => {
    const forsiDiv = document.querySelector(".forsi");

    if (forsiDiv) {
      forsiDiv.addEventListener("click", function () {
        const extraDivs = document.querySelector(".extra-payment-options");

        // Agar qo'shimcha divlar bor bo'lsa, olib tashlaymiz va `.forsi` ni tiklaymiz
        if (extraDivs) {
          extraDivs.remove();
          forsiDiv.style.border = "none";
          return;
        }

        // `.forsi` divning stilini o'zgartirish
        forsiDiv.style.border = "1px solid #ccc";
        forsiDiv.style.background = "transparent";

        // Yangi div container yaratamiz
        const newDivContainer = document.createElement("div");
        newDivContainer.className = "extra-payment-options";

        // 1-chi qo‘shimcha div (UzCard, Humo)
        const extraDiv1 = document.createElement("div");
        extraDiv1.className = "payment-option";
        extraDiv1.innerHTML = `
          <img src={humoUzcard} alt="Humo UzCard" />
        `;

        // 2-chi qo‘shimcha div (Visa, MasterCard)
        const extraDiv2 = document.createElement("div");
        extraDiv2.className = " extra-payment-option2";
        extraDiv2.innerHTML = `
          <img src="../../assets/images/visa-master.webp" alt="Visa MasterCard" />
        `;

        // Yangi divlarni containerga qo‘shish
        newDivContainer.appendChild(extraDiv1);
        newDivContainer.appendChild(extraDiv2);

        // Asosiy `.forsi` divining pastiga qo'shish
        forsiDiv.after(newDivContainer);
      });
    }
  }, []);


  return (
    <>
      <PAymentHeader />
      <FormProvider {...methods}>
        <>
          <h1>Оформление заказа</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="form-container">
            <div className="form-row">

              <div>
                <label className="label">Телефон *</label>
                <input
                  type="text"
                  {...register("phone", { required: true })}
                  onInput={handlePhoneChange}
                  defaultValue="+998 (__) ___-__-__"
                  className="input"
                />
                {errors.phone && <span className="error-text">Telefon raqami majburiy</span>}
              </div>
              <div>
                <label className="label">ФИО *</label>
                <input
                  type="text"
                  {...register("fullName", { required: true })}
                  className="input"
                  placeholder="Имя Фамилия Отчество"
                  autoComplete="off"
                  style={{ textTransform: "capitalize" }}
                  onInput={(e) => {
                    e.target.value = e.target.value
                      .replace(/[^a-zA-Zа-яА-Я\s]/g, "")
                      .replace(/\s+/g, " ")
                      .trim();
                  }}
                  onPaste={(e) => {
                    e.preventDefault();
                    const pastedText = e.clipboardData.getData("text");
                    const cleanedText = pastedText
                      .replace(/[^a-zA-Zа-яА-Я\s]/g, "")
                      .replace(/\s+/g, " ")
                      .trim();
                    e.target.value = cleanedText;
                  }}
                  onCopy={(e) => {
                    e.preventDefault();
                    const copiedText = e.clipboardData.getData("text");
                    const cleanedText = copiedText
                      .replace(/[^a-zA-Zа-яА-Я\s]/g, "")
                      .replace(/\s+/g, " ")
                      .trim();
                    e.target.value = cleanedText;
                  }}
                />
                {errors.fullName && <span className="error-text">Ism-sharif majburiy</span>}
              </div>
            </div>
            <div className="form-row">

              <div>
                <label className="label">Регион *</label>
                <select
                  {...register("region", { required: true })}
                  className="select"
                  onChange={handleRegionChange}
                >
                  <option value="">Выбрать</option>
                  {Object.keys(regions).map((reg) => (
                    <option key={reg} value={reg}>{reg}</option>
                  ))}
                </select>
                {errors.region && <span className="error-text">Viloyat majburiy</span>}
              </div>

              <div>
                <label className="label">Город *</label>
                <select {...register("city", { required: true })} className="select">
                  <option value="">Выбрать</option>
                  {cityOptions.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
                {errors.city && <span className="error-text">Shahar majburiy</span>}
              </div>
            </div>
            <div>

              <b>Способ получения</b>
              <div className="for">
                <div onClick={() => setActive(!active)} className={`delivery ${active ? 'active' : ''}`}>
                  <b>Доставка до двери</b>
                  <p><FaCheck className="Cje" color="green" /> Стоимость доставки: 30 000 сум</p>
                </div>

                {isSecondDeliveryVisible && (
                  <div onClick={() => setActives(!actives)} className={`delivery ${actives ? 'active' : ''}`}>
                    <b>Пункт выдачи</b>
                    <p><FaCheck className="Cje" color="green" />Бесплатная доставка</p>
                    <p><FaCheck className="Cje" color="green" />Срок хранения заказа 5 дней</p>
                    <p><FaCheck className="Cje" color="green" />Можно проверить товар</p>
                    <p><FaCheck className="Cje" color="green" />Возврат товара быстро </p>
                  </div>
                )}
              </div>
              <div className="fors">
                <label htmlFor="">Населённый пункт
                </label>
                <select {...register("address", { required: true })} className="select">
                  <option value="">Выбрать</option>
                  {cityOptions.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
                {errors.address && <span className="error-text">Населённый пункт majburiy</span>}
              </div>
              <div className="fors">
                <label htmlFor="">Aдрес</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Aдрес"
                  autoComplete="off"
                  {...register("add", {
                    required: "Aдрес majburiy",
                    minLength: {
                      value: 5,
                      message: "Aдрес kamida 5 ta belgidan iborat bo‘lishi kerak"
                    },
                    pattern: {
                      value: /^(?=.*\d)(?=.*@).{5,}$/,
                      message: "Aдресda '@' belgisi va kamida 1 ta son qatnashishi shart"
                    }
                  })}
                />
                {errors.add && <span className="error-text">{errors.add.message}</span>}

              </div>
              <div className="fors">
                <label htmlFor="">Ориентир</label>
                <input type="text" className="input" />
              </div>
              <div className="ttte">
                <label htmlFor="fff">Ваш рабочий адрес</label>
                <textarea cols="30" rows="10" className="" name="" id="fff"></textarea>
              </div>
              <div className="qqqq">
                <label htmlFor="sss">Комментарий к заказу</label>
                <textarea name="" id="sss"></textarea>
              </div>
              <div className="forss">
                <label htmlFor="">
                  Есть промокод?</label>
                <input className="input" type="text" />
              </div>
              <b>Способ оплаты</b>
              <div className="forsi">
                <p><IoCardOutline size={25} className="Cje" />Картой онлайн (UzCard, Humo, Visa, MasterCard)</p>
              </div>
              <div onClick={() => setActives(!actives)} className={`forsi ${actives ? 'active' : ''}`} >
                <p><TbCards size={25} className="Cje" /> При получении (Наличными)</p>
              </div>
              <div className="forsi">
                <p><FaRegUserCircle size={25} className="Cje" /> Оплата с лицевого счёта</p>
              </div>
              <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.522062568763!2d69.24011341576352!3d41.32686697928881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0c7a9a8f2d%3A0x6a8e3b3e3d6b0c4!2sAsaxiy%20Tashkent!5e0!3m2!1sru!2s!4v1704269727817!5m2!1sru!2s" width={"100%"} height={"400px"} loading="lazy" ></iframe>
              </div>
              <div className="forsr">
                <input type="checkbox" id="gg" />
                <label htmlFor="gg">Я согласен с
                  <span>правилами</span>
                  и условиями покупки товаров  </label>
              </div>

            </div>
            <div className="sumbit">
              <button type="submit" className="submit-button">Заказать</button>
              <button className="back">Назад</button>
            </div>
          </form>

          <>
            <div className='fixed chala'>
              <p className="first-text">В корзине {cartItems.length} товара</p>

              <div className="slld">
                <p className='sum'>
                  Цена товара
                </p>
                <span>
                  {cartItems.price * cartItems.count * 13000 / 2}
                </span>
              </div>
              <p className="sum">
                Цена доставки <span>{active ? 30000 : 0} сум</span>
              </p>
              <p className="sum">
                Общая сумма <span>{cartItems.price * cartItems.count * 13000 + (active ? 30000 : 0)}</span>
              </p>
            </div>
          </>

        </>
        {/* Modal */}
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <p>✅ Спасибо, ваш заказ принял</p>
              <button className="close-button" onClick={() => setIsModalOpen(false)}>OK</button>
            </div>
          </div>
        )}
      </FormProvider>
      <PaymentCrud />
      <PaymentFooter />

    </>
  );
}
