import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement, reset } from '../features/counterSlice'

export default function CounterComponent() {
  const value = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Count: {value}</h1>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>  
    </div>
  )
}
