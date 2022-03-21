import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { increaseQuantity, loadGuestCart, loadUserCart, logUserCart, removeCart } from '../helpers/cart'
import { ADD_TO_CART, initialLoad } from '../redux/feaures/cartitem'
import { useDispatch,useSelector } from 'react-redux'

export default function() {
  const logUser = useSelector((state) => state.user.isLoggedIn)
  const cartitem = useSelector((state) => state.cart.product)
  const [items, setitems] = useState([])
  const dispatch = useDispatch()
  
  useEffect(async () => {

    const data = (logUser)? await loadUserCart() : loadGuestCart()
    
    console.log(logUser)
    setitems(data)
    
  }, [logUser])
  
  const plusMinusItemInCart = (item,quantity) =>{

    increaseQuantity(item,quantity);
    dispatch(ADD_TO_CART({id:item.id,quantity: quantity}));
  }

  const removeItemFromCart = async (id) => {
    const new_items = removeCart(id)
    dispatch(initialLoad(new_items))
    const data = await loadGuestCart()
    setitems(data)
  }

  return (
    <div className='md:flex bg-slate-100 p-5 w-full min-h-screen'>
        <div className='md:flex-1 w-2/3'>
          <div className="w-5/6 mx-auto">
          <table className="table-auto w-full" cellPadding="5">
            <thead className="bg-yellow-400">
              <tr className='p-5 text-white'>
                <th>Item</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {(items)?items.map( (item,i) =>(
                <tr key={item.id} className='text-black  border-b-4 border-indigo-500'>
                  <td>
                    <Image
                      className="object-contain"
                      src="https://api.shrabon.me/movie1.jpg"
                      width={100} height={100}
                      priority
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.new_price} TK</td>
                  <td>
                    <div className='flex max-h-8 items-center'>
                      <span className='h-10'>
                        <button 
                          className='bg-red-500 px-3 text-2xl font-extrabold text-white h-10'
                          onClick={() => plusMinusItemInCart(item,cartitem[i].quantity-1)}
                        >-</button>
                      </span>
                      <p type="text" className="w-10 bg-gray-300 h-10 text-black p-2">{cartitem[i].quantity}</p>
                      <span className='h-10'>
                        <button 
                          className='bg-red-500 px-3 text-2xl font-extrabold text-green-900 h-10 hover:bg-red-300'
                          onClick={() => plusMinusItemInCart(item,cartitem[i].quantity+1)}
                        >+</button>
                      </span>
                    </div>
                  </td>
                  <td>
                    {item.new_price*cartitem[i].quantity}
                  </td>
                  <td>
                  <button 
                    className='px-3 text-2xl font-bold text-red-500 border-2 h-10 hover:bg-gray-400'
                    onClick={() => removeItemFromCart(item.id) }
                  >X</button>
                  </td>
                </tr>
              )):null}
              
              
            </tbody>
          </table>
          </div>
        </div>
        <div className='md:flex-none md:w-1/3'>
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between p-5 bg-gray-500 text-white">
                <h2>Cart Sub Total</h2>
                <h2>400Tk</h2>
              </div>
              <div className="flex justify-between p-5 bg-gray-500 text-white">
                <h2>Cart Sub Total</h2>
                <h2>400Tk</h2>
              </div>
              <div className="flex justify-between p-5 bg-gray-500 text-white">
                <h2>Cart Sub Total</h2>
                <h2>400Tk</h2>
              </div>
            </div>
        </div>
    </div>
  )
}
