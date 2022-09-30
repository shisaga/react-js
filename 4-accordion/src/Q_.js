import React, {useState} from 'react'
// import {IoMdAddCircle,GrSubtractCircle} from  'react-icons';
const Q_ = (que) => {
 console.log(que.ques.id)
 const [cur,setcur]= useState(true)
 console.log(cur);

  return (
    <article>
    <div className='q_place'>
    <h4>{que.ques.title}</h4>
   
    <p>{cur? que.ques.info : ""}</p>
    {cur?  <button  className='btn' onClick={()=>{
      return setcur(false);
    }}><img src="https://cdn-icons-png.flaticon.com/512/992/992683.png"  alt='helo'></img></button>
    
    : 
    <button className='btn' onClick={()=>{
       return setcur(true)
    }}><img src="https://cdn-icons-png.flaticon.com/512/4210/4210903.png"   alt='helo'></img></button>
    }
  
    
    </div>
    </article>
  )
}

export default Q_
