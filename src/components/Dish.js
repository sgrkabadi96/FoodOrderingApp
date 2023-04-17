import React from 'react'
import { CDNURL } from '../utils/constants';



export default function Dish(props) {
  const {card , addToCart , isCart} = props;
  return (
    <div  className= "w-[207px] m-4  border p-5 hover:border-black">
        <img className='dish-image' src= {CDNURL + card.info.imageId }  alt=' Img not found'></img>
       <h4>{card.info.name}</h4>
        <h5> Rs. {card.info.price / 100 }.00 </h5>
        {isCart ? <></>  : (
          <button className='bg-gray-700 p-2 text-white rounded md' onClick={()=> addToCart(card) }>Add to cart</button>

        )}
        
    </div>
  )
}
