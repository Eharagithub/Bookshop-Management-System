import React from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";


const UploadBook = () => {
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload a Book</h2>
      <form className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
      </div>
      
    </form>

    </div>
  )
}

export default UploadBook