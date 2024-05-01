import React, { useState } from 'react';
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror"
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectValue = (Event) => {
    console.log(Event.target.value);
    setSelectedBookCategory(Event.target.value);
  }

  //handle book submission
  

    function handleBookSubmit(Event) {
      Event.preventDefault();
      const form = Event.target;

      const bookTitle = form.bookTitle.value;
      const authorName = form.authorName.value;
      const imageURL = form.imageURL.value;
      const category = form.categoryName.value;
      const bookDescription = form.bookDescription.value;
      const bookPDFURL = form.bookPDFURL.value;

      const bookObj = {
        bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL};
      console.log(bookObj);

    }

    return (
      <div className='px-4 my-12'>
        <h2 className='mb-8 text-3xl font-bold'>Upload a Book</h2>

        <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">

          {/*Row 1 */}
          <div className='flex gap-8'>

            {/*Book title */}
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label htmlFor="bookTitle" value="Book Title" />
              </div>
              <TextInput id="bookTitle" name="bookTitle" placeholder="Book name" required type="text"  />
            </div>

            {/*Author Name*/}
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label htmlFor="authorName" value="Author Name" />
              </div>
              <TextInput id="authorName" name="authorName" placeholder="Author Name" required type="text"  />
            </div>
          </div>

          {/*Row 2 */}
          <div className='flex gap-8'>

            {/*image URL */}
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label htmlFor="imageURL" value="Book Image URL" />
              </div>
              <TextInput id="imageURL" name="imageURL" placeholder="Book Image URL" required type="text"  />
            </div>

            {/*Category*/}
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label htmlFor="inputState" value="Book Category" />
              </div>
              <select id="inputState" name="categoryName" value={selectedBookCategory} onChange={handleChangeSelectValue} className="block w-full  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                {bookCategories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          {/*Row 3 - Book description*/}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="bookDescription" value="Book Description" />
            </div>
            <Textarea id="bookDescription" name='bookDescription' placeholder='Write your book description...' required className='w-full,' rows={5} />
          </div>

          {/*PDF link upload */}
          <div>
            <div className='mb-2 block'>
              <Label htmlFor="bookPDFURL" value="Book PDF URL" />

            </div>
            <TextInput id='bookPDFURL' name='bookPDFURL' placeholder='Book PDF URL' required type='text' />

          </div>

          <Button type="submit" className='mt-5'>Upload Book</Button>

        </form>
      </div>
    );
  }


export default UploadBook;
