import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const BestSellerBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect( () =>{
    fetch("").then(res => res.json()).then(data => console.log(data))
  }, [])
  return (
    <div>
      <BookCards books={books} headline="Best Seller Books"/>
    </div>
  )
}

export default BestSellerBooks;