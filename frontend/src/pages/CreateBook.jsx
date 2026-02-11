import React from 'react'
import { useState } from 'react';
import Backbutton from '../components/Backbutton';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';
function CreateBook() {
  const navigate= useNavigate();
  const [title,settitle]=useState("");
  const [author,setauthor]=useState("");
  const [publishYear,setpublishYear]=useState("");
  const [loading,setLoading]=useState(false);
  function handlebook()
  {
    setLoading(true);
    const book={title:title,author:author,publishYear:publishYear}
    axios.post('http://localhost:3000/books',book)
    .then(()=>
    {
      setLoading(false);
      navigate('/');
    })
    .catch((err)=>{
      setLoading(false);
      console.log(err.message);
    }
    )
  }
  return (
    <div>
      {loading? <Spinner/>: ""}
      <Backbutton />
      <div className='flex flex-col border-2 items-center justify-center border-sky-400 rounded-xl w-[600px] p-4 mx-auto gap-10'>
        <h2 className='text-center text-3xl'>Book Creation</h2>
        <input required className='border-2 border-gray-500 px-4 py-2 w-full' value={title} placeholder='Book Title' onChange={(e)=>settitle(e.target.value)}/>
        <input required className='border-2 border-gray-500 px-4 py-2 w-full' value={author} placeholder='Author' onChange={(e)=>setauthor(e.target.value)}/>
        <input  required className='border-2 border-gray-500 px-4 py-2 w-full' value={publishYear} placeholder='publishYear' onChange={(e)=>setpublishYear(e.target.value)}/>
        <button className='bg-blue-600 text-white text-xl w-20 h-10 rounded-sm mx-auto cursor-pointer' onClick={handlebook}>Submit</button>
      </div>
    </div>
  )
}

export default CreateBook