import React from 'react'
import {BsArrowLeft} from 'react-icons/bs';
import {Link} from 'react-router-dom';
function backbutton({destination='/'}) {
return (
        <div className='m-10 flex'><Link to={destination}><BsArrowLeft className="text-2xl"/></Link></div>
      )
}

export default backbutton