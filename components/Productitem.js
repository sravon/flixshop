import React from 'react'
import { add_to_cart } from '../helpers/cart'
import { ADD_TO_CART } from '../redux/feaures/cartitem'
import { useDispatch } from 'react-redux'

export default function Productitem({product}) {
  const dispatch = useDispatch()

  const addCart = async (id) =>{
    const checkExists = await add_to_cart(id,'single');
    if(checkExists){
      alert("Product Already Exits in Cart")
    }else{
      window.scrollTo(0, 0)
      dispatch(ADD_TO_CART({id:id,quantity: 1}));
    }
    
  }

  return (
    <div className="w-full ">
        <div className="bg-gray-500">
            <img src="images/all-img/cat3.jpg" className="w-full rounded" />
            <p className="bg-yellow-200 text-center w-20 rounded m-1 p-1">10% Off</p>
            <h3 className="text-white text-xl p-2">{product.name}</h3>
            <div className="flex justify-between px-2">
            <p>★★★★(21)</p>
            <p className="text-lg text-red-700 font-bold">{product.new_price} Tk</p>
            </div>
            <div className="flex justify-between p-2">
            <button 
              className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-400"
              onClick={() =>addCart(product.id)}
            >Add to cart</button>
            <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-400">Buy Now</button>
            </div>
        </div>					
    </div>
  )
}
