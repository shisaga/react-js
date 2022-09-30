import React from 'react'
import { useParams } from "react-router-dom"
const Shop = () => {
   const {id} =useParams()
   console.log(useParams())
  return (
    <div>
      <h1>shoping {id}</h1>
    </div>
  )
}

export default Shop
