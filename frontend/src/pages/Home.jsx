import React from 'react'
import axios from 'axios';
import Spinner from '../components/Spinner';
import {useEffect,useState} from 'react';
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import {Link} from 'react-router-dom'
function Home() {
    const [data, setData] = useState([]);
    const [loading,setLoading]=useState(false);
    useEffect(()=>
    {
        setLoading(true);
        axios.get('http://localhost:3000/books')
        .then((res)=>{
            setData(res.data.data)
            setLoading(false);
        })
        .catch((err)=>
        {
            console.log(err.message);
            setLoading(false);
        })
    },[])
  return (
   <div>
    {loading ?  <Spinner/> : "" }
    <div className="p-4 mt-20">
        <div className="flex justify-around gap-20.5 ">
            <h2 className='text-3xl pb-20'>Book List</h2>
            <Link to='/books/create'>
            <MdOutlineAddBox  className="bg-green-500 w-6 h-6  text-white cursor-pointer " />
            </Link>
        </div>
        <table className='w-full border-separate border-spacing-2'>
            <thead>
                <tr>
                <th className='border border-slate-600 rounded-md'>SI.NO</th>
                <th className='border border-slate-600 rounded-md' >Book Name</th>
                <th className='border border-slate-600 rounded-md max-md:hidden'>Author</th>
                <th className='border border-slate-600 rounded-md max-md:hidden'>Publish Year</th>
                <th className='border border-slate-600 rounded-md'>Operations</th>
                </tr>
            </thead>
            {console.log(data)}
        <tbody>
        {data.map((item,ind)=>
        { return(
            <tr key={item._id} className='h-8'>
                <td className='border border-slate-700 rounded-md text-center'>{ind+1}</td>
                <td className='border border-slate-700 rounded-md text-center'>{item.title}</td>
                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{item.author}</td>
                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{item.publishYear}</td>
                <td className='border border-slate-700 rounded-md text-center'>
                    <div className="flex justify-around gap-x-4'">
                    <Link to={`/books/details/${item._id}`} className='text-blue-400 text-2xl ' >
                        <BsInfoCircle/>
                    </Link>
                    <Link to={`/books/edit/${item._id}` } className='bg-green-400 text-2xl ' >
                        <AiOutlineEdit/>
                    </Link>
                    <Link to={`/books/delete/${item._id}`}  className='bg-red-400 text-2xl '  >
                        <MdOutlineDelete/>
                    </Link>
                    </div>          
                </td>
            </tr>
        )})
    }
    </tbody>
    </table>
    </div>
</div>

  )
}

export default Home