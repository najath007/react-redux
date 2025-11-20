import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from './counterSlice'

export default function CounterComponent() {
  // read value from Redux store
  const value = useSelector((state) => state.counter.value)
  // get dispatch function
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Count: {value}</h2>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}
