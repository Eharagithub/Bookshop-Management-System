import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './BannerCard.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const BannerCard = () => {
    return (
        <div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 50,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://github.com/mdalmamunit427/book-inventory-starter-files/blob/main/assets/banner-books/book1.png?raw=true" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://github.com/mdalmamunit427/book-inventory-starter-files/blob/main/assets/banner-books/book2.png?raw=true" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://github.com/mdalmamunit427/book-inventory-starter-files/blob/main/assets/banner-books/book3.png?raw=true" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://github.com/mdalmamunit427/book-inventory-starter-files/blob/main/assets/banner-books/book4.png?raw=true" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://github.com/mdalmamunit427/book-inventory-starter-files/blob/main/assets/banner-books/book5.png?raw=true" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default BannerCard