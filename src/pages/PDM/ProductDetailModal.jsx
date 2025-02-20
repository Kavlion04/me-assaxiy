import { useStateValues } from '../../pages/About/AboutFavorite';
import './index.css'
const ProductDetailModal = () => {
  const { wishlist } = useStateValues();
  return (
    <div>
      <h1>
        Wishlist
      </h1>

      {wishlist.map((product) => {

        <ul className='product-list'>
          <li onClick={() => {
            navigate(`/product/${product.id}`);
          }} className="product" key={product.id}>
            <div>
              <div>
                {/* Agar loading true bo‘lsa, "Yuklanmoqda..." chiqadi */}
                {loadingi && <p style={{ color: "black" }}>Yuklanmoqda...</p>}

                {/* Rasm yuklanganda loading false bo‘lishi uchun onLoad qo‘shildi */}
                <img
                  className="product-image"
                  src={product.thumbnail}
                  alt={product.title}
                  onLoad={() => setLoadinge(false)} // Rasm yuklangandan keyin loading o‘chadi
                  onError={() => setLoadinge(false)} // Agar rasm yuklanmasa ham loading o‘chadi
                />

              </div>
              <div className='btnsss'>
                <button className='heart'><FaHeart size={20} /></button>
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
                    setCount(count + 1)
                    e.stopPropagation()
                  }}
                  className="btns"
                >

                  {likedProducts[product.id] ? (

                    <FaHeart color='red' size={20} />
                  ) : (
                    <MdOutlineShoppingCart color='white' size={20} />
                  )}

                </button>
              </div>

            </div>
          </li>
        </ul>
      })}
    </div>
  )
}

export default ProductDetailModal