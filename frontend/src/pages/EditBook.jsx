import React, { useEffect } from 'react'
import { useState } from 'react';
import Backbutton from '../components/Backbutton';
import {useNavigate,useParams} from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';
function Editbook() {
  const navigate= useNavigate();
  const [title,settitle]=useState("");
  const [author,setauthor]=useState("");
  const [publishYear,setpublishYear]=useState(0);
  const [loading,setLoading]=useState(false);
  const {id}=useParams();
  useEffect(()=>
  {
    setLoading(true);
    axios.get(`http://localhost:3000/books/${id}`)
    .then((res)=>
    {
      settitle(res.data.title);
      setauthor(res.data.author);
      setpublishYear(res.data.publishYear);
      setLoading(false);
    })
    .catch((err)=>
    {
      console.log(err.message);
    })
  },[])
  function handlebook()
  {
    setLoading(true);
    const book={title:title,author:author,publishYear:publishYear}
    axios.put(`http://localhost:3000/books/${id}`,book)
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
        <h2 className='text-center text-3xl'>Book Edit</h2>
        <input required className='border-2 border-gray-500 px-4 py-2 w-full' value={title} placeholder='Book Title' onChange={(e)=>settitle(e.target.value)}/>
        <input required className='border-2 border-gray-500 px-4 py-2 w-full' value={author} placeholder='Author' onChange={(e)=>setauthor(e.target.value)}/>
        <input  required className='border-2 border-gray-500 px-4 py-2 w-full' value={publishYear} placeholder='publishYear' onChange={(e)=>setpublishYear(e.target.value)}/>
        <button className='bg-blue-600 text-white text-xl w-20 h-10 rounded-sm mx-auto cursor-pointer' onClick={handlebook}>Submit</button>
      </div>
    </div>
  )
}

export default Editbook