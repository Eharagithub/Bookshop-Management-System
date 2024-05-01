import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom'; // Adjust the import path based on your routing library
import { FaCartShopping } from 'react-icons/fa6';


const BookCards = ({headline,books}) => {
  console.log(books);

  return (
    <div className='my-16 px-4 lg:px-24'>
        <h2 className='text-5xl text-center font-bold text-black my-5'>{headline}</h2>

        {/*cards */}
        <div className='mt-12'>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper w-full h-full"
      >{
        books.map(book =><SwiperSlide key={book._id}>
          <Link to={`/book/${book._id}`}>

            <div className='relative'>
              <img src={book.imageURL} alt=""/>
              <div className=' absolute top-1 right-12 bg-blue-500 hover:bg-black p-2 rounded'>
                <FaCartShopping className='w-4 h-4 text-white'/>
              </div>
            </div>
            <div>
              <div>
              <h3>{book.bookTitle}</h3>
              <p>{book.authorName}</p>
              </div>
          

            </div>
          </Link>
        </SwiperSlide>)
      }
      </Swiper>
        </div>
    </div>
    
  )
}

export default BookCards