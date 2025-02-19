import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./swiper.css";
import { Navigation } from "swiper/modules";

export default function App() {
    const [products, setProducts] = useState([]); // API-dan ma'lumotlarni saqlash uchun state

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data.products)) // Faqat `products` massivini olish
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {products.length > 0 ? (
                products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className="card">
                            <img src={product.thumbnail} alt={product.title} className="card-img" />
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <strong>${product.price}</strong>
                        </div>
                    </SwiperSlide>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </Swiper>
    );
}
