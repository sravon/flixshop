import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, ADD_TO_CART } from '../redux/feaures/cartitem'

export default function Counter() {
  const count = useSelector((state) => state.cart.product)
  const dispatch = useDispatch()
  console.log(count)
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(ADD_TO_CART({id:1,name:'mila'}))}
        >
          Increment
        </button>
        <span>{count.length}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}