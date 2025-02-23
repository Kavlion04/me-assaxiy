import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import { FaBoxesPacking } from "react-icons/fa6";
import { FaTruckFast } from "react-icons/fa6";
import { FaBox } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import logo from "../../assets/icons/idZ3IrJ-df_1739656568667.svg";
import App2 from "../Input/Input";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiScales3Fill } from "react-icons/ri";
import { FaShoppingCart, FaTruck, FaStar, FaRegHeart, FaHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { SlCreditCard, SlBasket } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import uzbFlag from "../../assets/icons/—Pngtree—uzbekistan flag png with transparent_6742219.png";
import "../../pages/Home/Home.css";
import { useNavigate } from "react-router-dom";
import ModalWrapper from "../ModalWrapper/Modal";
import api from "../../API/index";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { useStateValues } from "../../pages/About/AboutFavorite";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [likedProducts, setLikedProducts] = useState({});
  const [count, setCount] = useState(0);
  const [heart, setheart] = useState(0);
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("All");
  const [priceFilter, setPriceFilter] = useState("Default");
  const [ratingFilter, setRatingFilter] = useState("Default");
  const navigate = useNavigate();
  const carouselRef = useRef(null);
  const [loadingi, setLoadinge] = useState(true);



  const handleAddToCart = (product) => {
    setLikedProducts((prev) => ({
      ...prev,
      [product.id]: !prev[product.id], 
    }));

    setCount((prev) => (likedProducts[product.id] ? prev - 1 : prev + 1)); 

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (likedProducts[product.id]) {
      const updatedCart = cart.filter((item) => item.id !== product.id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      localStorage.setItem("cart", JSON.stringify([...cart, product]));
    }
  };
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCount(cart.length);
  }, []);

  const handlePhoneChanges = (e) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    let formattedValue = "+998 ";

    if (rawValue.length > 2) formattedValue += `(${rawValue.slice(2, 4)}) `;
    if (rawValue.length > 4) formattedValue += `${rawValue.slice(4, 7)}-`;
    if (rawValue.length > 7) formattedValue += `${rawValue.slice(7, 9)}-`;
    if (rawValue.length > 9) formattedValue += rawValue.slice(9, 11);

    setPhone(formattedValue);
    setError(rawValue.length < 4);
  };




  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 300;
    }
  };




  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 300;
    }
  };
  useEffect(() => {
    setLoading(true);
    api
      .get(`products`, { params: { limit: 194 } })
      .then((res) => setProducts(res.data.products))
      .finally(() => setLoading(false));
  }, []);

  const handlePhoneChange = (e) => {
    const rawValue = e.target.value;
    const formattedValue = formatPhoneNumber(rawValue);

    setPhone(formattedValue);
    setError(formattedValue.length < 19); // To‘liq kiritilmasa xato chiqarish
  };
  // const haandleAddFavorite = (product) => {
  //   const isSomeWishlist = wishlist.some((item) => item.id === product.id)
  //   if(isSomeWishlist) {
  //     setWishlist(wishlist.filter((item) => item.id !== product.id))

  //   }else {

  //     setWishlist((prev) => [...prev, product])
  //   }

  // }

  const filteredProducts = () => {
    let sortedProducts = [...products];

    if (searchTerm.trim()) {
      sortedProducts = sortedProducts.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortOrder === "A-Z") {
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === "Z-A") {
      sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
    }

    if (priceFilter === "Low to High(price)") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (priceFilter === "High to Low(price)") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    if (ratingFilter === "1 to 5") {
      sortedProducts.sort((a, b) => a.rating - b.rating);
    } else if (ratingFilter === "5 to 1") {
      sortedProducts.sort((a, b) => b.rating - a.rating);
    }

    return sortedProducts;
  };

  return (
    <header>
      <div className='header-top'>
        <img src={logo} alt="" />
        <button className='burger'><GiHamburgerMenu />Категории</button>
        <App2 value={searchTerm}
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
          <button className='navv-1-btn'>{count}</button>
        </div>
        <div className='navv-1'>
          <FaRegHeart className='icon' size={20} />
          <p>
            Избранное
          </p>
          <button className='navv-1-btn'>{heart}</button>
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

        <nav>
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="filter-name filter">
            <option value="All">All</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
          <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)} className="filter-price filter">
            <option value="Default">Default</option>
            <option value="Low to High(price)">Low to High(price)</option>
            <option value="High to Low(price)">High to Low(price)</option>
          </select>
          <select value={ratingFilter} onChange={(e) => setRatingFilter(e.target.value)} className="filter-rating filter">
            <option value="Default">Default</option>
            <option value="1 to 5">1 to 5</option>
            <option value="5 to 1">5 to 1</option>
          </select>

        </nav>

      </div>
      <div>
        <div className="carousel-container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
            <h2>Рекомендуем</h2>
            <p style={{ cursor: "pointer", color: "white", fontWeight: "bold", marginRight: "40px" }} onClick={() => navigate("/products")}>Все товары</p>
          </div>
          <button className="carousel-btn left" onClick={scrollLeft}><FaChevronLeft color="#006dfd" /></button>
          <div className="carousel" ref={carouselRef}>
            {filteredProducts().slice(0, 100).map((product) => (
              <div className="carousel-item" key={product.id}>
                <li onClick={() => navigate(`/product/${product.id}`)} className="product" key={product.id}>
                  <div>
                    <img className="product-image" src={product.thumbnail} alt={product.title} />
                    <div className='btnsss'>
                      <button onClick={() => setheart(heart + 1)} className='heart'><FaHeart size={20} /></button>
                      <button className='scale'><RiScales3Fill size={30} /></button>
                    </div>
                  </div>
                  <div className="product-info">
                    <button className='btna'>Супер цена</button>
                    <p className='titles'>{product.title}</p>
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
                    <p className='skidka'><del>{Math.floor(product.price * 13000)} сум</del></p>
                    <p className="prices">{Math.floor(product.price * 13000 / 2)} сум</p>
                    <div className='pricess'>
                      250.000 сум x 12 мес
                    </div>
                    <div className='btni'>
                      <button className='btn1'>Купить в один клик</button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddToCart(product);
                          
                          if (!likedProducts[product.id]) {
                            setCount(count + 1);
                          } else {
                            setCount(count - 1);
                          }
                        }}
                        className="btns"
                      >

                        {likedProducts[product.id] ? (

                          <MdOutlineRemoveShoppingCart size={20} color="black" />

                        ) : (
                          <MdOutlineShoppingCart color='white' size={20} />

                        )}

                      </button>
                    </div>

                  </div>
                </li>

              </div>
            ))}
          </div>
          <button className="carousel-btn right" onClick={scrollRight}><FaChevronRight color="#006dfd" />
          </button>
        </div>

      </div>
      <div className='Products'>
        <ul className="product-list">
          {filteredProducts().map((product) => (
            <li onClick={() => {
              navigate(`/product/${product.id}`);
            }} className="product" key={product.id}>
              <div>
                <div>
                  {loadingi && <p style={{ color: "black" }}>Yuklanmoqda...</p>}
                  <img
                    className="product-image"
                    src={product.thumbnail}
                    alt={product.title}
                    onLoad={() => setLoadinge(false)} 
                    onError={() => setLoadinge(false)} 
                  />

                </div>
                <div className='btnsss'>
                  <button onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(product);
                    if (!likedProducts[product.id]) {
                      setCount(count + 1);
                    } else {
                      setCount(count - 1);
                    }

                  }} className='heart'><FaHeart size={20} /></button>
                  <button className='scale'><RiScales3Fill size={30} /></button>
                </div>
              </div>
              <div className="product-info">
                <button className='btna'>Супер цена</button>
                <p className='titles'>{product.title}</p>
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
                <p className='skidka'><del>{Math.floor(product.price * 13000)} сум</del></p>
                <p className='prices'>{Math.floor(product.price * 13000 / 2)} сум</p>
                <div className='pricess'>
                  250.000 сум x 12 мес
                </div>
                <div className='btni'>
                  <button className='btn1'>Купить в один клик</button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product);
                      if (!likedProducts[product.id]) {
                        setCount(count + 1);
                      } else {
                        setCount(count - 1);
                      }
                    }}
                    className="btns"
                  >

                    {likedProducts[product.id] ? (

                      <MdOutlineRemoveShoppingCart color="black" size={20} />

                    ) : (
                      <MdOutlineShoppingCart color='white' size={20} />
                    )}

                  </button>
                </div>

              </div>
            </li>
          ))}
        </ul>
      </div>
      {open && (
        <ModalWrapper open={open} onClose={() => setOpen(false)}>
          <IoIosCloseCircle
            onClick={() => setOpen(false)}
            style={{
              position: "absolute",
              top: "-10px",
              right: "-10px",
              cursor: "pointer",
            }}
            size={40}
            color="black"
          />
          <div className="discount">
            <div className="login-left">
              <h3>Вход или создать личный кабинет</h3>
              <form>
                <label htmlFor="phone">Телефон</label>
                <input
                  id="phone"
                  type="text"
                  value={phone}

                  placeholder="+998 (__) ___-__-__"
                  maxLength={19}
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginTop: "5px",
                    border: error ? "2px solid red" : "1px solid #ccc",
                    borderRadius: "5px",
                    fontSize: "16px",
                  }}
                />
                {error && <p style={{ color: "red", fontSize: "12px" }}>Не верный формат</p>}
              </form>
              <button className="btne">Получить код активации</button>
              <p className="or">или</p>
              <div className="socials">
                <button className="google"><FaGoogle /></button>
                <button className="face"><FaFacebookSquare />
                </button>
              </div>
            </div>
            <div className="login-right">
              <div className="modal-right">
                <div className="crudd">
                  <div className="card1">
                    <FaBoxesPacking color="#006dfd" size={40} />
                    <div>
                      <b>Больше не нужно ходить на базар</b>
                      <p>У нас выгодные цены и доставка до дома
                      </p>
                    </div>
                  </div>
                  <div className="card1">
                    <FaTruckFast color="#006dfd" size={40} />
                    <div>
                      <b>Быстрая доставка</b>
                      <p>delivery
                        Наш сервис удивит вас
                      </p>
                    </div>
                  </div>
                  <div className="card1">
                    <FaBox color="#006dfd" size={40} />
                    <div>
                      <b>Удобства для вас</b>
                      <p>
                        Быстрое оформление и гарантия на возврат в случае неисправности
                      </p>
                    </div>
                  </div>

                  <div className="card1">
                    <FaRegCreditCard color="#006dfd" size={40} />
                    <div>
                      <b>Рассрочка</b>
                      <p>
                        Без предоплаты на 3, 6 или 12 месяцев
                      </p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </ModalWrapper>
      )

      }
      {/* {modalopen && (
        <ModalWrapper open={modalopen} onClose={() => setModalOpen(false)}>
          <div className="discount">
            <div className="login-left">
              
              <h3>Вход или создать личный кабинет</h3>


            </div>
          </div>
        </ModalWrapper>
      )

      } */}
    </header>
  )
}

export default Products;


