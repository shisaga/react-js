import React, { useState } from 'react'

const Tour = ({id,image,info,price,name,removeTours}) => {

 const [ readMore,setreadMore] =  useState(false);
  return (
    <div>
       <article className='single-tour'>
        <img src ={image}  alt = {name}></img>
        <footer>
         <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className ="tour-price">${price}</h4>
          
         </div>
         <p>{readMore? info:`${info.substring(0,200)}....` }
          <button onClick={()=>{setreadMore(true)}}>
            {readMore ? '':'read more'}
          </button>
          <button onClick={()=>{setreadMore(false)}}>
            {readMore?'show less':''}
          </button>
         </p>
         <button className='delete-btn' onClick={()=>{removeTours(id)}} >not interested</button>
         </footer>

       </article>

    </div>
  );
}

export default Tour
