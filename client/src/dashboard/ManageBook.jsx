import React, { useEffect, useState } from 'react'
import { Table } from "flowbite-react";

const ManageBook = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect( () =>{
    fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setAllBooks(data));
  },  [])

  // Delete a book
  const handleDelete =  (id) =>{
    console.log(id);
    fetch(`http://localhost:5000/book/${id}`, {
      method: "DELETE",
    }).then(res => res.json()).then(data => {
      alert("Book is deleted successfully!")
      //setAllBooks(data);
    })
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Your Book</h2>

      {/*table for book data */}
      <Table striped className='lg:w-[1280px]'>

        <Table.Head>
          <Table.HeadCell>No:</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>
        {
          allBooks.map((book, index) =>  <Table.Body className="divide-y" key={book._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {index + 1}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {book.bookTitle}
            </Table.Cell>
            <Table.Cell>{book.authorName}</Table.Cell>
            <Table.Cell>{book.category}</Table.Cell>
            <Table.Cell>$100</Table.Cell>
            <Table.Cell>
            <a href={`/admin/dashboard/edit-book/${book._id}`}
              className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5"
            >
              <p>Edit</p>
            </a>
            <div>
                  <button
                    onClick={() => handleDelete(book._id)}
                    className='bg-blue-600 px-3 font-medium text-black rounded-sm hover:bg-slate-600 mr-5'
                  >
                    Delete
                  </button>
                </div>
            </Table.Cell>
          </Table.Row>

          </Table.Body>)
        }
         
       
      </Table>
    </div>
  )
}

export default ManageBook