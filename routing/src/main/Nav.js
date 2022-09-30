import React from 'react'
import { Outlet, Link, } from "react-router-dom";
const Nav = () => {
  return (
    <div>
   
      <nav>
        <h3>logo</h3>
        <ul className='pages'>
            <li>
            <Link  to={`/`} >About</Link>
            </li>
            <li>
            <Link to={`/shop`} >Shop</Link>
            </li>
            <li>
            <Link to={`/shop/1,1`} >Shop</Link>
            </li>
           
            <li>
            <Link to={`/shop/2`} >Shop</Link>
            </li>
            <li>
            <Link to={`/shop/3`} >Shop</Link>
            </li>
           
           
        </ul>
      </nav>
    
    </div>
  )
}

export default Nav
